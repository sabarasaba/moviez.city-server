import express from 'express';
import path from 'path';

let router = express.Router();

router.get('/', (req, res) => {
  res.json({
    greeting: 'hello'
  });
});

export default router;
