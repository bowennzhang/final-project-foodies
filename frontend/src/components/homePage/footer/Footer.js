import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div className="footer-terms">
        <p>Privacy Statement</p>
        <p>|</p>
        <p>Terms of use</p>
        <p>|</p>
        <p>Partners</p>
      </div>
      <p className="footer-copyright">
        © 2022 Foodies Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
