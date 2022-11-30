const express = require("express");
const placesRoutes = require("./routes/places-routes");

const app = express();

app.use("/api/places",placesRoutes);


app.use(express.urlencoded({extended:false}));





app.listen(5000);