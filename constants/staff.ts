import { BranchCode } from "./enums/branch.enum";

export type BarberProfile = {
  id: number;
  name: string;
  avatar: string;
  level: string;
  linkToBooking: string;
  experience: number;
  branch: BranchCode
}

enum Levels {
  barber = 'Барбер',
  top = 'Топ-барбер',
  chief = 'Шеф-барбер'
}

export type Staff = BarberProfile[]

export const STAFF: Staff = [
      {
        id: 1,
        name: 'Дмитрий',
        avatar: 'https://assets.yclients.com/masters/sm/2/25/25cbf795ad97797_20241006215658.png',
        level: Levels.barber,
        linkToBooking: 'https://n1110926.yclients.com/company/1025500/personal/select-services?o=m3209019',
        experience: 1714521600000,
        branch: BranchCode.Raduga
      },
      {
        id: 2,
        name: 'Андрей',
        avatar: 'https://assets.yclients.com/masters/sm/8/85/85b59a0b2bd2b1e_20241006215548.png',
        level: Levels.top,
        linkToBooking: 'https://n1110926.yclients.com/company/1025500/personal/select-services?o=m3176632',
        experience: 1619222400000,
        branch: BranchCode.Raduga
      },
      {
        id: 3,
        name: 'Юлия',
        avatar: 'https://assets.yclients.com/masters/sm/e/ea/ea2f143d7977a4e_20241006215804.png',
        level: Levels.barber,
        linkToBooking: 'https://n1110926.yclients.com/company/1025500/personal/select-services?o=m3317365',
        experience: 1723766400000,
        branch: BranchCode.Raduga
      },
    
      {
        id: 4,
        name: 'Наталья',
        avatar: 'https://assets.yclients.com/masters/sm/5/50/503ab4aa5662516_20241006215500.png',
        level: Levels.top,
        linkToBooking: 'https://n1110926.yclients.com/company/875113/personal/select-services?o=m2709740',
        experience: 1691452800000,
        branch: BranchCode.Berezka
      }, 
      {
        id: 5,
        name: 'Дмитрий',
        avatar: 'https://assets.yclients.com/masters/sm/1/11/116d770e9bc877c_20241006215338.png',
        level: Levels.top,
        linkToBooking: 'https://n1110926.yclients.com/company/875113/personal/select-services?o=m3099551',
        experience: 1619136000000,
        branch: BranchCode.Berezka
      },
      {
        id: 6,
        name: 'Илья',
        avatar: 'https://assets.yclients.com/masters/sm/c/c8/c82bab5221d4f77_20241006215211.png',
        level: Levels.chief,
        linkToBooking: 'https://n1110926.yclients.com/company/875113/personal/select-services?o=m3062136',
        experience: 1529513089000,
        branch: BranchCode.Berezka
      },
    ]