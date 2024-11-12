import { Branch, BranchCode } from "~/constants/enums/branch.enum";

export function getBranchCode(name: string) {
  switch(name) {
    case Branch.Raduga:
      return BranchCode.Raduga
    case Branch.Berezka:
      return BranchCode.Berezka
    default:
      return BranchCode.Berezka
  }
}
