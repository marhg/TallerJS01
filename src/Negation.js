/**Constructor de Negation.*/
exports.Negation = function Negation(operand){	
	if( !operand ){
		throw new Error("Negation: invalid operand!");
	}
	this.operand = operand;	
};

/** Metodo generate para generar casos de prueba aleatorios
	Retorna un objeto Negation con operand un objeto Proposition aleatorio*/
Negation.generate( random, min, max ){
	return new Negation(Proposition.generate(random, min - 1, max - 1) );
};

/**Retorna un booleano con el resultado de aplicar el operador de negacion a la evaluacion de operand*/
exports.Negation.prototype.evaluation = function( assigments){
	return !(this.operand.evaluation(assigments));
};
