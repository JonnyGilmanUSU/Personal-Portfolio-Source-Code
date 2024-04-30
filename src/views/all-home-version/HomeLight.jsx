import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import Portfolio from "../../components/PortfolioCreative";
import News from "../../components/News";
import ServiceMain from "../../components/service/ServiceMain";
import Contact from "../../components/Contact";
import CopyRight from "../../components/CopyRight";
import PageTitle from "../../components/PageTitle";

const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  const goToPortfolio = () => {
    setTabIndex(3);  // Assuming the Portfolio tab is the fourth tab
  };


  return (
    <>
      <PageTitle title="Jonny Gilman" />
      {/* End page title for seo */}

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
      <TabList>
          {/* Left menu content */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/logo.png" alt="brand" />
                </Link>
              </div>
              <div className="menu">
                <ul>
                  {/* Home */}
                  <Tab>
                    <img className="svg" src="/assets/img/svg/home-run.svg" alt="home" />
                    <span className="menu_content">Home</span>
                  </Tab>
                  {/* About */}
                  <Tab>
                    <img className="svg" src="/assets/img/svg/avatar.svg" alt="avatar" />
                    <span className="menu_content">About</span>
                  </Tab>
                  {/* Skills */}
                  <Tab>
                    <img className="svg" src="/assets/img/svg/setting.svg" alt="settings" />
                    <span className="menu_content">Skills</span>
                  </Tab>
                  {/* Portfolio */}
                  <Tab>
                    <img className="svg" src="/assets/img/svg/briefcase.svg" alt="briefcase" />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  {/* Contact */}
                  <Tab>
                    <img className="svg" src="/assets/img/svg/mail.svg" alt="mail" />
                    <span className="menu_content">Contact</span>
                  </Tab>
                </ul>
              </div>
              <CopyRight />
            </div>
          </div>
      </TabList>

        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home onNavigateToPortfolio={goToPortfolio}/>
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <ServiceMain />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                <Portfolio />
              </TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}
{/* 
              <TabPanel>
                <News />
              </TabPanel> */}
              {/* END NEWS MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
