import React, { useState } from "react";
import "./Chip.css";

const Chip = () => {
  const [inputValue, setInputValue] = useState("");
  // const [deleteing, setDelete] = useState(false);
  const [chips, setChips] = useState([]);
  const [availableItems, setAvailableItems] = useState([
    "JOe DOE",
    "Banana",
    "Mr.X",
    "Tony STark",
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setAvailableItems(availableItems.filter((i) => i !== item));
    setInputValue("");
  };

  const handleChipRemove = (removedItem) => {
    setChips(chips.filter((item) => item !== removedItem));
    setAvailableItems([...availableItems, removedItem]);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setAvailableItems([...availableItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className='firstDiv'>
      <div>
        {chips.map((chip) => (
          <div key={chip} className="chip">
            {chip}
            <button onClick={() => handleChipRemove(chip)} className="button">
              X
            </button>
          </div>
        ))}
      </div>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="Type to search..."
      />
      <ul className="list">
        {availableItems
          .filter((item) =>
            item.toLowerCase().includes(inputValue.toLowerCase()),
          )
          .map((item) => (
            <li key={item} onClick={() => handleItemClick(item)} className="clicklist">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Chip;
