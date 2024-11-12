import type { StaffProfileRaw } from "~/constants/types/types";
import { urlGenerator } from "~/handlers/ycLinkGenerator";
import type { BranchCode } from "~/constants/enums/branch.enum";

export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  level: string;
  isValid: boolean;
  linkToBooking: string;
  experience: string;
}

enum BarberId {
  "DmitriyBerezka" = 3099551,
  "Ilya" = 3062136,
  "AndrewBerezka" = 2666397,
  "AndrewRaduga" = 3176632,
  "Natalia" = 2709740,
  "NataliaRaduga" = 3191125,
  "Ulia" = 3317365,
  "DmirtiyRaduga" = 3209019,
}

export class Profile implements IProfile {
  public id;

  public name;

  public avatar;

  public level;

  public isValid;

  public linkToBooking;

  public experience;

  getExperience(barberId: BarberId) {
    const mastersExperience = {
      [BarberId.DmirtiyRaduga]: 1714521600000,
      [BarberId.Ulia]: 1723766400000,
      [BarberId.Natalia]: 1691452800000,
      [BarberId.NataliaRaduga]: 1691452800000,
      [BarberId.AndrewBerezka]: 1619222400000,
      [BarberId.AndrewRaduga]: 1619222400000,
      [BarberId.Ilya]: 1723766400000,
      [BarberId.DmitriyBerezka]: 1619136000000,
    };

    if (!mastersExperience[barberId]) {
      return "";
    }

    const expTimestamp = Date.now() - mastersExperience[barberId];
    const dayMs = 60 * 60 * 24 * 1000;
    const days = expTimestamp / dayMs;
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);

    const yearString = years ? `${years} ${years > 1 ? "года " : "год "}` : "";
    const monthsString = months
      ? `${months} ${months > 1 ? "мес" : "месяц"}`
      : "";
    return `${yearString}${monthsString}`;
  }

  constructor(staffProfileRaw: StaffProfileRaw, branchCode: BranchCode) {
    this.id = staffProfileRaw.id;
    this.name = staffProfileRaw.name || "";
    this.avatar = staffProfileRaw.avatar || "";
    this.level = staffProfileRaw.specialization || "";

    this.experience = this.getExperience(staffProfileRaw.id);

    this.linkToBooking = urlGenerator.bookToMaster(
      branchCode,
      staffProfileRaw.id,
    );

    this.isValid = Boolean(this.name && this.avatar);
  }
}
