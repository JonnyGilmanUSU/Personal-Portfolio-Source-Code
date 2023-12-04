import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  function toggleModal(id) {
    if (id != null) {
      // If an ID was passed, open the modal for that item
      setActiveItem(serviceContent.find(item => item.id === id))

    } else {
      // If no ID was passed, close the modal
      setActiveItem(null);
    }
    setIsOpen(!isOpen);
  }




  const serviceContent = [
    {
      id: 1,
      no: "01",
      title: "React",
      text: `As a passionate web developer, my proficiency in React JS sets a strong foundation for crafting dynamic user interfaces. My expertise in utilizing React Hooks allows for seamless state management and side-effect handling within functional components, ensuring cleaner and more efficient code. The comprehension of JSX is pivotal in my work, enabling me to write HTML-like syntax directly within JavaScript code, which streamlines the development process and enhances readability.`,
      text2: `My grasp of React's core principles such as component lifecycle, state, and props, coupled with performance optimization techniques like memoization and virtual DOM diffing, empowers me to build robust, scalable applications. This deep understanding of React's ecosystem significantly bolsters my career as a front-end developer, making me a valuable asset in any development team.`,
      collegeCourses: [
        "UI/UX Web Design",
        "Advanced Client Side Web App Dev"
      ]
    },
    {
      id: 2,
      no: "02",
      title: "Javascript",
      text: `As a web developer, my profound grasp of JavaScript principles fuels my ability to craft dynamic, user-focused experiences. My expertise spans from deep knowledge of ES6+ syntax and closures, to adeptness with asynchronous programming using promises and async/await. This comprehensive understanding enables me to write clean, maintainable code, leading to efficient and responsive applications.`,
      text2: `By leveraging advanced concepts like the Document Object Model (DOM) manipulation and event handling, I create interactive web pages that enhance user engagement. This skill set not only sets me apart in the field but also ensures that I can tackle complex web development challenges, positioning me for a thriving career in an ever-evolving digital landscape.`,
      collegeCourses: [
        "UI/UX Web Design",
        "Advanced Client Side Web App Dev"
    ],
    },
    {
      id: 3,
      no: "03",
      title: "Python",
      text: `Technical skills relating to python include Python, AWS, Web JSON API, Cloud9. I have demonstrated these skills in stock market trading simulations on real time stock market prices where I created and ran multiple techincal trading strategies yielding as high as 40% annual returns. I managed all data scripts and server side logic.`,
      collegeCourses: [
        "Data of Information Business",
        "Making Decisions With Data",
        "Intro to Modern Data Analytics",
        "Intro to Python Programming",
        "Advanced Python Program Analytics",
    ],
    },
    {
      id: 4,
      no: "04",
      title: "Amazon Web Services",
      text: `As a web developer with basic knowledge of AWS, I bring a robust skill set that enhances cloud-based solutions. My proficiency spans across core AWS services like EC2 for scalable computing, S3 for efficient data storage, and Lambda for serverless architectures, ensuring cost-effective and scalable web applications. My ability to leverage AWS's vast offerings — from database management with RDS to deploying applications using Elastic Beanstalk — allows for seamless, secure, and resilient web development. This knowledge not only positions me at the forefront of cloud innovation but also offers clients cutting-edge, reliable, and adaptable web solutions, propelling my career in a cloud-first digital landscape.`,
      collegeCourses: "Cloud Computing",
    },
    {
      id: 5,
      no: "05",
      title: "SQL",
      text: `With a firm grasp of database design, querying, and optimization, I can efficiently manage and manipulate data to drive dynamic website functionality. My ability to craft complex queries ensures that I can extract meaningful insights from vast datasets, a crucial asset for creating responsive and intelligent web applications. This expertise in SQL not only accelerates development workflows but also empowers me to offer scalable solutions, making me a valuable asset for data-driven projects that require robust backend capabilities.`,
      collegeCourses: [
        "Data of Information Business",
        "Database Management",
        "Data Vizualization",
        "Cloud Computing",
      ],
    },
    {
      id: 6,
      no: "06",
      title: "Rest Api / JSON",
      text: `My understanding of REST principles ensures seamless integration and communication between different software components. My expertise in JSON allows for effective data interchange and payload management, leading to faster, more responsive web applications. This skill set not only enhances my ability to construct modern, service-oriented architectures but also makes me a valuable asset in the development of microservices and cloud-based solutions. My commitment to these technologies propels my career forward by keeping me at the forefront of web development trends and best practices.`,
      collegeCourses: [
        "Intro to Python Programming",
        "Advanced Python Program Analytics",
        "Client Side Web App Dev",
      ],
    },
    {
      id: 7,
      no: "07",
      title: "HTML / CSS",
      text: `As a web developer with a strong command of HTML and CSS, I excel in crafting seamless, accessible websites. My proficiency in HTML5 semantics ensures structured, SEO-friendly content, while my CSS3 expertise enables me to create visually engaging, responsive designs. Committed to a mobile-first approach, I prioritize performance and user experience across devices. I adeptly employ principles such as Flexbox and Grid for layout, media queries for adaptability, and CSS variables for maintainability. This skill set not only enhances my projects but also positions me to meet the dynamic demands of the evolving tech industry.`,
      collegeCourses: [
        "UI/UX Web Design",
        "Client Side Web App Dev",
      ],
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text.substring(0,100)}...</p>
            <div className="tokyo_tm_read_more">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleModal(item.id); }}>
                <span>Read More</span>
              </a>
            </div>
          </div>
        </li>
      ))}
      
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
                    <div className="details">
                      {activeItem && (
                         <h3 className="title">
                         {activeItem.title}
                       </h3>
                      )}
                    </div>
                    {/* END DETAILS */}
                    <div className="main_content ">
                      <div className="descriptions">
                        {activeItem && 
                          <p className="bigger">
                            {activeItem.text}
                          <br />
                          <br />
                            {activeItem.text2}
                        </p>}
                        <br />
                        <br />
                        <p className="bigger">
                          Formal Education
                        </p>
                        {activeItem && activeItem.collegeCourses && (
                          Array.isArray(activeItem.collegeCourses) ? (
                            <>
                              {activeItem.collegeCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                              ))}
                            </>
                          ) : (
                            <li>{activeItem.collegeCourses}</li>
                          )
                        )}

                   
                   
                          
                      </div>
                      {/* END DESCRIPTION */}
                      {/* <div className="news_share">
                        <span>Share:</span>
                        <Social />
                      </div> */}
                      {/* END NEWS SHARE */}
                    </div>
                  </div>
                </div>
                {/* END BOX INNER */}
              </div>
        </Modal>
    </>
  );
};

export default Services;
