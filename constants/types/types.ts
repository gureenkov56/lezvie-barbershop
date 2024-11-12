export type StaffProfileRaw = {
  id: number;
  name: string;
  specialization: string;
  weight: number; // вес сотрудника для сортировки: больше - выше
  rating: number;
  user_id: number;
  avatar: string;
  avatar_big: string;
};
