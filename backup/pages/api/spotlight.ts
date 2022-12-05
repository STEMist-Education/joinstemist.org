import { NextApiRequest, NextApiResponse } from "next";
import { teachers } from "@/lib/data/team";
import { sample } from "lodash";
import { Person } from "@/lib/types";
import db from "@/lib/serverApp";
import { TeacherSubject } from "@/lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file: Person[] = [];
  for (let i = 0; i < 4; i++) {
    let samp: Person<TeacherSubject> = sample(teachers)!;
    let isFound = file.some((element) => element.name === samp.name);
    while (
      samp.qualifications === undefined ||
      samp.qualifications.length < 4 ||
      isFound
    ) {
      samp = sample(teachers)!;
      isFound = file.some((element) => element.name === samp.name);
    }
    file.push(samp);
  }
  await db.collection("spotlight").doc("spotlight").set({
    spotlight: file,
  });
  try {
    await res.revalidate("/about/team");
    return res.status(200).json({});
  } catch {
    return res.status(500).send("error revalidating");
  }
}
