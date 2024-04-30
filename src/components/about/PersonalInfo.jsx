import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 2,
          name: "Age",
          content: "23",
        },

        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:jonnygilman@icloud.com">jonnygilm@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+77 022 177 05 05">+208 473 0295</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Study",
          content: "Utah State University",
        },
        {
          id: 3,
          name: "Major",
          content: "Information Systems / Web Development",
        },
        {
          id: 5,
          name: "Minor",
          content: "Data Analytics",
        },
        {
          id: 4,
          name: "Interests",
          content: "Jazz Guitar, The Outdoors",
        },

      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
