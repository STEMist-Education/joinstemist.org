import { updateData, addData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import { FieldValue } from "firebase-admin/firestore";

const handler: NextApiHandler = async (req, res) => {
  const body: { uid: string; class_id: string; pn:string; pe:string; sn: string, se: string, sg: string, schooln:string} = req.body;
  await updateData(
    { classes: FieldValue.arrayUnion(body.class_id) },
    body.uid,
    "users"
  );
  await addData(
    { classes: FieldValue.arrayUnion(body.class_id), studentname: body.sn, studentemail: body.se, studentgrade: body.sg, parentname: body.pn, parentemail: body.pe, schoolname: body.schooln},
    (body.pn+"&"+body.uid),
    "formdata"
  );
  res.status(200).json({});
};

export default handler;
