import React from "react";

const Card = (props) => {
  return (
    <div className="shadow-md w-full  shadow-slate-700 h-[full] md:h-[420px] my-6 ">
      {props.children}
    </div>
  );
};

export default Card;
