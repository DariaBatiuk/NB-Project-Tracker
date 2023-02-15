const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const axios = require('axios');
//TODO: Uncomment to make use of database, once set up
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
//Setup routes to the Server
//Look at /controllers folder
app.use("/", routes);

//TODO: Uncomment to make use of database, once set up
sequelize.sync({force: false}).then(()=>{
     app.listen(PORT, () => {
          console.log(`Server is listening at http://localhost:${PORT}`)
     });
});

app.use(express.json());

app.post('/getToken', async (req, res) => {
  try {
    const { code } = req.body;
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: "6bed90201b9cbadbca77",
      client_secret: "433469f2ad230adb74a9cd1f08538030e8aebd88",
      code
    }, {
      headers: {
        Accept: 'application/json'
      }
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error while fetching access token');
  }
});