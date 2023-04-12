import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import * as Icon from "react-feather";
import "./style.css";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled && "header-show"
      } w-100 header  p-4  d-flex justify-content-between align-items-center`}
    >
      <div className="d-flex">
        <Icon.Award size={25} />
        <h4 className="text-center">Berry Hotel</h4>
      </div>
      <div className="d-flex">
        <Icon.User size={25} />
        <strong>İlyas AKTAŞ</strong>
      </div>
    </div>
  );
};

export default Header;
