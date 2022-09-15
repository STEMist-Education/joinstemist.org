import { getData, updateData, addData } from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import StudentData from "@/lib/types/StudentData";
import RegistrationFormData from "@/lib/types/RegistrationFormData";
import { useRouter } from 'next/router'

const handler: NextApiHandler = async (req, res) => {
      const data = await updateData<StudentData>({classes:req.body.classes}, req.body.uid as string, 'users');
      await addData<RegistrationFormData>({email:req.body.email, classes:req.body.classes, uid:req.body.uid, username:req.body.username, name:req.body.name}, req.body.uid as string, 'registrationforms')
      return res.json({data});
  res.status(405).send("Method Not Allowed");
};

export default handler;