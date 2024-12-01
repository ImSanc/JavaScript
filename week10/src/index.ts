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

interface UpdateParams {
    firstName : string,
    lastName : string
}

async function updateUser(username : string , {firstName , lastName} : UpdateParams)  {
    
    const result = await User.update(
            { data : { firstName
                ,lastName },
            where :{
                username
            },
            select: {
                firstName : true,
                lastName : true
            }});

}



updateUser('ImSanc',{ firstName: 'tsshe', lastName : 'Flash'})
//insertUser("ImSanc", "sanchit@17","sanchit" , "mishra");