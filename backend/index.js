const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(express.json({limit:"10mb"}));
app.use(cors());
const PORT=process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('');
}
);
app.post('/register',(req,res)=>{
    console.log(req.body);
}
);





app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});