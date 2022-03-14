module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0a014f8c0d16892faf36179ff5593427'),
  },
});
