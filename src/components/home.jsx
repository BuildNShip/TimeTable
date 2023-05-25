import React from 'react';
import {Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to TimeTable</h1>
      <Link to="/set-timetable/">
        <button>
              Setup TimeTable
            </button>
          </Link>
    </div>
  );
};

export default Home;