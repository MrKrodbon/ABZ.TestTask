import React from "react";
import Title from "../Title/Title";
import { UserForm } from "@/types/types";
import { useForm } from "react-hook-form";
import { JOB_TYPES, VALIDATION_RULES } from "@/constants";
import Button from "../Button/Button";
import s from "./FormSection.module.scss";
import UploadFile from "../UploadFile/UploadFile";
import clsx from "clsx";

const initialState: UserForm = {
  name: "",
  email: "",
  phone: "",
  photo: null,
  position: "Frontend developer",
};

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialState });

  const onSubmit = (data: UserForm) => {};

  return (
    <section className={s.formSection}>
      <Title title="Working with POST request" />
      <div className={s.formWrapper}>
        <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputFormContainer}>
            <input
              type="text"
              placeholder="Your name"
              className={clsx(s.textInputFields, {
                [s.errorBorder]: errors.name?.message,
              })}
              {...register("name", VALIDATION_RULES.name)}
            />

            <input
              type="email"
              placeholder="Email"
              className={clsx(s.textInputFields, {
                [s.errorBorder]: errors.email?.message,
              })}
              {...register("email", VALIDATION_RULES.email)}
            />
            <label>
              <input
                type="tel"
                placeholder="Phone"
                className={clsx(s.textInputFields, {
                  [s.errorBorder]: errors.phone?.message,
                })}
                {...register("phone", VALIDATION_RULES.phone)}
              />
              <p className={s.hintText}>+38 (XXX) XXX - XX - XX</p>
            </label>
          </div>
          <div className={s.radioButtonContainer}>
            <Title title="Select your position" isParagraphTitle />
            <div className={s.radioButtonsList}>
              {JOB_TYPES.map(({ id, label, defaultChecked }) => (
                <label htmlFor={id} key={id} className={s.radioContainer}>
                  <input
                    id={id}
                    {...register("position")}
                    type="radio"
                    checked={defaultChecked}
                  />
                  <span className={s.checkmark}></span>
                  <span className={s.labelText}>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={s.uploadContainer}>
            <UploadFile register={register} />
          </div>

          <div className={s.signUpButtonContainer}>
            <Button
              variant="primary"
              label="SignUp"
              className={s.signUpButton}
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
