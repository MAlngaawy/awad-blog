module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '75ef53d3a08d092213a5ef8efbd054f3'),
  },
});
