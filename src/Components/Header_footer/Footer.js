import React from "react";
import { CityLogo } from "../UI/icons";

export default function Footer() {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo width="70px" height="70px" link linkTo="/" />
      </div>
      <div className="footer_discl">
        Manchester City 2019 all rights reserved
      </div>
    </footer>
  );
}
