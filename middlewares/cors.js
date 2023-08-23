import cors from 'cors';

const corsOptions = {
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://localhost:3000',
        'http://localhost:4200'
      ];
  
      if (ACCEPTED_ORIGINS.includes(origin))
        return callback(null, true);
  
      if (!origin)
        return callback(null, true);
      
      return callback(new Error('Not allowed by CORS'));
    }
};

export default cors(corsOptions);