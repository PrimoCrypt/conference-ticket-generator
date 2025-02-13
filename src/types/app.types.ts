interface AttendeeFormHeaderProps {
	formProgress: number;
}

interface AttendeeFormProps {
	formProgress: number;
	setFormProgress: (formProgress: number) => void;
}

interface AttendeeDataProps {
	attendeeImage: string;
	attendeeName: string;
	attendeeEmail: string;
	attendeeSpecialRequest: string
	ticketType: "free" | "vip" | "vvip";
	ticketQuantity: string;
}