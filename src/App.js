import { GlobalStyle } from './utilities/Global/GlobalStyles'
import Navbar from './containers/Navbar/Navbar'
import Main from './containers/Main/Main'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
