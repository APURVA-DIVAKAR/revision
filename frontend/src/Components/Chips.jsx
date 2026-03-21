import React, { useState } from "react";

const Chips = () => {
  const [chipValue, setChipValue] = useState("");
  const [list, setList] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && chipValue.trim() !== "") {
      setList([...list, chipValue.trim()]);
      setChipValue("");
    }
  };

  const handleDelete = (id) => {
    const copy = [...list]

    copy.splice(id,1);
    setList([...copy])
    // setList((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Chip or Press Tag"
        value={chipValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setChipValue(e.target.value)}
      />
      {list?.map((tag, index) => {
        return (
          <p key={index} >
            {tag}{" "}
            <span>
              <button onClick={() => handleDelete(index)}>x</button>
            </span>
          </p>
        );
      })}
    </div>
  );
};

export default Chips;
