import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2014 - 2016",
          institute: "Oxford University",
          degree: "Master Degree",
        },
        {
          id: 2,
          year: "2010 - 2014",
          institute: "Texas University",
          degree: "Bachelor Degree",
        },
        {
          id: 3,
          year: "2008 - 2010",
          institute: "Simone College",
          degree: "Associate Degree",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2018 - Now",
          institute: "Envato Market",
          degree: "Exclusive Author",
        },
        {
          id: 2,
          year: "2016 - 2018",
          institute: "RGB Studio",
          degree: "UX Designer",
        },
        {
          id: 3,
          year: "2012 - 2016",
          institute: "Innovations Park",
          degree: "Web Designer",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
