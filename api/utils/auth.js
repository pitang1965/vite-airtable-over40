const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const { promisify } = require('util');
const jwksClient = jwks({
  jwksUri: `https://${process.env.VITE_AUTH0_DOMAIN}/.well-known/jwks.json`,
  audience: process.env.VITE_AUTH0_AUDIENCE,
});

const getAccessTokenFromHeaders = (headers) => {
  const rawAuthorization = headers.authorization;
  if (!rawAuthorization) {
    return null;
  }
  const authorizationParts = rawAuthorization.split(' ');
  if (authorizationParts[0] !== 'Bearer' || authorizationParts.length !== 2) {
    return null;
  }
  return authorizationParts[1];
};

const validateAccessToken = async (token) => {
  try {
    const decodedToken = jwt.decode(token, { complete: true });
    const kid = decodedToken.header.kid;
    const alg = decodedToken.header.alg;
    const getSigningKey = promisify(jwksClient.getSigningKey);
    const key = await getSigningKey(kid);
    const signingKey = key.publicKey;
    const options = { algorithms: alg };
    jwt.verify(token, signingKey, options);
    return decodedToken.payload;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
  getAccessTokenFromHeaders,
  validateAccessToken,
};
