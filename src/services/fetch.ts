import { User, UserResponse } from "@/types/types";
import { apiInstance } from "./api";
import { AxiosResponse } from "axios";
import PhotoPlaceholder from "@/assets/icons/photo-cover.svg";

export const getAllUsers = async (): Promise<AxiosResponse<UserResponse>> => {
  const data = await apiInstance.get(`/users`, {
    params: { page: 2, count: 10 },
  });

  return data;
};

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
