import React from "react";
import LoginPage from "./components/Connection/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//import CardsProduits from "./components/CardsProduits/CardsProduits";
import Panier from "./components/Panier/Panier";
import FicheProduit from "./components/FicheProduit/FicheProduit";
//import Sorting from "./components/Sorting/Sorting.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";
import { CookiesProvider, useCookies } from "react-cookie";
import Home from "./components/HomePage/Home";
import AddProduits from "./components/addProduits/AddProduits";
function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }

  return (
    <CookiesProvider>
      <div id="app">
        <Router>
          <Header />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/ficheproduit" element={<FicheProduit />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/ajout" element={<AddProduits />} />
            {cookies.user ? (
              <Route path="/" element={<Home />} user={cookies.user} />
            ) : (
              <Route path="/" element={<LoginPage />} />
            )}
          </Routes>
          <Footer />
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;

