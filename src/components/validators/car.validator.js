import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/[a-zA-ZА-я]{1,20}$/).required().messages({
        'string.pattern.base': 'Кількість символів від 1 до 20'
    }),
    price: Joi.number().min(1).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {
    carValidator
};