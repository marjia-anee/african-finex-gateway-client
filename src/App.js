import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import Home from "./pages/Home";
import LastPage from "./pages/LastPage";
import PageFour from "./pages/PageFour";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";
import SellFour from "./pages/SellFour";
import SellOne from "./pages/SellOne";
import SellThree from "./pages/SellThree";
import SellTwo from "./pages/SellTwo";

export const UserContext = createContext();


function App() {

  const [country, setCountry] = useState(null);
  const [finalWallet, setFinalWallet] = useState("");
  const [finalWalletSell, setFinalWalletSell] = useState("");
  const [token, setToken] = useState("");
  const [account, setAccount] = useState("");
  

  return (
    <UserContext.Provider
      value={{
        country,
        setCountry,
        finalWallet,
        setFinalWallet,
        finalWalletSell,
        setFinalWalletSell,
        token,
        setToken,
        account,
        setAccount,
      }}
    >
    <Router>

        <Switch>

          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/page1">
          <Header></Header>
            <PageOne></PageOne>
          </Route>

          <Route path="/page2">
            <Header></Header>
            <PageTwo />
          </Route>
          
          <Route path="/page3">
            <Header></Header>
            <PageThree />
          </Route>
           <Route path="/Page4">
             <Header></Header>
            <PageFour />
          </Route>
          <Route path="/sell1">
            <Header></Header>
            <SellOne />
          </Route>
          <Route path="/sell2">
            <Header></Header>
            <SellTwo />
          </Route>
          <Route path="/sell3">
            <Header></Header>
            <SellThree />
          </Route>
          <Route path="/sell4">
            <Header></Header>
            <SellFour />
          </Route>
          <Route path="/lastPage">
            <LastPage />
          </Route> 
        </Switch>
      </Router>
     </UserContext.Provider>

  );
}

export default App;
