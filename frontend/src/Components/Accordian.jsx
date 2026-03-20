import React, { useState } from "react";

export default function Accordian({ data }) {
  const [isVisibleIndex, setIsVisibleIndex] = useState(null);

  const handleToggel = (index) => {
    setIsVisibleIndex(isVisibleIndex === index ? null : index);
  };

  if (!data || data.length === 0) return <h4>No data to display.</h4>;

  return (
    <div className="accordion-container">
      {data.map((topic, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => handleToggel(index)}>
            {topic.title}
            <span className="accordion-icon">
              {isVisibleIndex === index ? "↑" : "↓"}
            </span>
          </div>

          {isVisibleIndex === index && (
            <div className="accordion-content">{topic.details}</div>
          )}
        </div>
      ))}
    </div>
  );
}
