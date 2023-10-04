//CreatePortal Demo

import React, { useState } from "react";
import ShowModel from "./ShowModel";

const Model = () => {
  const [showModel, setShowModel] = useState(false);

  const closeModel = () => {
    return setShowModel(false);
  };

  const popUp = (
    <ShowModel closeModel={closeModel}>
      <h2> STAY TUNED</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        mollitia illo eaque, earum culpa illum?
      </p>
      <button className="model-button" onClick={closeModel}>
        I ACCEPT
      </button>
    </ShowModel>
  );

  return (
    <>
      <button className="model-button" onClick={() => setShowModel(true)}>
        Open Model
      </button>
      {showModel && popUp}
    </>
  );
};

export default Model;
