import React from "react";

const Card = (props) => {
  return (
    <div className="shadow-md w-80 md:w-full shadow-slate-700 h-[400px]  my-6 ">
      {props.children}
    </div>
  );
};

export default Card;
