import {
  addData,
  getData,
  updateData,
} from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import db from "@/lib/serverApp";
import StudentData from "@/lib/types/StudentData";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    if (req.query.uid) {
      const data = await getData<StudentData>(req.query.uid as string, "users");
      return res.json(data);
    } else {
      return res.redirect("/auth/login");
    }
  } else if (req.method === "POST") {
    if (
      req.cookies.id &&
      (await db.collection("ids").doc(req.cookies.id).get()).data()
    ) {
      await db.collection("ids").doc(req.cookies.id).delete();
      const body = JSON.parse(req.body);
      await addData<StudentData>(
        {
          name: body.name,
          profileUrl: body.profileUrl,
          classes: ["generalinfo"],
          uid: body.uid,
          role: "student",
        },
        body.uid,
        "users"
      );
      return res.json({});
    } else {
      res.redirect("/auth/register");
    }
  } else if (req.method === "PUT") {
    try {
      const body = JSON.parse(req.body);
      await updateData<StudentData>(
        {
          name: body.name,
          profileUrl: body.profileUrl,
        },
        body.uid,
        "users"
      );
      return res.json({});
    } catch {
      res.status(500).send("Internal Server Error");
    }
  }
  res.status(405).send("Method Not Allowed");
}; 

export default handler;
