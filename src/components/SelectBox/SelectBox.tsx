import React, { useState } from "react";

import "./selectBox.scss";

interface Props {
  option: string | string[];
  options: string[];
  setOption: (newOption: string | string[]) => void;
  placeholder: string;
  multiple?: boolean;
}

const SelectBox: React.FC<Props> = ({
  option,
  setOption,
  options,
  placeholder,
  multiple = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeOption = (newOption: string): void => {
    if (multiple) {
      if (option.includes(newOption)) {
        const updatedOptions = option.filter((item) => item !== newOption);
        setOption(updatedOptions);
      } else {
        const updatedOptions = [...option, newOption];
        setOption(updatedOptions);
      }
    } else {
      if (option !== newOption) {
        setOption(newOption);
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="select_box">
      <div className="select_box--view" onClick={() => setIsOpen(!isOpen)}>
        <p>
          {multiple &&
            (option.length > 0 ? (
              <span className="green">{option.join(", ")}</span>
            ) : (
              <span className="inactive">{placeholder}</span>
            ))}

          {!multiple &&
            (option.length > 0 ? (
              <span className="green">{option}</span>
            ) : (
              <span className="inactive">{placeholder}</span>
            ))}
        </p>
        <svg
          className={isOpen ? "active" : ""}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="var(--color-green)"
            d="m11.3 14.3l-2.6-2.6q-.475-.475-.212-1.087T9.425 10h5.15q.675 0 .938.613T15.3 11.7l-2.6 2.6q-.15.15-.325.225T12 14.6q-.2 0-.375-.075T11.3 14.3Z"
          ></path>
        </svg>
      </div>
      <ul className="options--list" data-active={isOpen}>
        {options.map((optionItem) => {
          return (
            <li
              onClick={() => changeOption(optionItem)}
              className={
                !multiple
                  ? optionItem == option
                    ? "active"
                    : ""
                  : option.includes(optionItem)
                  ? "active"
                  : ""
              }
            >
              <p>{optionItem}</p>
              <div className="circle"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectBox;
