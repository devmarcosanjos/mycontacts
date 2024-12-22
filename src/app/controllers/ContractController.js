const ContactRepository = require("../repository/ContactRepository");

class ContractController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // criar um novo registro
  }

  update() {
    // editor um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContractController();
