import Joi from 'joi';
import Controller from './Controller.js';

const schema = Joi.object({
	name: Joi.string().required(),
	birthDate: Joi.date().required(),
});

class PatientController extends Controller{
	constructor() {
		super('patient', schema);
	}
}

export default PatientController;