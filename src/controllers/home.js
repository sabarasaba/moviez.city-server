import express from 'express';
import path from 'path';

let router = express.Router();

router.get('/', (req, res) => {
  console.log('woop');
});

export default router;
