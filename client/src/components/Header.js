import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        D'Stream
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>

        <GoogleAuth />
      </div>
    </div>
  );
};
//786945232551-em5kkb2tmvnpj7neg7h8g2jvcjvdhdm0.apps.googleusercontent.com
export default Header;
