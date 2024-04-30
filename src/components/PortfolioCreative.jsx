import React, { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";

Modal.setAppElement("#root");

const portfolioData = [
  {
    id: 1,
    title: "Tune Match (Full Stack Web Application)",
    portfolioThumbnail: "assets/img/portfolio/TuneMatch.png",
    modalThumbnail: "assets/img/portfolio/TuneMatch.png",
    portflioExampleLink: "https://tunematchproject.onrender.com/",
    overview: "I am a big music nerd and thought it would be a fun idea to create an application that could help me and others find new music! Over the past few weeks I have developed a dynamic, data-driven web application leveraging Node.js and Express for backend operations and React for the frontend. The frontend was meticulously crafted using React, providing a seamless user experience with interactive components and real-time updates. Leveraged Node.js and Express to build a robust backend, handling authentication, data retrieval, and business logic. Additionally, all designs were drafted in figma, and then brought to life using vanilla CSS, showcasing expertise in UI/UX design principles and delivering a visually appealing interface. Overall I am very proud of the designing and funcionality of the application. It was fun to think of an idea, and bring it to life using all the tools I have learned in the past few years.",
    gitHubLink: "https://github.com/JonnyGilmanUSU/TuneMatchProject",
    projectOverview:  [
      {
        section: "React State Management",
        content: "Utilized React state extensively to manage dynamic data and user interactions, ensuring a responsive and interactive user experience. For example, managing user input and search results in real-time updates to provide instant feedback and improve usability. An example of this is the search input bar which updates song suggestions in a dropdown menu as the user enters a song."
      },
      {
        section: "React Context API",
        content: "Implemented React Context API to manage global application state and avoid prop drilling. This allowed for efficient sharing of data and state across components without the need for nested prop passing. For instance, maintaining user authentication state throughout the application to provide personalized experiences as well as sharing song recommendation data between react components."
      },
      {
        section: "Node.js Middleware",
        content: "Implemented custom middleware functions in Node.js using Express to handle various aspects of request processing. Utilized middleware such as bodyParser, cors, and static file serving to enhance server functionality. For example, bodyParser middleware was used to parse incoming request bodies to JSON format, cors middleware enabled cross-origin resource sharing with specific frontend origins, and static file serving middleware served static assets such as HTML, CSS, and JavaScript files. Additionally, custom error handling middleware could be implemented to handle errors gracefully and provide meaningful responses to clients."
      },
      {
        section: "RESTful API Design",
        content: "Designed and implemented RESTful APIs in Node.js to facilitate communication between the frontend and backend. Leveraged HTTP methods and status codes to create a uniform interface for interacting with server resources. For example, exposing endpoints for user authentication, data retrieval, and CRUD operations on resources. I am proud of this section of the application because the education I have received so far has only taught me how to develop apps created fully in the frontend and fully in the backend. I was able to think through creating a backend API that would handle the logic and deal with the spotify API and then how to set up the front end to send requests retreiving and displaying that data using ReactJs"
      },
      {
        section: "React Router",
        content: "Utilized React Router to handle client-side routing and navigation in the frontend application. Implemented dynamic route matching and nested route configurations to create a single-page application with multiple views. For example, defining routes for different sections of the application and handling navigation between them."
      },
      {
        section: "CSS Responsive Mobile First Design",
        content: "Employed CSS flexbox and grid layouts to create responsive and visually appealing UI designs. Utilized flexbox for precise control over element positioning. For example, implementing responsive grid layouts for displaying music recommendations and user profiles. I designed the application starting on small devices. I am not a designer, so I was really proud of my ability to come up with an idea in figma and then recreate it using css. I am particularly proud of the Music Player design. Specifically I am proud of setting the background color to the same color theme as the album that was generated. I did this by setting the album cover as the background, zooming in 1000%, creating a blur and creating an overlay with decreased opacity."
      }
    ]
  },
  {
    id: 2,
    title: "Multi Shop Eccomerce (React App)",
    portfolioThumbnail: "assets/img/portfolio/multiShop1.png",
    modalThumbnail: "assets/img/portfolio/multiShop1.png",
    portflioExampleLink: "https://gilman-multi-shop.web.app/",
    overview: "Multi Shop is an eccomerce website that was built for a mid term exam for a advanced front end course. The stying was provided for me, but all the javascript logic, and use of react components were created by myself. Built with the latest React features, this app offers a seamless experience for creating, organizing, and tracking tasks with real-time updates. The application stands out for its clean UI, intuitive interaction patterns, and responsive design, ensuring a great experience across all devices.",
    gitHubLink: "https://github.com/JonnyGilmanUSU/Multi-Shop-E-Commerce",
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
        section: "Authentification",
        content: "In my web application, I implemented a robust authentication system using Firebase. The setup includes a SignUpForm and LoginForm, both utilizing React Router's Form element for efficient data handling. The signupAction and loginAction functions, defined in auth.js, handle user registration and login, interacting with Firebase's authentication API. These functions also manage user data in localStorage and sync with the Realtime Database for persistent user records. A logoutLoader function enables user sign-out, and authStatusLoader maintains session integrity. Integration of these components into the app's routing ensures a secure, seamless user experience across the platform."
      },
      {
        section: "React-Router-Dom",
        content: "As a Full Stack Web Developer, I specialize in crafting dynamic, responsive e-commerce websites, leveraging the powerful capabilities of React Router DOM. My portfolio showcases a seamless navigation experience, achieved through the use of React Router's useNavigation and Link components, ensuring intuitive and efficient user journeys. I've adeptly utilized useRouterData() to fetch and display context-relevant data, enhancing the site's interactivity and user engagement. The integration of custom loaders and actions has been pivotal in optimizing the UI/UX, providing users with real-time feedback and smooth transitions. My work exemplifies innovative solutions, employing React Router DOM hooks to create fluid, user-centered e-commerce platforms."
      },
      {
        section: "Conclusion",
        content: "Multi Shop is not just a testament to my ability to write clean, maintainable React code, but also showcases my understanding of modern React architecture and best practices. By harnessing the power of hooks, I have built an application that is both performant and scalable, ready to handle the challenges of a growing user base. The integration with a REST API ensures that Multi Shop is a real-world application that can interact with backend services in a robust and efficient manner."
      },
      {
        section: "Express-Session for User Sessions",
        content: "Implemented express-session to manage user sessions and maintain state across HTTP requests. This allowed for seamless user authentication and session persistence, enabling users to stay logged in as they navigated through the application. For example, configuring session management to use cookies with appropriate security settings, such as HttpOnly and Secure flags, to protect against session hijacking and other security threats. Additionally, I used the session middleware to create a unique session ID for each user, allowing for personalized user experiences and ensuring that session data is retained during the user's session."
      },
      {
        section: "MongoDB and MongoDBStore for Session Storage",
        content: "Utilized MongoDB to store user information and session data, ensuring persistence and scalability. Implemented MongoDBStore to maintain session storage in a scalable and reliable manner. This allowed for sessions to persist even if the application server was restarted or multiple servers were used for load balancing. For example, I set up a MongoDBStore to store session data in MongoDB, providing a durable storage solution for user sessions. This setup helped ensure consistent user sessions and allowed for session data to be shared across multiple application instances, improving the user experience and supporting advanced features like user authentication and authorization."
      }
      
      
    ]
  },
  {
    id: 3,
    title: "Mustacchio (Node Js Application)",
    portfolioThumbnail: "assets/img/portfolio/mustache.png",
    modalThumbnail: "assets/img/portfolio/mustache.png",
    portflioExampleLink: "https://mustachio-bjic7cgl.b4a.run/blog",
    overview: "Developed a dynamic, data-driven web application leveraging Node.js and Express for backend operations, and EJS for templating, to create an engaging platform for mustache enthusiasts to share styles and ideas. Utilized MVC architecture to ensure clean code organization and efficient data handling with Sequelize ORM for database interactions. Implemented RESTful APIs for seamless data retrieval and manipulation, enhancing user experience. Integrated npm packages for additional functionalities, including authentication and security, to ensure a robust application environment. Successfully deployed the application using cloud services, demonstrating proficiency in full-stack web development and deployment processes. Details and source code are accessible via my portfolio.",
    gitHubLink: "https://github.com/JonnyGilmanUSU/Multi-Shop-E-Commerce",
    projectOverview:  [
      {
        "section": "Node.js and Express",
        "content": "This application is built on Node.js, leveraging the Express framework to create a robust server environment. Node.js's event-driven, non-blocking I/O model ensures efficient handling of multiple connections simultaneously. Express simplifies routing, middleware integration, and request handling, making the application scalable and maintainable."
      },
      {
        "section": "MVC Architecture",
        "content": "Adopting the MVC (Model-View-Controller) architecture, the application separates concerns to enhance code organization and facilitate development. Models interact with the database for data manipulation, views render the user interface, and controllers handle the business logic, routing requests between models and views. This structure promotes code reusability and simplifies debugging."
      },
      {
        "section": "Database Integration",
        "content": "The application interfaces with databases using Sequelize ORM, allowing for object-relational mapping of database models. This abstracts complex SQL queries into simple JavaScript objects and functions, enhancing security, database portability, and developer productivity."
      },
      {
        "section": "RESTful API",
        "content": "The application features a RESTful API, serving as the backend that processes requests from the frontend. This facilitates a seamless user experience with dynamic content updates, without the need for page reloads."
      },
      {
        "section": "Template Engine",
        "content": "EJS, a templating engine, is used to generate HTML markup with JavaScript. It simplifies the creation of dynamic web pages, allowing server-side variables to be included in HTML, making the views more interactive and responsive to user data."
      },
      {
        "section": "Error Handling and Logging",
        "content": "Comprehensive error handling mechanisms are in place to catch and respond to runtime errors, ensuring the application's reliability. Logging, facilitated by the morgan middleware, offers insights into the application's operational status, aiding in monitoring and debugging."
      },
      {
        "section": "Performance Optimization",
        "content": "The application is optimized for performance through efficient async-await patterns for non-blocking asynchronous operations, minimizing server response times and improving user experience."
      },
      {
        "section": "Conclusion",
        "content": "The application exemplifies modern web development practices, utilizing Node.js and Express, along with the MVC architecture, to create a secure, efficient, and scalable web application. It showcases the power of server-side JavaScript in building real-world applications."
      },
      {
        "section": "MongoDB and Mongoose Integration",
        "content": "The application has been migrated from MySQL to MongoDB, leveraging the Mongoose ODM (Object Data Modeling) library for seamless integration. MongoDB's flexible document-based structure allows for efficient storage and retrieval of data, while Mongoose simplifies schema creation, validation, and interaction with the database. This transition enhances scalability, performance, and developer productivity."
      },
      {
        "section": "User Model and Controller",
        "content": "A robust user management system has been implemented, featuring a Mongoose schema for user profiles and a dedicated controller for handling user-related functionalities. Users can register, login, and update their profiles, with administrative privileges available for authorized users. The user model includes fields for first name, last name, email, password, and favorite mustache styles, ensuring a personalized user experience."
      },
      {
        "section": "Session and User Authentication",
        "content": "Session management and user authentication have been implemented using the express-session middleware and JSON Web Tokens (JWT). User accounts can be created securely with encrypted passwords and stored in the MongoDB database. Upon successful login, users are granted access to protected routes and personalized content, with session data securely stored in the database."
      },
      {
        "section": "Favorite Styles",
        "content": "Users can now save their favorite mustache styles and view them in a dedicated section of the application. With the ability to mark styles as favorites, users can easily revisit their preferred looks and stay engaged with the application. This feature enhances user engagement and fosters a sense of community among mustache enthusiasts."
      },
      {
        "section": "New Style with File Upload",
        "content": "A new feature allows users to contribute their own mustache styles to the application. By uploading images and providing accompanying details, users can expand the style collection and showcase their creativity. Images are securely stored on the server file system, ensuring reliability and accessibility for all users."
      },
      {
        "section": "Admin Functionality",
        "content": "Administrative users now have access to enhanced functionality, including managing user privileges and overseeing contact requests. With the ability to grant and revoke admin privileges, administrators can maintain control over the application environment. Additionally, dedicated views provide administrative insights and streamline administrative tasks."
      },
      {
        "section": "Styles API",
        "content": "A RESTful API has been implemented to provide access to mustache styles for external applications. By leveraging JSON Web Tokens for authentication, the API delivers a secure and efficient means of accessing style data. Developers can integrate this API into their projects to enhance mustache-related functionalities."
      },
      {
        "section": "External API Integration",
        "content": "The application incorporates data from a third-party REST API, enriching the user experience with additional information and functionality. By leveraging external APIs, the application can offer diverse features and cater to a wider range of user interests. This integration demonstrates the application's versatility and adaptability to external data sources."
      },
      {
        "section": "Additional Functionality",
        "content": "To further enhance the application, additional functionality has been implemented, addressing unique user needs and expanding the application's capabilities. Whether it's creating new views, integrating npm packages, or implementing custom middleware, these additions enrich the user experience and showcase the application's innovative spirit."
      },
      {
        "section": "Deployment",
        "content": "The completed application has been deployed to a hosting service provider, ensuring accessibility to users worldwide. With secure storage of sensitive information in environment variables, the application maintains robust security measures and protects user data. The live deployment marks the culmination of the development journey, providing users with a seamless and reliable experience."
      }
      
    ]
  },
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
                      
                        <img 
                          src={activeItem.modalThumbnail} 
                          alt={activeItem.title} />
               
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
                          <a href={activeItem.portflioExampleLink}>
                            <div className="tokyo_tm_button" style={{marginBottom: '30px'}}>
                              <button 
                                type="submit" 
                                className="ib-button no-margin"
                                >
                                View Website
                              </button>
                            </div>
                          </a>

                        <h5 className="margin-above">View Source Code Here:</h5>                          
                        <p className="bigger">{activeItem.gitHubLink}</p>
                          <br />
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
