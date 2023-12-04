import React from "react";

const Partners = () => {
  const partnerImg = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <>
      {partnerImg.map((img, i) => (
        <li key={i}>
          <div className="list_inner">
            <img src={`/assets/img/partners/dark/${img}.png`} alt="" />
          </div>
        </li>
      ))}
    </>
  );
};

export default Partners;
