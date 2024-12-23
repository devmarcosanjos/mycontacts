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

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) return response.status(400).json({ error: "Name is required" });

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists)
      return response
        .status(404)
        .json({ error: "Email is already been taken" });

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
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
