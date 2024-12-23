const { v4 } = require("uuid");

const db = require("../../database/index");

let contacts = [
  {
    id: v4(),
    name: "Marcos",
    email: "marcos@gmail.com",
    phone: "123123",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Morre cedo",
    email: "mc@gmail.com",
    phone: "99999",
    category_id: v4(),
  },
];

class ContractRepository {
  findAll() {
    return new Promise((resolver) => {
      resolver(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id === id))
    );
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contacts) => contacts.id !== id);
      resolve();
    });
  }

  async create({ id, name, email, phone }) {
    const [row] = await db.query(
      `INSERT INTO contacts(id, name, email, phone, category_id )
       VALUES($1, $2, $3, $4, $5)
       RETURNING *
      `,
      [id, name, email, phone]
    );

    return row;
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updateContact = {
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updateContact : contact
      );

      resolve(updateContact);
    });
  }
}

module.exports = new ContractRepository();
