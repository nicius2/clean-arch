import { UserRole } from "../../enums/UserRole";

export interface CreateUserProps {
     id: string
     name: string;
     email: string;
     cpf: string;
     role: UserRole.USER;
     passwordHash: string;
}