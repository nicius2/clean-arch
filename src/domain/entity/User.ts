import { UserRole } from "../enums/UserRole";
import { CreateUserProps } from "./types/CreateUserProps";

export class User {
     private constructor(
          readonly id: string,
          readonly email: string,
          readonly cpf: string,
          readonly passwordHash: string,
          readonly role: UserRole,
     ) {}

     static create(props: CreateUserProps): User {
          if(!props.name) {
               throw new Error("Name is required")
          }
          if(!props.email.includes("@")) {
               throw new Error("Email is required")
          }
          if(!props.cpf) {
               throw new Error("Cpf is required")
          }
          if(!props.passwordHash) {
               throw new Error("PasswordHash is required")
          }
          return new User(
               props.id,
               props.email,
               props.cpf,
               props.passwordHash,
               props.role ?? UserRole.USER, 
          )
     }
}