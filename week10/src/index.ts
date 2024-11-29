import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const User = prisma.user;


async function insertUser(username: string , password : string, firstName : string , lastName : string) {
    const result = await User.create( {data : { username 
        ,password
        ,firstName
        ,lastName}});

    console.log(result);
}

insertUser("ImSanc", "sanchit@17","sanchit" , "mishra");