import Class from "../types/Class";
import StudentData from "../types/StudentData";

export const fetchUser = async (
  method: "GET" | "POST" | "PUT",
  uid: string,
  inputBody?: Partial<StudentData>
): Promise<StudentData | {}> => {
  try {
    if (method === "GET") {
      const res = await fetch(`/api/user?uid=${uid}`, {
        method,
      });
      const json = await res.json();
      return json;
    } else if (method === "POST") {
      const body = JSON.stringify({ ...(inputBody as StudentData), uid });
      const res = await fetch(`/api/user`, {
        method,
        body,
      });
      const json = await res.json();
      return json;
    } else if (method === "PUT") {
      const body = JSON.stringify({
        ...(inputBody as Partial<StudentData>),
        uid,
      });
      const res = await fetch(`/api/user`, {
        method,
        body,
      });
      const json = await res.json();
      return json;
    }
  } catch {}
  return {};
};

export const fetchClasses = async (): Promise<Class[]> => {
  try {
    const res = await fetch(`/api/classes`);
    const json = await res.json();
    return json;
  } catch {}
  return [] as Class[];
};
