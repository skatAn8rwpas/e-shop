const FAKE_DB = {
  items: [
    { id: 1, name: "product 1", description: "product description" },
    { id: 2, name: "product 2", description: "product description" },
    { id: 3, name: "product 3", description: "product description" },
    { id: 4, name: "product 4", description: "product description" },
  ]
}

module.exports = (req, res) => {
  res.status(200).json(FAKE_DB)
};    