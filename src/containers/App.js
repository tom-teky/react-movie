import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "../components/video-list";
import VideoDetail from "../components/video-detail";
import Video from "../components/video";
import axios from "axios";

const API_END_POINT = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=cb01c3a42a658cbeb1d04238ec2a5dee";
const DEFAULT_TYPE_SEARCH = "discover";
const DEFAULT_PARAM = "language=fr&include_adult=false";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }

  UNSAFE_componentWillMount() {
    this.initMovies();
  }

  initMovies() {
    axios
      .get(
        `${API_END_POINT}${DEFAULT_TYPE_SEARCH}/movie?${API_KEY}&sort_by=popularity.desc&${DEFAULT_PARAM}`
      )
      .then(
        function (response) {
          this.setState(
            {
              movieList: response.data.results.slice(1, 6),
              currentMovie: response.data.results[0],
            },
            function () {
              this.applyVideoToCurrentMovie();
            }
          );
        }.bind(this)
      );
  }

  applyVideoToCurrentMovie() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos`
      )
      .then(
        function (response) {
          const youtube_key = response.data.videos.results[0].key;
          let newCurrentMovieState = this.state.currentMovie;
          newCurrentMovieState.videoId = youtube_key;
          this.setState({ currentMovie: newCurrentMovieState });
        }.bind(this)
      );
  }

  onClickListItem(movie) {
    this.setState({ currentMovie: movie }, function () {
      this.applyVideoToCurrentMovie();
      this.setRecommendation();
    });
  }

  onClickSearch(searchText) {
    if (searchText) {
      axios
        .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`)
        .then(function (response) {
          if (response.data && response.data.results[0]) {
            if (response.data.results[0].id !== this.state.currentMovie.id) {
              this.setState({ currentMovie: response.data.results[0] }, () => {
                this.applyVideoToCurrentMovie();
                this.setRecommendation();
              });
            }
          }
        }.bind(this));
    }
  }

  setRecommendation(){
    axios
      .get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`)
      .then(
        function (response) {
          this.setState({movieList: response.data.results.slice(0, 5),});
        }.bind(this)
      );
  }

  render() {
    const renderVideoList = () => {
      if (this.state.movieList.length >= 5) {
        return (
          <VideoList
            movieList={this.state.movieList}
            callback={this.onClickListItem.bind(this)}
          />
        );
      }
    };
    return (
      <div className="container">
        <div className="search_bar">
          <SearchBar callback={this.onClickSearch.bind(this)} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetail
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>
          <div className="col-md-4">{renderVideoList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
