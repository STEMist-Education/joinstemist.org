import {
  addData,
  getData,
} from "@/lib/auth/collection";
import { NextApiHandler } from "next";
import StudentData from "@/lib/types/StudentData";
const handler: NextApiHandler = async (req, res) => {
    if (req.method === "GET") {
        res.status(400).json({
            message: `Invalid Method Call: ${req.method} MUST be POST`
        })
    } else if (req.method === "POST") {
        let user = await getData<StudentData>(req.cookies as any['id'], "users")
        addData({
            ...req.body
        }, user.uid, "autodata")
        const formData = new FormData()
        const headers = new Headers({ 'Content-Type': 'multipart/form-data'})
        for (let i = 0; i < Object.keys(req.body).length; i++) {
            const key = Object.keys(req.body)[i];
            const value = Object.values(req.body)[i];
            formData.append(String(key), String(value))
        }
        await fetch('', { body: formData, headers})
  } 
  res.status(405).send("Method Not Allowed");
};

export default handler;
