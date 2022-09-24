import { getData, updateData, addData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import Class from "@/lib/types/Class";

const handler: NextApiHandler = async (req, res) => {
      const data = await updateData<Class>({posts:req.body.posts}, req.body.uid as string, 'classes');
      return res.json({data});
  res.status(405).send("Method Not Allowed");
};

export default handler;