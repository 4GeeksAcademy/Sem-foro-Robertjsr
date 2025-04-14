import React, { useState } from "react";
import "./Semaforo.css";


//create your first component
const Semaforo = () => {
	// configuramos el estado de los colores
	const lightOn = 'lightOn';
	const [redLight, setRedLight] = useState('');
	const [yellowLight, setYellowLight] = useState('');
	const [greenLight, setGreenLight] = useState('');
	const [purpleLight, setPurpleLight] = useState('');
	const [newLight, setActive] = useState('false');

	// configuramos el estado de los colores
	function activeRed() {
		setRedLight(lightOn);
		setYellowLight('');
		setGreenLight('');
		setPurpleLight('');
	};
	function activeYellow() {
		setRedLight('');
		setYellowLight(lightOn);
		setGreenLight('');
		setPurpleLight('');
	};
	function activeGreen() {
		setRedLight('');
		setYellowLight('');
		setGreenLight(lightOn);
		setPurpleLight('');
	};
	function activePurple() {
		setRedLight('');
		setYellowLight('');
		setGreenLight('');
		setPurpleLight(lightOn);
	};

	// configuramos la funcion de cambio de luces
	function cambio() {
		if(newLight) {
			if(redLight === lightOn) {activeYellow()}
			else if(yellowLight === lightOn) {activeGreen()}
			else if(greenLight === lightOn) {activePurple()}
			else {activeRed()}
		} else {
			if(redLight === lightOn) {activeYellow()}
			else if(yellowLight === lightOn) {activeGreen()}
			else {activeRed()}
		}
		
}

function createLight() {
	setActive(!newLight)
}


	return (
		<>
		<div className="trafficLight">
			<div className="container">
					<div className={`redLight ${redLight}`} onClick={activeRed}></div>
					<div className={`yellowLight ${yellowLight}`} onClick={activeYellow}></div>
					<div className={`greenLight ${greenLight}`} onClick={activeGreen}></div>
					{newLight ? (
						<div onClick={activePurple} className={`purpleLight ${purpleLight}`}></div>
					) : (
						<div></div>
					)}
			</div>
		</div>
		<div className="boton-container">
   		 	<button onClick={cambio} className="boton btn btn-primary">Cambio</button>
  		  	<button onClick={createLight} className="botonPurpura btn btn-secondary">Magic Button</button>
		</div>
		</>
	);
};

export default Semaforo;