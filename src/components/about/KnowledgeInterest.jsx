import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
       "React",
       "Javascript, HTML5, CSS3",
       "Node.js, Python",
       "MySQL, MongoDb",
       "Rest API, JSON",
       "AWS",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Soft Skills",
      content: [
        "Strong problem solving and analytical skills",
        "Excellent communication and collaboration abilities",
        "Ability to learn new technologies",
        "Experience using AI technology to increase effeciency",
        "Basic Design skills and understanding of UI/UX principles",
        "Organized and effecient code"
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
