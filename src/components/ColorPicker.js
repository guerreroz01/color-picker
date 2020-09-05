import React from "react";

import useStyles from "./ColorPicker.styles";

function ColorPicker({ currentColor, setCurrentColor }) {
  const classes = useStyles({ currentColor });
  const colorChange = (e) => {
    console.log(e.target.value);
    setCurrentColor(e.target.value);
  };

  return (
    <>
      <input
        className={classes.colorPicker}
        type="color"
        value={currentColor}
        id=""
        onChange={colorChange}
      />
    </>
  );
}

export default ColorPicker;
