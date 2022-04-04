import React from "react";
import withLayout from "./withLayout";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="banner">
        <h1>Welcome to my webpage</h1>
        <p>
          This is a website about myself. I am a Teacher as well as a programmer. I
          am thinking of leaving teaching to learning programming.
        </p>
        <div className="actions-wrap">
          <button className="btn-outline" onClick={() => navigate("/about")}>
            About Me
          </button>
          <button className="btn-contain" onClick={() => navigate("/blog")}>
            Read Blogs
          </button>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);
