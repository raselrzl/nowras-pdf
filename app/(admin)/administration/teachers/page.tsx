
import TeacherClient from "./TeacherClient";
import { getTeachers } from "./teachersActions";

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return <TeacherClient teachers={teachers} />;
}