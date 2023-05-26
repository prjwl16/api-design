import express, {Request, Response} from "express";
import "dotenv/config"
const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res:Response):void=>{
    res.send({
        message:"Ohhho its working...!"
    });
});

app.listen(port,():void=>{
    console.log(`Here:-> http://localhost:${port}`);
});