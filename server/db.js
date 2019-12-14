const Sequelize = require("sequelize");
const sequelize = new Sequelize("workoutlog", "postgres", "ROBERT2kewl4u22@@", {
  host: "localhost",
  dialect: "postgres"
});
sequelize.authenticate().then(
  function() {
    console.log("Connected to workoutlog postgres database");
  },
  function(err) {
    console.log(err);
  }
);

module.exports = sequelize;
