import prisma from '../prismaClient.js';

class Controller {

	constructor (entity) {
		this.entity = entity;
		this.prismaEntity = prisma[entity];
	}
	
	async index (_request,response)  {
		const items = await this.prismaEntity.findMany();
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
		const newItem = await this.prismaEntity.create({data: body});
		response.json({'message': `${this.entity.toUpperCase()} created`, newItem});
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