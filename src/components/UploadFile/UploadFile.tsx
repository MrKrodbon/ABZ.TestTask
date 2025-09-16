import { register } from "module";
import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";
import { UserForm } from "@/types/types";
import { UseFormRegister } from "react-hook-form";
import s from "./UploadFile.module.scss";

interface UploadFileProps {
  register: UseFormRegister<UserForm>;
}

const UploadFile = ({ register }: UploadFileProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [userFile, setUserFile] = useState("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  console.log(userFile);

  const handleFileChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = e.target.files;
    if (filesArray && filesArray[0]) {
      setUserFile(filesArray[0].name);
    }
  };

  return (
    <>
      <Button variant="upload" label="Upload" onClick={handleClick} />
      <input
        type="file"
        accept="image/*"
        id="photo-upload"
        ref={fileInputRef}
        className={s.input}
        onChange={handleFileChanged}
      />
      <Textarea register={register} value={userFile} />
    </>
  );
};

export default UploadFile;
