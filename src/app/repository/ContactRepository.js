const { v4 } = require("uuid");

const contacts = [
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
}

module.exports = new ContractRepository();
