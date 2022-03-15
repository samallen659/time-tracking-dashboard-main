import React from "react";

function DetailCard(props) {
	return (
		<div className={props.class}>
			<h1>{props.title}</h1>
		</div>
	);
}

export default DetailCard;
