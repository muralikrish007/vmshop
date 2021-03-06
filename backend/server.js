import express from 'express';
import data from './data';
import dotenv  from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

// const app = express();
app.use(bodyParser.json());

app.use("/api/users",userRoute);

app.get("/api/products/:id", (req, res) => {
 const productId = req.params.id;
 const product =(data.products.find(x=>x._id === productId));
 if(product)
    res.send(product);
 else
    res.status().send({msg:"Product not found."})
});
app.get("/api/products",(req,res) => {
    res.send(data.products);
});

app.listen(5002, () => { console.log("Server started at http://localhost:5002") });