const express = require('express');
const alunoModel = require('./aluno.model');
import {Request, Response} from 'express';
const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoModel.store(req.body);
  return res.status(200).json({ data });
});

module.exports = router;
