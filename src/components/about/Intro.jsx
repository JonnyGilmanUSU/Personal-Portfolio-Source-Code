import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/about.jpg",
    name: "Jonny Gilman",
    designation: "Web Developer",
    text: (
      <>
        <p>
        Hi, my name is Jonny Gilman and I am studying Web Development and Information Systems at Utah State University. Four years ago I would have never imagined myself going into the software development field because of my restless nature. Throughout my education, I have learned to channel that restless energy into learning and developing my skills as a student and developer.
        </p>
        <p>
        I'm a passionate full-stack web developer with a flair for creating intuitive and dynamic user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks, I transform ideas into elegant digital solutions. Committed to lifelong learning and innovation, I craft websites that are both aesthetically pleasing and functionally robust. Although my experience in the workforce is limited, I am eager to learn and utilize my general passion for life to drive my progression as a developer.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
