
import './App.css';
import { Routes ,Route} from "react-router-dom";
import Home from './Home';
import Movie from './Movie'
import Error from './Error'

function App() {
  return (
    <>
    
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<Movie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    
    
    
    </>
  );
}

export default App;
