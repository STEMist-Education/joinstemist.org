import { getData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import Class from "@/lib/types/Class";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    if (req.query.class_id) {
      const data = await getData<Class>(req.query.class_id as string, "classes");
      return res.json(data);
    } else {
      return res.redirect("/auth/login");
    }
  }
  res.status(405).send("Method Not Allowed");
};

export default handler;
