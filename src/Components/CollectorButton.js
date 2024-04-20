import React, { useContext } from "react";
import StyleContext from "./StyleContext";

function CollectorButton() {
  const buttonStyling = useContext(StyleContext);

  return (
    <div>
      <button style={buttonStyling}>Click Here!</button>
    </div>
  );
}

export default CollectorButton;