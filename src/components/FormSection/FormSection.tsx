import React, { useState } from "react";
import Title from "../Title/Title";
import { UserForm } from "@/types/types";
import { useForm } from "react-hook-form";
import { jobTypes } from "@/constants";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";
import s from "./FormSection.module.scss";
import UploadFile from "../UploadFile/UploadFile";

const initialState: UserForm = {
  name: "",
  email: "",
  phone: "",
  photo: null,
  position: "Frontend developer",
};

const FormSection = () => {
  const [formData, setFormData] = useState<UserForm>(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialState });

  const onSubmit = (data: UserForm) => {
    console.log(data);
  };

  const selectedPosition = watch("position");
  return (
    <section className={s.formSection}>
      <Title title="Working with POST request" />
      <div className={s.formWrapper}>
        <div className={s.inputFormContainer}>
          <input
            type="text"
            placeholder="Your name"
            className={s.textInputFileds}
            {...register("name", { required: "Name is required" })}
          />

          <input
            type="email"
            placeholder="Email"
            className={s.textInputFileds}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          <label>
            <input
              type="tel"
              placeholder="Phone"
              className={s.textInputFileds}
            />
            <p className={s.hintText}>+38 (XXX) XXX - XX - XX</p>
          </label>
        </div>
        <div className={s.radioButtonContainer}>
          <Title title="Select your position" isParagraphTitle />
          <div className={s.radioButtonsList}>
            {jobTypes.map(({ id, label, defaultChecked }) => (
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
          <Button variant="primary" label="SignUp" className={s.signUpButton} />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
