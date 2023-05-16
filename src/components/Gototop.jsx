import React from "react";

function Gototop() {
  const Gototop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="top-btn" onClick={Gototop}>
      <h1>Top button</h1>
    </div>
  );
}

export default Gototop;
