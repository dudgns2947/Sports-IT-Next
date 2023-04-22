export type RoleAtomType = "ROLE_INSTITUTION" | "ROLE_USER" | "ROLE_ADMIN";

export interface IRole {
  role: RoleAtomType;
}
