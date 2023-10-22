const mongoose = require("mongoose");


mongoose
  .connect('mongodb://localhost:27017/Booking')
  .then((response) => {
    if (response) {
      console.log("DATABASE CONNECTION SUCCESSFULL");
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  })
  .catch((err) => {
    if (err) {
      console.log("ERROR CONNECT DATABASE", err);
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  });