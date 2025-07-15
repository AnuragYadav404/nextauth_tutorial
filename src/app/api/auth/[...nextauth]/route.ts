import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
    //AuthOptions is where we define our authentication providers settings:
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
            // what is authorize function? -> function gets called whenever credential form is submitted
            // when we return a user from authorize function, the object needs to have an id
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // Here we extract information req.body
                // what is credentials object here?
                // credentials object contains the credentials input from the form
                // don't need to extract creds from req.body
                const username = credentials?.username;
                const password = credentials?.password;

                if(username && password) {
                    // here we execute logic to check the credentials from DB
                    // if all the credentials are correct we return an "object"
                    // this object is used as data in JWT probably
                    const credentialsValid = true;
                    if(credentialsValid) {
                        // Any object returned will be saved in `user` property of the JWT
                        // username and id are not accessible in session data however
                        return {
                            username: "Some random username",
                            id: "some_random_string",
                            email: "some random email",

                        }
                    }else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null;
                    }
                    
                }else {
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    throw new Error("Invalid Credentials format")
                }

            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

// here NextAuth accepts AuthOptions
// What are AuthOptions
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }