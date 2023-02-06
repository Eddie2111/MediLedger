import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const CreateLedger = async (data)=>{
    await prisma.Chains.create({
        data: {
            id: data.id,
            name: data.name,
            creatorEmail: data.email,
            serialNo: data.serialNo,
            hash: data.hash,
        },
    })
}
const UpdateLedger = async (data)=>{
    await prisma.Chains.update({
        where: {
            serialNo: data.serialNo,
        },
        data: {
            hash: data.hash,
        },
    })
}
const FindOneLedger = async (data)=>{
    const ledger = await prisma.Chains.findUnique({
        where: {
            serialNo: data.serialNo,
        },
    })
    return ledger;
}
const FindSelectiveAll = async (data)=>{
    const ledger = await prisma.Chains.findMany({
        where: {
            email: data.email,
        },
    })
    return ledger;
}
module.exports = { CreateLedger, UpdateLedger, FindOneLedger, FindSelectiveAll }
