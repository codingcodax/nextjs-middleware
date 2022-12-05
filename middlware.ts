import { NextResponse, type NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const name = req.nextUrl.pathname.split("/").pop();

  console.log(req.nextUrl.pathname);

  const slugFetch = await fetch(
    `${req.nextUrl.origin}/api/get-greeting/${name}`
  );

  if (slugFetch.status === 404)
    return NextResponse.redirect(req.nextUrl.origin);

  const data = await slugFetch.json();

  if (data?.greeting)
    return NextResponse.redirect("https://www.codingcodax.dev/");
};

export const config = {
  matcher: [
    "/((?!_next)(?!_static)(?!_vercel)(?!api)(?!dashboard)(?!sign-in).*)",
  ],
};
