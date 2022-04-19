import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

export default function(context) {
  console.log("[Middleware] Auth");
    if (!context.store.getters.IsUserAuthenticated) {
      context.redirect("/login");
    }


  const token = Cookie.get(process.env.AUTH_COOKIE_NAME);
  const userID = jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (!err) return user.data.id;
  });
  if (!userID && userID===null) {
    context.redirect('/login');
  }
}
