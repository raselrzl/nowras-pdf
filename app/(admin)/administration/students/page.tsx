import StudentClient from "./StudentClient";
import { getStudents } from "./studentsActions";

export default async function StudentsPage() {
  const students = await getStudents();

  return <StudentClient students={students} />;
}