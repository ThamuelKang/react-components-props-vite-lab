import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import logo from "../assets/logo.js"

function App() {
  return (
    <div className="App">
      <Header name="Duck Blog" />
      <About imageURL={logo} altName="blog logo" />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
