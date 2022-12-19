import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { Landing } from "./components/welcome/LandingPage.jsx";
import { Home } from "./components/Home/Home.jsx";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe";
import { RecipeDetail } from "./components/RecipeDetail/RecipeDetail";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={CreateRecipe} />
      <Route exact path="/detail/:id" component={RecipeDetail}></Route>
    </div>
  );
}

export default App;
