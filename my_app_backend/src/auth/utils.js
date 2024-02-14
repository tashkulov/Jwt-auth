const jwt=require("jsonwebtoken")
const signatureAccess="MySuP3R_z3kr3t_access"
const signatureRefresh="MySuP3R_z3kr3t_refresh"

const accessTokenAge=10;
const refreshTokenAge=60*60;

const verifyAuthorizationMiddleware=(req,res,next)=>{
    const token =req.headers.authorization ?req.headers.authorization.split(" ")[1] :"";

    if(!token){
        return res.sendStatus(401);
    }

    try {
        const decoded=jwt.verify(token,signatureAccess);
        req.user=decoded;
    }catch (err){
        return res.sendStatus(401)
    }
    return next()
}





const getToken=(login)=>({
    accessToken :jwt.sign({login},signatureAccess,{expiresIn: `${accessTokenAge}s`,}),
    refreshToken :jwt.sign({login},signatureRefresh,{expiresIn: `${refreshTokenAge}s`,}),
})
module.exports={
    getToken,
    refreshTokenAge,
    verifyAuthorizationMiddleware
}