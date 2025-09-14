import React from "react";
import { User } from "@/types/types";
import s from "./UserCard.module.scss";
import PhotoCover from "@/assets/icons/photo-cover.svg";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const { name, email, phone, photo, position } = user;
  console.log(photo, "photo");
  return (
    <li className={s.userCard}>
      <div className={s.content}>
        <div className={s.photoContainer}>
          {photo && <img src={photo} alt="user avatar" className={s.photo} />}
        </div>
        <p>{name}</p>
        <div>
          <p>{position}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </li>
  );
};

export default UserCard;
