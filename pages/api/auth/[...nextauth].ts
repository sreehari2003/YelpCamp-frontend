import NextAuth from "next-auth";
import GooglePrvoider from "next-auth/providers/google"

export default NextAuth({
    providers:[
        GooglePrvoider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ]
})