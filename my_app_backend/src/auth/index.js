const express=require("express")
const {getToken,refreshTokenAge, verifyAuthorizationMiddleware}=require("./utils")

const authRouter=express.Router();

const   crypto=require("crypto")
const cookie=require("cookie")
const {passwordSecret,fakeUser}=require("./data")



authRouter.post("/login",(req,res) =>{
    const {login,password}=req.body


    const hash=crypto.createHmac("sha256",passwordSecret).update(password).digest("hex");
    const isVerifiedPassword=hash===fakeUser.passwordHash;

    if (login!==fakeUser.login || !isVerifiedPassword){
        return res.status(404).send('Login fail')
    }
    const {accessToken,refreshToken}=getToken(login)

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("refreshToken",refreshToken,{
        httpOnly:true,
            maxAge:refreshTokenAge
    })
    )

    res.send({accessToken})



} )
authRouter.get("/profile",verifyAuthorizationMiddleware,(req, res)=>{
    res.send("admin")
})

authRouter.get("/logout",(req,res)=>{
    res.setHeader(
        "Set-cookie",
        cookie.serialize("refreshToken","",{
            httpOnly:true,
            maxAge:0
        })

    )
    res.sendStatus(200)
})


module.exports=authRouter