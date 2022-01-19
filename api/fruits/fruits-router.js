const Fruit = require('./fruits-model');
const router = require('express').Router();

router.get('/', (req, res) => {
  Fruit.getAll()
    .then(fruits => {
      res.json(fruits);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruits' });
    });
});

router.get('/:id', (req, res) => {
  Fruit.getById(req.params.id)
    .then(fruit => {
      if (fruit) {
        res.json(fruit);
      } else {
        res.status(404).json({ message: 'Failed to retrieve fruit' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve fruit' });
    });
});
// Err Test:  http post  :9000/api/fruits name=foo
// Err Test:  // Err Test:  http post  :9000/api/fruits name=foo
// TEST : http post  :9000/api/fruits name=peer avgWeightOz:=2.4
// TEST:  http post  :9000/api/fruits name=apple avgWeightOz=2.4 color=pink
// TEST:  http post  :9000/api/fruits name=grapes  avgWeightOz=2.4 color=pink delicious=1
router.post('/', (req, res) => {
  Fruit.create(req.body)
    .then(newFruitEntry => {
      res.status(201).json(newFruitEntry);
    })
    .catch(err => {
      // res.status(500).json({ message: 'Failed to create fruit' });
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
