import { User } from "./users";

export function parse(json: string): User[] {
  const parsed = JSON.parse(json);

  const users: User[] = [];

  for (const user of parsed) {
    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.phone &&
      user.address.city
    ) {
      const newUser: User = {
        fullname: `${user.firstName} ${user.lastName}`,
        email_address: user.email,
        phone_number: user.phone,
        city: user.address.city,
      };
      users.push(newUser);
    }
  }

  return users;
}
