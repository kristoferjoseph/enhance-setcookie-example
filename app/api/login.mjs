export async function post(req) {
  const logins = Array.isArray(req.session?.logins) ? req.session.logins : [];
  const loggedInAt = new Date().toISOString();
  console.log(logins);
  logins.push(loggedInAt);

  return {
    location: "/",
    headers: {
      "set-cookie": "hello=world; Path=/; HttpOnly",
    },
    session: {
      lastLoggedIn: loggedInAt,
      authenticated: true,
      logins,
    },
  };
}
