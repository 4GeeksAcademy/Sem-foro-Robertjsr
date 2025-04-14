import React from "react";
import "./Semaforo.css";


//create your first component
const Semaforo = () => {
	return (
		<>
		<div className="trafficLight">
			<div className="container">
				<div className="redLight"></div>
		  		<div className="yellowLight"></div>
		  		<div className="greenLight"></div>
			</div>
		</div>
		<div class="boton-container">
   		 	<button class="boton btn btn-primary">Botón 1</button>
  		  	<button class="botonPurpura btn btn-secondary">Botón 2</button>
		</div>
		</>
	);
};

export default Semaforo;