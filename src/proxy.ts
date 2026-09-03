import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { navLinks } from "@/content/site";

const validSlugs = navLinks
  .map((link) => link.href.replace(/^\//, ""))
  .filter(Boolean);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return NextResponse.next();
  }

  const firstSegment = segments[0];
  const matchedSlug = validSlugs.find(
    (slug) => slug.toLowerCase() === firstSegment.toLowerCase()
  );

  if (!matchedSlug) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  const isExactMatch = segments.length === 1 && firstSegment === matchedSlug;
  if (!isExactMatch) {
    const url = request.nextUrl.clone();
    url.pathname = `/${matchedSlug}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
