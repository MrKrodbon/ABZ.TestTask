import React, { useState } from "react";
import Title from "../Title/Title";
import { UserForm } from "@/types/types";

const initialState: UserForm = {
  name: "",
  email: "",
  phone: "",
  photo: null,
  position: "Frontend developer",
};

const FormSection = () => {
  const [formData, setFormData] = useState<UserForm>(initialState);
  return <Title title="Working with POST request" />;
};

export default FormSection;
