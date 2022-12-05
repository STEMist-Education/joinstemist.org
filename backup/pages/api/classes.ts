import { getMultiple } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import Class from "@/lib/types/Class";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const data = await getMultiple<Class>("classes");
    return res.json(data);
  }
  res.status(405).send("Method Not Allowed");
};

export default handler;
