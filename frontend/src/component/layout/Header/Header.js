import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "black",
  logo,
  logoWidth: "20vmax",
  navColor1: "#81a3a3",
  logoHoverSize: "10px",
  logoHoverColor: "black",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-end",
  nav4justifyContent: "flex-end",
  link1ColorHover: "black",
  link1Margin: "2vmax",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
