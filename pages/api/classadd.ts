import { updateData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import { FieldValue } from "firebase-admin/firestore";

const handler: NextApiHandler = async (req, res) => {
  const body: { uid: string; class_id: string } = req.body;
  await updateData(
    { classes: FieldValue.arrayUnion(body.class_id) },
    body.uid,
    "users"
  );
  res.status(200).json({});
};

export default handler;
