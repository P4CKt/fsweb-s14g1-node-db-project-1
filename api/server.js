const express = require("express");
const server = express();
const router = require("./accounts/accounts-router");

server.use(express.json());
server.use("/api/accounts", router);

server.get("/", (req, res) => res.send("<h2>Çuf Çuf ÇUF</h2>"));
module.exports = server;
