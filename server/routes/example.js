//EXAMPLE CODE

// const { Router } = require("express");
//const pizza = require("../models/Pizza");
// const router = Router();

// Create record in MongoDB
// router.post('/', (request, response) => {
//   const newPizza = new pizza.model(request.body);
//   newPizza.save((err, pizza) => {
//     return err ? response.sendStatus(500).json(err) : response.json(pizza);
//   });
// });

// Get all pizza records
// router.get("/", (request, response) => {
//   pizza.model.find({}, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

// Get a pizza by ID
// router.get('/:id', (request, response) => {
//   pizza.model.findById(request.params.id, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });
// module.exports = router;
