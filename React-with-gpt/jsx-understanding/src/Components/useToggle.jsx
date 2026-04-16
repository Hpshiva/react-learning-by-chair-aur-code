import React, { useState } from "react";

function useToggle() {
  const [isToggle, setItToggle] = useState(true);
  const toggle = () => setItToggle((prev) => !prev);
  return [isToggle, toggle];
}

export default useToggle;
