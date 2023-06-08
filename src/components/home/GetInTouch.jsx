import React from "react";

const GetInTouch = ({ heading, message, linkedin }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}<a className="text-decoration-none" href={`${linkedin}`}>Linkedin</a>.
      </p>
    </>
  );
};

export default GetInTouch;
