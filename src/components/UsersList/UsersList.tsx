import { User } from "@/types/types";
import React from "react";
import UserCard from "./UserCard/UserCard";
import s from "./UsersList.module.scss";

interface UsersListProps {
  users: User[];
}

const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul className={s.list}>
      {users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </ul>
  );
};

export default UsersList;
