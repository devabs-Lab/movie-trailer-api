import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
function footer() {
  return (
    <>
      <div className="f1">
        <div>
          <FacebookOutlinedIcon />
          {"\u00A0"}
          <InstagramIcon />
          {"\u00A0"}
          <YouTubeIcon />
        </div>
      </div>
      <div className="footer">
        <div className="b1">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relation</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div className="b2">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookies Preferences</li>
          </ul>
        </div>
        <div className="b3">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="b4">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="f12">
       Service Code
      </div>
      <div className="f1 f4">&copy; 1997-2024 Netflix, Inc.</div>
    </>
  );
}

export default footer;
