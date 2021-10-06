const mongoose=require('mongoose');
require('colors');
const connectDb= async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlparser:true,
           // useCreateIndex:true
            
        })
        console.log(`Mongodb Connected ${conn.connection.host}`.underline.yellow
        
        );
    } catch (error){
        console.error(`Error:${error.message}`.red)
        process.exit(1);

    }
};
module.exports =connectDb;