import React from "react";

const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      price: "0",
      type: "Free",
      features: [
        "Premium Icons",
        "Quality Logo",
        "Stock Images",
        "Free Support",
      ],
      isPopular: "",
    },
    {
      id: 2,
      price: "30",
      type: "Basic",
      features: [
        "Premium Icons",
        "Quality Logo",
        "Stock Images",
        "Free Support",
      ],
      isPopular: "Popular",
    },
    {
      id: 3,
      price: "70",
      type: "Premium",
      features: [
        "Premium Icons",
        "Quality Logo",
        "Stock Images",
        "Free Support",
      ],
      isPopular: "",
    },
  ];
  return (
    <>
      {pricingContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <div className="price">
              <h3>
                <span>
                  {item.price}
                  <span className="currency">$</span>
                </span>
              </h3>
            </div>
            <div className="plan">
              <h3>{item.type}</h3>
            </div>
            <ul className="item">
              {item.features.map((feature, i) => (
                <li className="active" key={i}>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className="tokyo_tm_button" data-position="left">
              <a href="#">
                <span>Purchase</span>
              </a>
            </div>
            {item.isPopular ? (
              <>
                <span className="popular">Popular</span>
              </>
            ) : (
              ""
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default Pricing;
