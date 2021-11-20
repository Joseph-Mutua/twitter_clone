import React from "react";
import TwitterArt from "../components/images/TwitterArt.png";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 ">
          <img
            className="img-fluid"
            style={{ height: "100vh" }}
            src={TwitterArt}
          ></img>
        </div>

        <div className="col-md-6 ">
          <img src="https://img.icons8.com/color/96/000000/twitter--v1.png" />
          <h1 className="mb-4" id="lead">Happening now</h1>
          <h3 style={{fontWeight: "700"}}>Join Twitter today. </h3>

          
        </div>
      </div>
    </div>
  );
}

export default Home;
