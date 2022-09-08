import React from "react";

const ImageComponent = (props) => {
  return (
    <>
      <div className="w-full pb-7">
        <img
          src={props.image}
          alt=""
          className="w-full"
          style={{ height: "400px" }}
        />
      </div>
    </>
  );
};

export default ImageComponent;
