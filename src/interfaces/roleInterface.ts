export type RoleAtomType = "ROLE_INSTITUTION" | "ROLE_USER" | "ROLE_ADMIN";
export type ApplyRoleAtomType = "player" | "viewer";

export interface IRole {
  role: RoleAtomType;
}

export interface IApplyRole {
  role: ApplyRoleAtomType;
}
