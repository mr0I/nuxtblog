export default function(context) {
  console.log("[Middleware] Guest");
  if (context.store.getters.IsUserAuthenticated) context.redirect("/");
}
