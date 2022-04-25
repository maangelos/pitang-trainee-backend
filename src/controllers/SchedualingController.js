import Joi from 'joi';
import Controller from './Controller.js';
import prisma from '@prisma/client';

const { VaccinationStatus } = prisma;

const schema = Joi.object({
	date: Joi.date().required(),
	status: Joi.string().required().valid(
		...Object.values(VaccinationStatus)
	),
	patient: Joi.object({
		connect: Joi.object({
			id: Joi.string().required()
		})
	}),
});
class ScheadulingController extends Controller{
	constructor() {
		super({
			entity: 'Schedualing', 
			validationSchema: schema, 
			prismaOptions: {
				include: { 
					patient: true
				}
			}
		});
	}

	store(request,response){

		const patientId = request.body.patientId;

		delete request.body.patientId;

		this.prismaClient.schedualing.findMany({include: {patient: true}});

		request.body = {
			...request.body,
			patient: {
				connect: {
					id: patientId
				}
			}
		};

		super.store(request,response);
	}
}

export default ScheadulingController;