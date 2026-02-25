import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  
  let users: User[] = [];
  if (Array.isArray(apiResponse)) {
    apiResponse.forEach((res) => {
      let { name, age } = res; 
      if (!name || !age) {
        return;
      }

      let user: User = {
        name: String(name), 
        age: Number(age),
      }
      users.push(user);
    })
  }
  return users;

  //return apiResponse as User[]; // intentionally unsafe
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}
