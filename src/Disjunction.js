/**Constructor de Disjunction. Toma como parametros la parte izquierda y derecha de la disjuncion */
var Disjunction = exports.Disjunction = function Disjunction(left,right){
	if (!left || !right){
		throw new Error("Disjunction: invalid operands!");
}
	this.left=left;
	this.right=right;
}
/** Metodo que devuele la evalucion de la parte izquiera y derecha mediante la disjuncion.*/
Disjunction.prototype.evaluation=function evaluation(assigments){
	var l=this.left.evaluation(assigments);
	var r=this.right.evaluation(assigments);
	return(l||r);
}
/** Retorna una Disjuncion cuyos operandos son objetos proposition.*/
Disjunction.generate = function generate( random, min, max){
	return new Disjunction(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};