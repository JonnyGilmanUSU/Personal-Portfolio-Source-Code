import React, { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";

Modal.setAppElement("#root");

const portfolioData = [
  {
    id: 1,
    title: "Multi Shop Eccomerce (React App)",
    portfolioThumbnail: "assets/img/portfolio/multiShop.jpg",
    modalThumbnail: "assets/img/portfolio/multiShop.jpg",
    portflioExampleLink: "https://multishop-24c0b.web.app/",
    overview: "Multi Shop is an eccomerce website that was built for a mid term exam for a advanced front end course. The stying was provided for me, but all the javascript logic, and use of react components were created by myself. Built with the latest React features, this app offers a seamless experience for creating, organizing, and tracking tasks with real-time updates. The application stands out for its clean UI, intuitive interaction patterns, and responsive design, ensuring a great experience across all devices.",
    projectOverview:  [      
      {
        section: "State Management",
        content: "To handle the application's state, I leveraged the useState hook extensively. This allowed for a functional component approach, ensuring that each task's state could be managed independently, providing a stable and predictable UI."
      },
      {
        section: "Context API",
        content: "With the use of useContext, I implemented a global state that is accessible throughout the component hierarchy without prop drilling. This was particularly useful for managing user preferences, fetching data from a rest API, themes, which needed to be consistent across all components."
      },
      {
        section: "Performance Optimization",
        content: "To optimize performance and avoid unnecessary re-renders, I integrated useMemo and useCallback. useMemo was used to memoize computationally expensive tasks, ensuring that these calculations are only re-computed when their dependencies change. Meanwhile, useCallback wrapped event handlers and functions passed to child components, so that the same function instance is maintained across renders."
      },
      {
        section: "Lifecycle Events",
        content: "React's useEffect hook played a crucial role in managing side effects in the application. It was used for tasks such as fetching initial data from the server, setting up subscriptions, and handling cleanup operations to avoid memory leaks."
      },
      {
        section: "Data Management",
        content: "I designed the app to interact with a REST API, using asynchronous functions to handle HTTP requests. The data exchanged with the backend is in JSON format, which allows for efficient serialization and deserialization of task data. Error handling is implemented to ensure a smooth user experience even when network requests fail or return unexpected results."
      },
      {
        section: "Custom Hooks",
        content: "For reusable logic across components, I created custom hooks. These encapsulated complex functionalities and provided a cleaner codebase, making it easier to test and maintain."
      },
      {
        section: "Conclusion",
        content: "Multi Shop is not just a testament to my ability to write clean, maintainable React code, but also showcases my understanding of modern React architecture and best practices. By harnessing the power of hooks, I have built an application that is both performant and scalable, ready to handle the challenges of a growing user base. The integration with a REST API ensures that Multi Shop is a real-world application that can interact with backend services in a robust and efficient manner."
      }
    ]
  },
  // {
  //   id: 2,
  //   title: "Jonny Gilman Portfolio",
  //   portfolioThumbnail: "assets/img/portfolio/portfolio.png",
  //   modalThumbnail: "assets/img/portfolio/portfolio.png",
  //   portflioExampleLink: "jonnygilman.com",
  // },
  // {
  //   id: 3,
  //   title: "Lawfirm App",
  //   portfolioThumbnail: "assets/img/portfolio/1.jpg",
  //   modalThumbnail: "assets/img/news/2.jpg",
  //   portflioExampleLink: "jonnygilman.com",
  //   description: "LIn the above code, title={item.title} will be used as the caption for each image when it is opened in the gallery view. The title appears below the image in the PhotoSwipe UI. If you want to add a description that's different from the tooltip title, you can add a description property to each object in the portfolioData array and then use item.description for the title attribute",  
  // }
]

const Portfolio = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    function toggleModal(id) {
      if (id != null) {
        // If an ID was passed, open the modal for that item
        setActiveItem(portfolioData.find(item => item.id === id))

      } else {
        // If no ID was passed, close the modal
        setActiveItem(null);
      }
      setIsOpen(!isOpen);
    }

  return (
    <>
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Creative Portfolio</h3>
                </div>
              </div>
            </div>
            {/* END TOKYO_TM_TITLE */}
            <ul className="portfolio_list">

             {portfolioData.map((item) => (
                  <li
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <div className="image">
                        <img src={item.portfolioThumbnail} alt="tumb" 
                          data-tip
                          data-for={`tooltip-${item.id}`}
                          onClick={(e) => { e.preventDefault(); toggleModal(item.id); }}
                        />
                        <div
                          className="main"
                          width={500}
                          height={550}
                          style={{
                            backgroundImage: "url(assets/img/news/2.jpg)",
                          }}
                        >  
                    </div>
                  </div>           
                  
                      <ReactTooltip
                        id={`tooltip-${item.id}`}
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>{item.title}</h5>
                        </div>
                      </ReactTooltip>

                    </div>           
                  </div>
                </li>
             ))}

            </ul>
            {/* END PORTFOLIO LIST */}        
          </div>
        </div>

        <Modal
              isOpen={isOpen}
              onRequestClose={() => toggleModal()}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
              >
              <div className="tokyo_tm_modalbox_news">
                <button className="close-modal" onClick={() => toggleModal()}>
                  <img src="assets/img/svg/cancel.svg" alt="close icon" />
                </button>
                {/* END CLOSE ICON */}
                <div className="box_inner">
                  <div className="description_wrap scrollable">
                    <div className="image">
                    {activeItem && (
                      <a href={activeItem.portflioExampleLink}>
                        <img 
                          src={activeItem.modalThumbnail} 
                          alt={activeItem.title} />
                      </a>
               
                    )}
                      {activeItem && (
                        <div 
                        style={{
                          backgroundImage: `url(${activeItem.modalThumbnail})`
                        }} />
                      )}
                    </div>
                    {/* END IMAGE */}
                    <div className="details">
                      {activeItem && (
                        <>
                         <h3 className="title">{activeItem.title}</h3>
                          <br />
                          <h5>Overview:</h5>
                          <br />
                        <p className="bigger">{activeItem.overview}</p>
                          <br />
                        <h5>Technical Highlights:</h5>
                         <br />
                          <ul>
                            {activeItem.projectOverview.map((detail, index) => (
                            <li key={index}>
                              <h6>{detail.section}:</h6> 
                              <p className="bigger">{detail.content}</p>
                              <br />
                            </li>
                          ))}
                          </ul>
                       </>
                       
                      )}
                    </div>
                    {/* END DETAILS */}
                    <div className="main_content ">
                      <div className="descriptions">
                        {activeItem && 
                          <p className="bigger">
                            {activeItem.description}
                        </p>}                 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Modal>
    </>
  );
};

export default Portfolio;
