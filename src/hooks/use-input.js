//https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

import { useState } from "react";

const useInput = (initialValue, checkbox = false) => {
  const [value, setValue] = useState(initialValue);

    const bindObject = 
        checkbox ?  {
        checked: value,
        onChange: event => {
            setValue(event.target.checked);
        }} : {
        value: value,
        onChange: event => {
            setValue(event.target.value);
        }}

  return {
    value,
    setValue,
    bind: bindObject
  };
};

export default useInput;