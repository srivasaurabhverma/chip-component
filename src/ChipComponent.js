import React, { useState } from 'react';
import './ChipComponent.css';

const ChipComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    'John Smith',
    'Jane Johnson',
    'Michael Davis',
    'Emma Taylor',
    'Daniel Brown',
    'Olivia Miller',
    'David Wilson',
    'Sophia Martinez',
    'William Anderson',
    'Isabella Moore',
  ];
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === '') {
      setFilteredItems([]);
    } else {
      const filtered = items.filter(
        (item) =>
          item.toLowerCase().includes(value.toLowerCase()) &&
          !selectedItems.includes(item)
      );
      setFilteredItems(filtered);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue('');
    setFilteredItems(filteredItems.filter((i) => i !== item));
  };

  const handleChipRemove = (chip) => {
    setSelectedItems(selectedItems.filter((item) => item !== chip));
  };

  const handleBackspace = () => {
    if (inputValue === '' && selectedItems.length > 0) {
      const lastChip = selectedItems[selectedItems.length - 1];
      handleChipRemove(lastChip);
    }
  };

  return (
    <div className="chip-container">
      <div className="chips">
        {selectedItems.map((chip) => (
          <div key={chip} className="chip">
            {chip}
            <span className="chip-remove" onClick={() => handleChipRemove(chip)}>
              X
            </span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Backspace' && handleBackspace()}
          placeholder="Search Here..."
        />
      </div>
      {filteredItems.length > 0 && inputValue !== '' && (
        <ul className="item-list">
          {filteredItems.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChipComponent;
