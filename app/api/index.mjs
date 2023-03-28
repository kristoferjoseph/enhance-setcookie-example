/**
 *
 * @param {import('@enhance/types').EnhanceApiReq} req
 * @returns
 */
export async function get(req) {
  console.log(req.cookies);
  const authenticated = req?.session?.authenticated === true;

  if (!authenticated) {
    return {
      location: "/login",
    };
  }

  return {
    json: {
      message: "Hello from your api route!",
      authenticated,
      logins: req.session.logins,
    },
  };
}
