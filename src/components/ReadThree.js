import React, { useState } from "react";
import "../App.css";

function ReadThree() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="one" onClick={() => setClicked(!clicked)}></div>
      {clicked && <div className="opened-view"></div>}
    </>
  );
}

export default ReadThree;
