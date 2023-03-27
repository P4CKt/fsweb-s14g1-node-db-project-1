const db = require("../../data/db-config");

const getAll = () => {
  db("accounts");
};

const getById = (id) => {
  db("accounts").where({ id }).first();
};

const create = async (account) => {
  db("accounts")
    .insert(account)
    .then((ids) => getById(ids[0]));
};

const updateById = (id, account) => {
  db("accounts")
    .where({ id })
    .update(account)
    .then(() => getById(id));
};

const deleteById = (id) => {
  db("accounts").where({ id: id }).delete();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
