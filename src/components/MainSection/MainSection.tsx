import { User } from "@/types/types";
import React, { Suspense, useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";
import s from "./MainSection.module.scss";
import { getUsers } from "@/services/fetch";
import Button from "../Button/Button";
import Title from "../Title/Title";
import useGetUsers from "@/hooks/useGetUsers";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const MainSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { users, totalPages, isLoading } = useGetUsers(currentPage);

  const handleShowMoreClick = () => {
    if (currentPage <= totalPages) {
      setCurrentPage((prev) => prev + 1);
      getUsers(currentPage);
    }
  };

  return (
    <div className={s.mainSection}>
      <Title title={"Working with GET request"} />
      {isLoading ? <LoadingSpinner /> : users && <UsersList users={users} />}
      {currentPage <= totalPages && (
        <Button
          label="Show more"
          variant="primary"
          onClick={handleShowMoreClick}
        />
      )}
    </div>
  );
};

export default MainSection;
