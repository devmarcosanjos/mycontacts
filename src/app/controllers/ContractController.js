const ContactRepository = require("../repository/ContactRepository");

class ContractController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) return response.status(404, { error: "User not found." });

    response.json(contact);
  }

  store() {
    // criar um novo registro
  }

  update() {
    // editor um registro
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) return response.status(404, { error: "User nor found." });

    await ContactRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContractController();
