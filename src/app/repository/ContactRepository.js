const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Marcos",
    email: "marcos@gmail.com",
    phone: "123123",
    category_id: uuid(),
  },
];

class ContractRepository {
  findAll() {
    return new Promise((resolver) => {
      resolver(contacts);
    });
  }
}

module.exports = new ContractRepository();
