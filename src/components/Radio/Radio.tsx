import React, { useState } from "react";

import "./radio.scss";

interface Props {
  value: string;
  setValue: (newOption: string) => void;
  activeValue: string;
}

const Radio: React.FC<Props> = ({ value, setValue, activeValue }: Props) => {
  const changeValueHandler = (): void => {
    setValue(value);
  };

  return (
    <div
      onMouseDown={changeValueHandler}
      className="radio"
      data-active={value == activeValue}
    >
      <p>{value}</p>
      <div className="radio-item"></div>
    </div>
  );
};

export default Radio;
