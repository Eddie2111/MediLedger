import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const dateNow = ()=>{
    const data = new Date().toJSON().slice(0, 10) + " "
				+ new Date().toJSON().slice(11, 20);
    return data;
}


const CreateNewUser = async(data)=>{
    if(!data.userType === "CUSTOMER" && data.licenseNo === undefined){
        return null;
    }
    else{
        await prisma.Users.create({
            data: {
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            nid: data.nid,
            phoneNo: data.phoneNo,
            licenseNo: data.licenseNo,
            userType: data.userType,
            createdAt: dateNow(),
            updatedAt: dateNow(),
            },
        })
    }
}

const CreateNewEmployee = async(data)=>{
    await prisma.Employee.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            nid: data.nid,
            licenseNo: data.licenseNo,
            userType: data.userType,
            createdAt: dateNow(),
            updatedAt: dateNow(),
        },
    })
}

const FindOneUser = async(data)=>{
    const user = await prisma.Users.findUnique({
        where: {
            email: data.email,
            password: data.password,
        },
    })
    return user;
}

const FindOneEmployee = async(data)=>{
    const user = await prisma.Employee.findUnique({
        where: {
            email: data.email,
            password: data.password,
        },
    })
    return user;
}

module.exports = {
    CreateNewUser, CreateNewEmployee,
    FindOneUser, FindOneEmployee,
}