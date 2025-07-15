import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import logo from "../assets/logo.png"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Duck Blog" />
      <About imageURL={logo} altName="blog logo" />
      <ArticleList />
    </div>
  );
}

export default App;
