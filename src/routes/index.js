import express from 'express';
import { testEnvironmentVariable } from '../config';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

export default router;
