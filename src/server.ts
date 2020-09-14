import express from 'express';
import appointmentsRouter from './appointments.routes'

const app = express();

app.use(express.json())
app.use('/appointments',appointmentsRouter);

app.listen(3333,()=>{
    console.log('ok');
})