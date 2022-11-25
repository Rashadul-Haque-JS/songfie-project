import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Login from "../../components/auth/authComponents/LoginForm";

const Home = () => {
  const [index, setIndex] = useState(0);
  const imageName = ["mike", "girlone", "man", "boy", "girltwo"];
  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((index) => {
        if (index < imageName.length - 1) {
          return index + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  const backgroundImg = require(`../../assets/image/static/${imageName[index]}.png`);

  return (
    <div className="row flex-wrap mt-4 mx-2 h-50 bg-danger rounded">
      <div className="col-md-8 h-100 mb-5 ">
        <div
          className="h-100 showcase d-flex flex-column justify-content-end"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay"></div>
          <div className="showcase-inner">
            <h1>
              Do you love to sing?{" "}
              <span>Let your musical passion be flown</span>
              <span>Sing for reason or for no reason</span>
              <span>Sing forthright</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center bg-dark mb-5 rounded">
        <Login />
      </div>
    </div>
  );
};

export default Home;
