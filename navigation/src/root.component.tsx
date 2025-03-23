import * as singleSpa from "single-spa";
import { utilityMethod } from "@pankajpatil/utility";
import "./root.css";
import { useEffect } from "react";

export default function Root(props) {
  const navigateTo = (e, url) => {
    e.preventDefault();
    if (url !== null) {
      singleSpa.navigateToUrl(url);
    }
  };

  useEffect(() => {
    console.log(utilityMethod("Navigation"));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a onClick={(e) => navigateTo(e, null)} className="site-name">
          PankajPatil
        </a>
      </div>
      <div className="navbar-right">
        <a onClick={(e) => navigateTo(e, "profile")} className="menu-item">
          Profile
        </a>
        <a onClick={(e) => navigateTo(e, "settings")} className="menu-item">
          Settings
        </a>
      </div>
    </nav>
  );
}
