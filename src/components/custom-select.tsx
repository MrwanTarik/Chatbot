'use client';

import React, { useEffect, useRef, useState } from 'react';

type CustomSelectType = {
  name: string;
  id: string;
  options: Array<{ label: string; value: string }>;
  placeholder: string;
};

const CustomSelect = ({ name, id, options, placeholder }: CustomSelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    // Just use the global MouseEvent here
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: { label: string; value: string }) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    // Other specific behaviors based on the option value can be added here
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`custom-select-wrapper ${name}`} id={id} ref={wrapperRef}>
      <div
        className={`custom-select ${isOpen ? 'opened' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
      >
        <span className="custom-select-trigger">
          {selectedOption || placeholder}
        </span>
        <div className="custom-options">
          {options.map((option) => (
            <span
              key={option.value} // Using option value as key
              className="custom-option"
              data-value={option.value}
              onClick={() => handleOptionClick(option)}
              onKeyDown={() => handleOptionClick(option)}
              role="button"
              tabIndex={0}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
