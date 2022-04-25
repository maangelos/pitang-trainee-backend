import prisma from '../prismaClient.js';

class Controller {

	constructor ({entity, validationSchema, prismaOptions}) {
		this.entity = entity;
		this.validationSchema = validationSchema;
		this.prismaOptions = prismaOptions;
		this.prismaClient = prisma;
		this.prismaEntity = prisma[entity];
	}
	
	async index (_request,response)  {
		const items = await this.prismaEntity.findMany(
			{include: this.prismaOptions?.include}
		);
		response.json({'items': items});
	}
	
	async getOne(request,response) {
		const {id} = request.params;
		
		const item = await this.prismaEntity.findUnique({
			where: {id}
		});
		response.json({'item': item});
	}
	
	async store(request,response) {

		const {body} = request;

		if (this.validationSchema){
			const validation = this.validationSchema.validate(body, {abortEarly: false});
			if(validation.error){
				return response.status(400).json(validation.error.details);
			}

		}
		
		try{
			const newItem = await this.prismaEntity.create({
				include: this.prismaOptions?.include,
				data: body
			});
			response.json({'message': `${this.entity.toUpperCase()} created`, newItem});
		}catch(error){
			console.error(error.message);
			response.status(400).json({'message': `Fail to insert ${this.entity}`});
		}
	}

	async update (request,response) {
		const {id} = request.params;
		const {body} = request;

		const item = await this.prismaEntity.update({
			where: {id},
			data: body,
		});
		response.json({'message': `${this.entity.toUpperCase()} updated`, item});
	}

}

export default Controller;