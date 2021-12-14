module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b1e5b8b3ff981dac5d998af71d713cd3'),
  },
});
