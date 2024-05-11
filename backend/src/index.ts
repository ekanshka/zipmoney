import express from 'express'
import mainRouter from './routers/mainRouter';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());

// http://localhost:3000/api/v1/
app.use('/api/v1', mainRouter); 

app.listen(3000, () => {
    console.log('server running on port 3000')
})