const { Router } = require("express");

const ContractController = require("./app/controllers/ContractController");

const router = Router();

router.get("/contacts", ContractController.index);

module.exports = router;
