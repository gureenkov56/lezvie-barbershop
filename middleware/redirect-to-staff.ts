import { DEFAULT_BRANCH } from "~/constants/constants";
import { Branch, BranchCode } from "~/constants/enums/branch.enum";

export default defineNuxtRouteMiddleware((to) => {
  const urlBranch = to.params.branch;
  const isBranchCode = Object.values(BranchCode).includes(urlBranch);
  if (isBranchCode) {
    switch (urlBranch) {
      case BranchCode.Berezka:
        return navigateTo(`/staff/${Branch.Berezka}`);
      case BranchCode.Raduga:
        return navigateTo(`/staff/${Branch.Raduga}`);
    }
  }

  const isBranchExist = Object.values(Branch).includes(urlBranch);

  if (!isBranchExist) {
    return navigateTo(`/staff/${DEFAULT_BRANCH}`);
  }
});
