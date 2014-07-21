/** Constructor de Variable. Toma como parametro el identificador de la variable*/
exports.Variable = function Variable(id){
	this.id = id;
};

/** Metodo que toma por parametro un objeto con las asignaciones de las variables y retorna el valor booleano de la propia variable */
exports.Variable.prototype.evaluation = function evaluation(assignments) {
	if (!assignments  || ! assignments.hasOwnProperty(this.id))
	{
		throw new Error("Variable no existe");
	};
	return !! assignments[this.id];
};