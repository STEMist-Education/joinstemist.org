import { NextApiHandler } from "next"
import { getData, updateData} from "@/lib/auth/collection"

const ApiHandler: NextApiHandler = (req, res) => {
    if (req.method != "POST") {
        res.status(404).send("Bad Request of " + req.method)
    } else {
        console.log({body: req.body, cookies: JSON.parse(req.cookies as any["user"])["uid"]})
        const newClassCode = req.body["code"]
        const uid = JSON.parse(req.cookies as any["user"])["uid"]
        const data: any = getData("users", uid)
        console.log(data)
        const currentClasses = [...data["classes"]]
        console.log(currentClasses)
        const finalClass = { classes: [...currentClasses, newClassCode] }
        updateData(finalClass, uid, "users")
    }
}

export default ApiHandler