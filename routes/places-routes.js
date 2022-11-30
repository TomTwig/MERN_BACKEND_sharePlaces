const express = require("express");
const app = express();

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scapers in the world",
    imageUrl:
      "https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Eiffel Tower",
    description:
      "Gustave Eiffel's iconic, wrought-iron 1889 tower, with steps and elevators to observation decks.",
    imageUrl:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Champ de Mars, 5 Av. Anatole France",
    location: {
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: "u2",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((place) => place.id === placeId);
  res.json({ place });
});

module.exports = router;
