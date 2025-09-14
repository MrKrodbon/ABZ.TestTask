export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

export interface UserResponse {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
}

export interface UserForm {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: string | null;
}
