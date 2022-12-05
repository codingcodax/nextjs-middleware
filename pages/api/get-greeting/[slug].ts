// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  greeting?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.query["slug"];

  if (!name || typeof name !== "string") {
    res.status(404).json({ error: "Please use with a valid name" });

    return;
  }

  if (name !== "john") {
    res.status(404).json({ error: "Invalid name" });

    return;
  }

  res.status(200).json({ greeting: `Hello ${name} doe!` });
}
