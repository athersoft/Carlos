import express from 'express';

import userRoutes from './user/routes';
import docRoutes from './documento/routes';
import victimaRoutes from './victima/routes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/documents', docRoutes);
router.use('/victima', victimaRoutes);

router.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found.',
    message: 'The requested route does not exist or is not currently available.',
  });
});

export default router;
