const express = require("express");
const helmet = require("helmet");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");

const app = express();

app.use(helmet());

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.use(express.urlencoded({ extended: false }));

app.listen(5000);
