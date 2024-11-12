import type { BranchCode } from "~/constants/enums/branch.enum";

export const urlGenerator = {
  bookToMaster: (branchId: BranchCode, barberId: string | number) =>
    `https://b941152.yclients.com/company/${branchId}/personal/select-services?o=m${barberId}`,
};
