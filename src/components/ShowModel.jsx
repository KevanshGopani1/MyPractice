//CreatePortal Demo

import React from "react";
import ReactDOM from "react-dom";

const ShowModel = ({ closeModel, children }) => {
  //CreatePortal (component, Dom Nod )

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModel}></div>
      <div className="modal-container">{children}</div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default ShowModel;
