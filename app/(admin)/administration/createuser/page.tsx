import UserClient from "./UserClient";
import { getUsers } from "./userActions";

export default async function UsersPage() {
  const users = await getUsers();

  return <UserClient users={users} />;
}