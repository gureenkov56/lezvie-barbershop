import { BranchCode } from "./enums/branch.enum";

export type BarberProfile = {
  id: number;
  name: string;
  avatar: string;
  level: string;
  linkToBooking: string;
  experience: number;
  branch: BranchCode;
};

enum Levels {
  barber = "Барбер",
  top = "Топ-барбер",
  chief = "Шеф-барбер",
}

export type Staff = BarberProfile[];

export const STAFF: Staff = [
  {
    id: 2,
    name: "Андрей",
    avatar: "/images/staff/staff-andrey.webp",
    level: Levels.top,
    linkToBooking:
      "https://n1110926.yclients.com/company/1025500/personal/select-services?o=m3176632",
    experience: 1619222400000,
    branch: BranchCode.Raduga,
  },
  {
    id: 3,
    name: "Юлия",
    avatar: "/images/staff/staff-yulia.webp",
    level: Levels.barber,
    linkToBooking:
      "https://n1110926.yclients.com/company/1025500/personal/select-services?o=m3317365",
    experience: 1723766400000,
    branch: BranchCode.Raduga,
  },

  {
    id: 4,
    name: "Наталья",
    avatar: "/images/staff/staff-natalie.webp",
    level: Levels.top,
    linkToBooking:
      "https://n1110926.yclients.com/company/875113/personal/select-services?o=m2709740",
    experience: 1691452800000,
    branch: BranchCode.Berezka,
  },
];
