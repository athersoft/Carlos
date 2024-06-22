import express from 'express';

import userRoutes from './user/routes';
import expRoutes from './exploration/routes';
import victimRoutes from './victima/routes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/exploration', expRoutes);
router.use('/victima', victimRoutes);

router.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found.',
    message: 'The requested route does not exist or is not currently available.',
  });
});

export default router;
