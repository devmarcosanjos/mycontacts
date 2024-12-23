const { v4 } = require("uuid");

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

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
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
