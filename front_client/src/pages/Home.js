import React from "react";
import { Link } from "react-router-dom";
import TwitterArt from "../components/images/TwitterArt.png";
import Icon, { GoogleOutlined, AppleFilled } from "@ant-design/icons";
import { Button } from "antd";

function Home() {
  const GoogleIcon = () => (
    <Icon
      component={() => (
        <img src="https://img.icons8.com/fluency/20/000000/google-logo.png" />
      )}
    />
  );

  return (
    <div className="container-fluid ">
      <div className="row align-items-center">
        <div className="col-md-7">
          <img
            className="img-fluid"
            style={{ height: "100vh" }}
            src={TwitterArt}
          ></img>
        </div>

        <div className="col-md-5">
          <img src="https://img.icons8.com/color/96/000000/twitter--v1.png" />
          <h1 className="mb-4" id="lead">
            Happening now
          </h1>
          <h3 className="mb-4" style={{ fontWeight: "700" }}>
            Join Twitter today.{" "}
          </h3>

          <div className="w-50">
            <Button
              className="mb-3"
              block
              shape="round"
              icon={<GoogleIcon />}
              size="large"
            >
              Sign Up with Google
            </Button>

            <Button
              className="mb-3"
              block
              shape="round"
              icon={<AppleFilled />}
              size="large"
            >
              Sign Up with Apple
            </Button>

            <Button className="mb-3" block shape="round" size="large">
              Sign Up with Phone or Email
            </Button>

            <div class="form-text mb-4">
              By signing up, you agree to the{" "}
              <Link to="#">Terms of Service</Link>, and{" "}
              <Link to="#">Privacy Policy</Link>, including{" "}
              <Link to="#">Cookie Use</Link>.
            </div>
            <p>Already have an account? <Link to="#">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
