import { getData, updateData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import StudentData from "@/lib/types/StudentData";
import { useRouter } from 'next/router'

const handler: NextApiHandler = async (req, res) => {
      const data = await updateData<StudentData>({classes:req.body.classes}, req.body.uid as string, 'users');
      return res.json({});
  res.status(405).send("Method Not Allowed");
};

export default handler;