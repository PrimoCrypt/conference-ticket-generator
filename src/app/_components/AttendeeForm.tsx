import React from "react";
import SelectTicket from "./SelectTicket";
import AttendeeDetails from "./AttendeeDetails";
import Ticket from "./Ticket";

const AttendeeForm = ({ formProgress, setFormProgress }: AttendeeFormProps) => {
	
	let form;
	switch (formProgress) {
		case 33:
			form = <SelectTicket setFormProgress={setFormProgress} />;
			break;
		case 66:
			form = <AttendeeDetails setFormProgress={setFormProgress} />;
			break;
		case 100:
			form = <Ticket setFormProgress={setFormProgress} />;
			break;
		default:
			form = <SelectTicket setFormProgress={setFormProgress} />;
	}
	return <>{form}</>;
};

export default AttendeeForm;
