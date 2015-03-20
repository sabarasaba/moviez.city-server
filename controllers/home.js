import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  res.json({msg: 'all good from here!'});
});

export default router;
