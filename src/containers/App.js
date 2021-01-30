import SearchBar from '../components/search-bar'
import VideoList from '../components/video-list'

const URL = "https://themoviedb.org/"
const API_KEY = "cb01c3a42a658cbeb1d04238ec2a5dee"

const App = () => {
  return (
    <div class="container">
      <SearchBar />
      <VideoList />
    </div>
  );
}

export default App;
