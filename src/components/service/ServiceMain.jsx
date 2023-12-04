import React from "react";
import FunFact from "./FunFact";
import Partners from "./Partners";
import Pricing from "./Pricing";
import Services from "./Services";

const ServiceMain = () => {
  return (
    <>
      {/* SERVICE */}

      <div className="container">
        <div className="tokyo_tm_services">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Skills</span>
                <h3>Skills and Experience</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}

          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      {/* <div className="tokyo_tm_partners">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Partners</h3>
          </div>
          <div className="partners_inner">
            <ul>
              <Partners />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End partners */}

      {/* <div className="tokyo_tm_facts">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Fun Facts</h3>
          </div>
          <div className="list">
            <ul>
              <FunFact />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End funfacts */}

      {/* <div className="tokyo_tm_pricing">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Pricing</h3>
          </div>
          <div className="list">
            <ul>
              <Pricing />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End pricing */}

      {/* /SERVICE */}
    </>
  );
};

export default ServiceMain;
