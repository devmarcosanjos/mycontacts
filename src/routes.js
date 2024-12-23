const { Router } = require("express");

const ContractController = require("./app/controllers/ContractController");

const router = Router();

router.get("/contacts", ContractController.index);
router.get("/contacts/:id", ContractController.show);
router.delete("/contacts/:id", ContractController.delete);

module.exports = router;
