import React from "react";
import s from "./Title.module.scss";
import clsx from "clsx";

interface TitleProps {
  title: string;
  isSectionTitle?: boolean;
  isParagraphTitle?: boolean;
  className?: string;
}
const Title = ({
  title,
  isSectionTitle,
  isParagraphTitle,
  className,
}: TitleProps) => {
  return (
    <p
      className={clsx(s.title, className, {
        [s.sectionTitle]: isSectionTitle,
        [s.paragraphTitle]: isParagraphTitle,
      })}
    >
      {title}
    </p>
  );
};

export default Title;
