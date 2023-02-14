const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const path = require('path');

//TODO: Uncomment to make use of database, once set up
// const sequelize = require('./config/connection');
// const app = express();
// const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


//Setup routes to the Server
//Look at /controllers folder
app.use(routes);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




//TODO: Uncomment to make use of database, once set up
// sequelize.sync({force: false}).then(()=>{
//     app.listen(PORT, () => {
//         console.log(`Server is listening at http://localhost:${PORT}`)
//     });
// });

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
