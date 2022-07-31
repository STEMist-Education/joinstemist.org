import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/serverApp";
import { Person } from "@/lib/types";
import { teachers } from "@/lib/data/team";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const get = await db.collection("spotlight").doc("spotlight").get();
  const data: Person[] = get.data()?.spotlight;
  const updatedData = data.map((p) => teachers.find((e) => e.name === p.name));
  await db.collection("spotlight").doc("spotlight").set({
    spotlight: updatedData,
  });
  try {
    await res.revalidate("/about/team");
    return res.status(200).json({});
  } catch {
    return res.status(500).send("error revalidating");
  }
}
