module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f362a8e0459944ab84fda5fd146b1642'),
  },
});
