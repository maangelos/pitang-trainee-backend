import prisma from '@prisma/client';

const prismaClient = new prisma.PrismaClient();

(async () => {
	await prismaClient.patient.create({
		data: {'name' : 'teste2', birthDate: new Date()}
	});
})();

export default prismaClient;