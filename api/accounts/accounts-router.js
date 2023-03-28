const router = require("express").Router();
const mw = require("./accounts-middleware");
const {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} = require("./accounts-model");

router.get("/", async (req, res, next) => {
  try {
    let accounts = await getAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", mw.checkAccountId, async (req, res, next) => {
  try {
    let accounts = req.currentAccount;
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  mw.checkAccountPayload,
  mw.checkAccountNameUnique,
  async (req, res, next) => {
    try {
      let { name, budget } = req.body;
      let inserted = await create({ name: name, budget: budget });
      res.status(201).json(inserted);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  mw.checkAccountId,
  mw.checkAccountNameUnique,
  mw.checkAccountPayload,
  async (req, res, next) => {
    try {
      let { name, budget } = req.body;
      let update = await updateById(req.params.id, {
        name: name,
        budget: budget,
      });
      res.status(200).json(update);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", mw.checkAccountId, async (req, res, next) => {
  try {
    await deleteById(req.params.id);
    res.json({ message: "Kayıt silindi" });
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    message: err.message,
    customMessage: "Hata oluştu",
  });
});

module.exports = router;
