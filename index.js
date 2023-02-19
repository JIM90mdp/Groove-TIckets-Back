const server = require('./src/app.js');
const { sequelize } = require('./src/db.js');
const PORT = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
  console.log('Connected to the database');
  server.listen(PORT, () => {
    console.log('Server listening on port ', PORT);

  });
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});
