import React from "react";
import Logo from "@assets/icons/Logo.svg";
import Button from "@/components/Button/Button";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <img src={Logo} alt="logotype" className={s.logo} />

      <div className={s.navigation}>
        <Button variant="primary" label="Users" />
        <Button variant="primary" label="Sign up" />
      </div>
    </div>
  );
};

export default Header;
