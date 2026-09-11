import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const proto = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("host") || "";

  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");

  if (
    process.env.NODE_ENV === "production" &&
    !isLocal &&
    proto &&
    proto !== "https"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Deliberately excludes /_next/image, /_next/static, and files under
  // /images — a broad "/:path*" matcher here breaks Next's internal
  // image-optimization request simulation for local /public images.
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon.ico|icon.png|apple-icon.png|.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif)$).*)",
  ],
};
