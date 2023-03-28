/**
 *
 * @param {import('@enhance/types').EnhanceApiReq} req
 * @returns
 */
export async function post(req) {
  console.log(req.body);
  return {
    location: "/login",
    session: {
      authenticated: false,
    },
  };
}
