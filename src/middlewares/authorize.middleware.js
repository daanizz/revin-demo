import jwt from "jsonwebtoken";

export const isAdmin=(req,res,next)=>{
    try {
        const user=req.user;

        if(user.role!=="admin"){
            return res.status(403).json({success:false,message:"admin access required!"})
        }
        console.log("authorized");
        next();

    } catch (error) {
        return res.status(500).json({success:false,message:"server error"});
    }
}