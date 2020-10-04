const verify = require('jsonwebtoken');

module.exports = function EnsureAuthentication(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'JWT token não econtrado!' });
  }

  const [, token] = authHeader.split();

  try {
    const decoded = verify(token, process.env.SECRET_JWT);

    const { sub } = decoded;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
}