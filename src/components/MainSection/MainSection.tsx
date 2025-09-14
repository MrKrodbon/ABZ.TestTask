import { User } from "@/types/types";
import React, { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";
import s from "./MainSection.module.scss";
import { getAllUsers } from "@/services/fetch";
import Button from "../Button/Button";
import Title from "../Title/Title";

const MainSection = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUsers();
      if (response && response.data) {
        const updatedUsers = response.data.users;
        setUsers(updatedUsers);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className={s.mainSection}>
      <Title title={"Working with GET request"} />
      {users && <UsersList users={users} />}
      <Button label="Show more" variant="primary" />
    </div>
  );
};

export default MainSection;
