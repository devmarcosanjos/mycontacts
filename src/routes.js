const { Router } = require("express");

const ContractController = require("./app/controllers/ContractController");

const router = Router();

router.get(
  "/contacts",
  (request, response, next) => {
    request.appId = "MeuAppID";
    next();
  },
  ContractController.index
);
router.get("/contacts/:id", ContractController.show);
router.post("/contacts", ContractController.store);
router.put("/contacts/:id", ContractController.update);
router.delete("/contacts/:id", ContractController.delete);

module.exports = router;
