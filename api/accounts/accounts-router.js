const router = require("express").Router();
const {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} = require("./accounts-model");
router.get("/", (req, res, next) => {
  try {
    const accounts = getAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  // KODLAR BURAYA
});

router.post("/", (req, res, next) => {
  // KODLAR BURAYA
});

router.put("/:id", (req, res, next) => {
  // KODLAR BURAYA
});

router.delete("/:id", (req, res, next) => {
  // KODLAR BURAYA
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // KODLAR BURAYA
});

module.exports = router;
