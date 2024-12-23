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

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contaExists = await ContactRepository.findById(id);
    if (!contaExists)
      return response.status(404).json({ error: "User not found" });

    if (!name) return response.status(400).json({ error: "Name is required" });

    const contactByEmail = await ContactRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id)
      return response.status(400).json({ error: "This email already in use" });

    const contact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
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
