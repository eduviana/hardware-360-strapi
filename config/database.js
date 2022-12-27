// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'dpg-ccqbj59a6gdj1agfbk5g-a.oregon-postgres.render.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'hardware360'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', 'UrmIyoFOKoBQ8kXQB3dYrZIbrweVw85z'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-shrill-shadow-577905.cloud.neon.tech'),
      database: env('DATABASE_NAME', 'neondb'),
      user: env('DATABASE_USERNAME', 'eduardoviana83'),
      password: env('DATABASE_PASSWORD', 'W7LtNkPfjwi2'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});





