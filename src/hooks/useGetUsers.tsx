import { getUsers } from "@/services/fetch";
import { User } from "@/types/types";
import React, { useEffect, useState } from "react";

const useGetUsers = (page: number) => {
  const [users, setUsers] = useState<User[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await getUsers(page);

        if (response?.data?.users) {
          const updatedUsers = response.data.users;
          setUsers((prev = []) => [...prev, ...updatedUsers]);
          setTotalPages(response.data.total_pages);
          setIsLoading(false);
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "failed to load data"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  return { users, totalPages, isLoading };
};

export default useGetUsers;
