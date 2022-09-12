import { getData, updateData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import StudentData from "@/lib/types/StudentData";

const handler: NextApiHandler = async (req, res) => {
    if (req.query.class_id) {
      const data = await updateData<StudentData>(req.query.dat as {}, req.query.uid as string, 'users');
      return res.json(data);
    } else {
      return res.redirect("/auth/login");
    }
  res.status(405).send("Method Not Allowed");
};

export default handler;
