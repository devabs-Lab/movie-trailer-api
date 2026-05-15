import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
function footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_inner">
          <div className="f1">
            <FacebookOutlinedIcon className="f11" />
            {"\u00A0"}
            <InstagramIcon className="f11" />
            {"\u00A0"}
            <YouTubeIcon className="f11" />
          </div>
          <div className="footer_links">
            <div className="footer_column">
              <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies Preferences</li>
              </ul>
            </div>
            <div className="footer_column">
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="f12">Service Code</div>
          <div className="f4">&copy; 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}

export default footer;
