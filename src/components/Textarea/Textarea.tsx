import { UserForm } from "@/types/types";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import s from "./Textarea.module.scss";

interface TextareaProps {
  register: UseFormRegister<UserForm>;
  value: string;
}

const Textarea = ({ register, value }: TextareaProps) => {
  return (
    <div
      className={s.textAreaWrapper}
      data-placeholder={value === "" ? "Upload your photo" : null}
    >
      <textarea
        className={s.textarea}
        disabled
        {...register("photo")}
        value={value && value}
      ></textarea>
    </div>
  );
};

export default Textarea;
