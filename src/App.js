import { GlobalStyle } from './utilities/Global/GlobalStyles'
import Navbar from './containers/Navbar/Navbar'
import Main from './containers/Main/Main'
import Create from './components/Create/Create'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  return (
    <Switch>
      <div className="App">
        <GlobalStyle />
        <Route exact path="/">
            <Navbar />
            <Main posts={posts} setPosts={setPosts}/>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
