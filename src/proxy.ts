import { auth } from "@/auth"

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthRoute = req.nextUrl.pathname.startsWith("/admin/login");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/admin", req.nextUrl));
    }
    return;
  }

  if (isAdminRoute && !isLoggedIn) {
    return Response.redirect(new URL("/admin/login", req.nextUrl));
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|__server_sent_events__).*)'],
}
