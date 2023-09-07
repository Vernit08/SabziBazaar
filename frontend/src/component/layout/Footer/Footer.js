import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import apnalogo from "../../../images/logo.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        {/* <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
        <img src={apnalogo} alt="Website log" className="logo" />
              <p>Shop the freshest veggies online! Browse organic, locally sourced produce with ease. Elevate your cooking with quality you can trust.
              </p>
      </div>

      <div className="midFooter">
        <h1>SabziBazaar</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; TeamBeta</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
              href="https://www.youtube.com/channel/SabziBazaar"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/SabziBazaar" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
        {/* <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://instagram.com">Facebook</a> */}
      </div>
    </footer>
  );
};

export default Footer;
