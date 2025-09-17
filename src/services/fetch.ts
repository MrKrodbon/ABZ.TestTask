import { User, UserResponse } from "@/types/types";
import { apiInstance } from "./api";
import { AxiosResponse } from "axios";
import PhotoPlaceholder from "@/assets/icons/photo-cover.svg";
import { count } from "console";

apiInstance.interceptors.response.use((response) => {
  if (response.data?.users) {
    response.data.users = response.data.users.map((user: User) => ({
      ...user,
      photo: user.photo.includes("placeholder.png")
        ? PhotoPlaceholder
        : user.photo,
    }));
  }
  return response;
});

export const getUsers = async (
  page?: number
): Promise<AxiosResponse<UserResponse>> => {
  const data = await apiInstance.get(`/users`, {
    params: { page: page ?? 1, count: 6 },
  });

  return data;
};
