import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

export default function(context) {
  console.log("[Middleware] Auth");
  // if (!context.store.getters.isAuthenticated) {
  //   context.redirect("/admin/auth");
  // }

  setTimeout(function () {
  console.warn('sdadadad',Cookie.get(process.env.AUTH_COOKIE_NAME));

  },2000)

  if (!Cookie.get(process.env.AUTH_COOKIE_NAME)) {
    console.log('1');
    return;
    context.redirect('/login');
  }

  const token = Cookie.get(process.env.AUTH_COOKIE_NAME);
  const userID = jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (!err) return user.data.id;
  });
  if (!userID && userID===null) {
    console.log('2');
    return;
    context.redirect('/login');
  }
}
