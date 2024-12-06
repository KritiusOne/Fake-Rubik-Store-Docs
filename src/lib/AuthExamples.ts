export const createUserCSharp = `
    public class CreateUserDTO
    {
        public string? Name { get; set; }
        public string? SecondName { get; set; }
        public string Email { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
`
export const createUserTs = `
export interface CreateUser {
  Name?: string
  SecondName?: string
  Email: string
  Phone: string
  Password: string
}
`
export const registerUserResponse = `
  {
  "typeToken": "Bearer",
  "msg": "The register is succes. This is the JWT",
  "response": <JWT token>
  }
  `
export const loginUserCS = `
    public class UserLogin
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
`
export const loginUserTS = `
export interface loginUser {
  email: string,
  password: string,
}
`
export const loginSuccessResponse = `
{
  "typeToken": "Bearer",
  "msg": "The login is success. This is the JWT",
  "response": <JWT token>
}
`