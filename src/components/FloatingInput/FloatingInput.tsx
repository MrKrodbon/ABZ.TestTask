import { UserForm } from "@/types/types";
import React from "react";
import {
  UseFormRegister,
  FieldError,
  UseFormWatch,
  Path,
} from "react-hook-form";
import s from "./FloationInput.module.scss";
import clsx from "clsx";

interface FloatingInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<UserForm>;
  name: Path<UserForm>;
  validation?: any;
  error?: FieldError;
  hint?: string;
  watch: UseFormWatch<UserForm>;
}

const FloatingInput = ({
  label,
  type,
  placeholder,
  register,
  name,
  validation,
  error,
  hint,
  watch,
}: FloatingInputProps) => {
  const value = watch(name);
  const hasValue = value && value.length > 0;
  const hasError = !!error;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(s.floatingInput, {
          [s.hasValue]: hasValue,
          [s.errorBorder]: hasError,
        })}
        {...register(name, validation)}
      />
      <label
        className={clsx(s.floatingLabel, {
          [s.labelUp]: hasValue,
          [s.errorLabel]: hasError,
        })}
      >
        {label}
      </label>
      {hint && <p className={s.hintText}>{hint}</p>}
      {/* {hasError && <span className={s.errorText}>{error}</span>} */}
    </>
  );
};

export default FloatingInput;
