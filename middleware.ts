import { NextResponse, type NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const name = req.nextUrl.pathname.split("/").pop();

  if (req.nextUrl.pathname === "/") return;

  console.log(req.nextUrl.pathname, name);

  const slugFetch = await fetch(
    `${req.nextUrl.origin}/api/get-greeting/${name}`
  );

  if (slugFetch.status === 404)
    return NextResponse.redirect(req.nextUrl.origin);

  const data = await slugFetch.json();

  if (data?.greeting)
    return NextResponse.redirect("https://www.codingcodax.dev/");

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next|_proxy|_auth|_static|_vercel|[\\w-]+\\.\\w+).*)"],
};
