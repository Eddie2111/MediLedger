import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {  
    // Configure one or more authentication providers  
    providers: [   
         GithubProvider({      
            clientId:"h89syhd89yr3289ew",      
            clientSecret: "e9hwjf89wehj89ewjh",    
        }),    // ...add more providers here  
    ],
}
export default NextAuth(authOptions)