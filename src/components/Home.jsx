import React from "react";
import Social from "./Social";
import { Tab } from "react-tabs";
const Home = ({ onNavigateToPortfolio }) => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(public/assets/img/1.jpg)",
              }}
            >
          </div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Jonny Gilman</h3>
            <p className="job">
              Software Developer studying at Utah State University who loves learning and spending time in the outdoors.
            </p>
            <div className="tokyo_tm_button" style={{marginBottom: '30px'}}>
              <button 
                type="button" 
                className="ib-button no-margin"
                onClick={onNavigateToPortfolio} 
                >
                View Projects
              </button>
            </div>
            {/* END JOB */}
            <Social/>
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
