import React, { Component } from "react"
import SearchBar from "../components/search-bar"
import VideoList from "../components/video-list"
import VideoDetail from '../components/video-detail'
import axios from "axios"

const API_END_POINT = "https://api.themoviedb.org/3/"
const API_KEY = "cb01c3a42a658cbeb1d04238ec2a5dee"
const DEFAULT_TYPE_SEARCH ="discover"
const DEFAULT_PARAM = "language=fr&include_adult=false"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {movieList:{}, currentMovie:{}}
  }

  UNSAFE_componentWillMount() {
    this.initMovies();
  }

  initMovies(){
    axios.get(`${API_END_POINT}${DEFAULT_TYPE_SEARCH}/movie?api_key=${API_KEY}&sort_by=popularity.desc&${DEFAULT_PARAM}`).then(function(response){
      this.setState({movieList:response.data.results.slice(1,6), currentMovie:response.data.results[0]})
    }.bind(this))
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoList movieList={this.state.movieList} />
        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
      </div>
    )
  }
}

export default App;
