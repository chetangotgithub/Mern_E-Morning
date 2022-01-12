import { useState } from "react";
import "../Css/home.css";
export const Home = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="title">Welcome to your Morning app</h1>
        <h1 className="desc">
          Here you will find Top news Weather updates and also add your notes
        </h1>
        <div className="but">
          <a className="btn123" href="/News">
            Top News
          </a>
          <a className="btn123" href="/Weather">
            Check today's Weather
          </a>
          <a className="btn123" href="/Notes">
            Add your Notes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
