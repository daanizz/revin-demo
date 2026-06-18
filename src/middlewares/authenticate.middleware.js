import jwt from "jsonwebtoken";

export const authenticate=(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];
        console.log(token)

        if(!token){
            return res.status(401).json({message:"no token provided"});
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user=decoded;
        console.log("authenticateed");
        next();
    } catch (error) {
        return res.status(401).json({success:false,message:"Invalid token"})
    }
} 