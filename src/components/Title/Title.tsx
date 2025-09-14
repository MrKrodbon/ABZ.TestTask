import React from "react";
import s from "./Title.module.scss";
import clsx from "clsx";

interface TitleProps {
  title: string;
  isSectionTitle?: boolean;
}
const Title = ({ title, isSectionTitle }: TitleProps) => {
  return (
    <p className={clsx(s.title, { [s.sectionTitle]: isSectionTitle })}>
      {title}
    </p>
  );
};

export default Title;
