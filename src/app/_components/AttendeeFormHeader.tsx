import React from "react";

const AttendeeFormHeader = ({ formProgress }: AttendeeFormHeaderProps) => {
	return (
		<div className="text-white flex flex-col w-full gap-3">
			<section className={`flex ${formProgress === 33 && "max-md:flex-col"} md:justify-between gap-3 md:items-center`}>
				<h3 className="text-[24px] leading-[24px] lg:text-[2rem] lg:leading-8 tracking-normal w-full">
					{formProgress === 33
						? "Ticket Selection"
						: formProgress === 66
						? "Attendee Details"
						: formProgress === 100
						? "Ready"
						: "Ticket Selection"}
				</h3>
				<p className="text-nowrap  font-regular">
					Step {formProgress === 33 ? 1 : formProgress === 66 ? 2 : formProgress === 100 ? 3 : 1}/3
				</p>
			</section>
			<section className="w-full rounded-[5px] bg-[#0E464F] h-1">
				<div style={{ width: `${formProgress}%` }} className={` bg-[#24A0B5] h-1 rounded-[5px]`}></div>
			</section>
		</div>
	);
};

export default AttendeeFormHeader;
