import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Welcome to Endurr</h1>
        <p>
          Endurr connects you with workout buddies online, wherever you are.
          Schedule your gym sessions, stay motivated, and crush your fitness
          goals together!
        </p>

        {/* Correct path to auth route */}
        <Link to="/auth" className="btn hero-btn">
          Join for free
        </Link>

        {/* Navigate to dashboard demo */}
        <Link to="/dashboard" className="btn hero-btn">
          Try demo
        </Link>
      </div>
    </section>
  );
};

export default Hero;
