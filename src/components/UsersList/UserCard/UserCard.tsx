import React from "react";
import { User } from "@/types/types";
import s from "./UserCard.module.scss";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const { name, email, phone, photo, position } = user;

  return (
    <li className={s.userCard}>
      <div className={s.content}>
        <div className={s.photoContainer}>
          {photo && <img src={photo} alt="user avatar" className={s.photo} />}
        </div>
        <p className={s.name}>{name}</p>
        <div className={s.userInfo}>
          {[position, email, phone].map((info) => (
            <p>{info}</p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default UserCard;
