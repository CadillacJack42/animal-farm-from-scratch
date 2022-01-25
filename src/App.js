// import logo from './logo.svg';
import './App.css';
import { animals } from './data';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const greet = 'Hello and Welcome To Cadillac Jacks animal Farm';
const userEmail = 'CadillacJack@email.com';

function App() {
  return (
    <>
      <Header greeting={greet} />
      <Main animalsArr={animals} />
      <Footer email={userEmail} />
    </>
   
  );
}

export default App;
