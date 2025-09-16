import React from "react";
import s from "./Title.module.scss";
import clsx from "clsx";

interface TitleProps {
  title: string;
  isSectionTitle?: boolean;
  isParagraphTitle?: boolean;
}
const Title = ({ title, isSectionTitle, isParagraphTitle }: TitleProps) => {
  return (
    <p
      className={clsx(s.title, {
        [s.sectionTitle]: isSectionTitle,
        [s.paragraphTitle]: isParagraphTitle,
      })}
    >
      {title}
    </p>
  );
};

export default Title;
