const express = require("express");
const APP_SERVER = express();


APP_SERVER.use("/users",  require("./Controllers/Users.controller"));
APP_SERVER.use("/mahal",  require("./Controllers/Mahal.controller"));
APP_SERVER.use("/MahalBooking",  require("./Controllers/Bookings.controller"));

module.exports=APP_SERVER;


