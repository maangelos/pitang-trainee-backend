import prisma from '../prismaClient.js';

class Controller {
	
	async index (_request,response)  {
		const patients = await prisma.patient.findMany();
		response.json({patients});
	}
	
	async getOne(request,response) {
		const {id} = request.params;
		
		const patient = await prisma.patient.findUnique({
			where: {id}
		});
		response.json({'patient': patient});
	}
	
	async store(request,response) {
		const {body} = request;
		const newPatient = await prisma.patient.create({data: body});
		response.json({'message': 'patient created', newPatient});
	}

	async update (request,response) {
		const {id} = request.params;
		const {body} = request;

		const patient = await prisma.patient.update({
			where: {id},
			data: body,
		});
		response.json({'message': 'patient updated', patient});
	}

}

export default Controller;