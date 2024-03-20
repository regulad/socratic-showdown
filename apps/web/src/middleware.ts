import { type NextRequest, type NextResponse } from "next/server";
import { updateSession } from "./app/lib/supabase/middleware";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  // eslint-disable-next-line no-return-await -- we may add more logic here later
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /monitoring (sentry rewrites)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|monitoring|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
