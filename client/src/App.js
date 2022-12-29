import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { Landing } from "./components/welcome/LandingPage.jsx";
import { Home } from "./components/Home/Home.jsx";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
import { RecipeDetail } from "./components/RecipeDetail/RecipeDetail";
import { UpdateRecipe } from "./components/CreateRecipe/UpdateRecipe";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={CreateRecipe} />
      <Route exact path="/detail/:id" component={RecipeDetail}></Route>
      <Route exact path="/update/:id" component={UpdateRecipe}></Route>
    </div>
  );
}

export default App;
