"use client";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select"
import React, { useEffect, useState } from "react";

interface SelectTicketProps {
	setFormProgress: (formProgress: number) => void;
}
type TicketQuantityProps = "1" | "2" | "3" |"4" | "5"
const SelectTicket = ({ setFormProgress }: SelectTicketProps) => {
	const [ticketType, setTicketType] = useState<"free" | "vip" | "vvip">("free");
	const [ticketQuantity, setTicketQuantity] = useState<TicketQuantityProps>("1");
	useEffect(() => {
			const savedData: AttendeeDataProps = JSON.parse(localStorage.getItem("attendeeData") || "{}");

			if (savedData) {
				setTicketType(savedData.ticketType || "");
				setTicketQuantity(savedData.ticketQuantity as TicketQuantityProps ||  "1");
			}
		}, []);
		const handleNextStep = () => {
			const existingData: AttendeeDataProps = JSON.parse(localStorage.getItem("attendeeData") || "{}");
			const updatedData: AttendeeDataProps = {
				...existingData,
				ticketType,
				ticketQuantity,
			};
			
			localStorage.setItem("attendeeData", JSON.stringify(updatedData));
			setFormProgress(66);
		};
	return (
		<div className="p-6 flex flex-col gap-8 box-border rounded-[2rem] w-full border-[#0E464F] border border-solid bg-[#08252b]">
			<section className="flex flex-col max-md:justify-between  items-center gap-2 max-md:py-4 p-6  bg-[#0A0C11]/10 backdrop-blur-[14px] rounded-3xl border-2 border-t-0 border-solid border-[#07373F]">
				<div className="absolute inset-0 bg-gradient-to-br from-[#24A0B533] via-[#24A0B5]/[0.01] to-[#24A0B500] rounded-3xl " />
				<div className="flex flex-col gap-2 ">
					<h5 className="text-center text-[48px]  leading-[48px]  md:text-[62px] md:leading-[62px] font-roadrage">Techember Fest &quot;25</h5>
					<p className="max-w-[340px] max-sm:max-w-[240px] text-center w-full text-sm max-md:leading-[21px] md:text-base font-regular">
						Join us for an unforgettable experience at [Event Name]! Secure your spot now.
					</p>
				</div>
				<div className="flex max-md:flex-col gap-1 md:gap-4 font-regular">
					<span>📍 [Event Location]</span>
					<span className="max-md:hidden">| |</span>
					<span>March 15, 2025 | 7:00 PM</span>
				</div>
			</section>
			<div className="w-full h-1 bg-[#07373F]"></div>
			<section className="flex flex-col gap-2">
				<p className="w-full font-regular">Select Ticket Type:</p>
				<div className="flex max-md:flex-col w-full text-nowrap justify-between gap-6 md:gap-2 p-4 rounded-3xl border border-solid border-[#07373F] ">
					<div
						onClick={() => setTicketType("free")}
						className={` p-3 flex flex-col gap-3 md:max-w-[158px] w-full box-border  ${
							ticketType === "free" && "bg-[#12464E]"
						} hover:bg-[#2C545B] rounded-xl font-regular border border-solid border-[#197686]`}>
						<p className="font-regular font-semibold text-2xl leading-[26.4px]">Free</p>
						<div>
							<p>REGULAR ACCESS</p>
							<p className="text-sm leading-[21px]">20/52</p>
						</div>
					</div>
					<div
						onClick={() => setTicketType("vip")}
						className={` p-3 flex flex-col gap-3 md:max-w-[158px] w-full box-border  ${
							ticketType === "vip" && "bg-[#12464E]"
						} hover:bg-[#2C545B] rounded-xl font-regular border border-solid border-[#197686]`}>
						<p className="font-regular font-semibold text-2xl leading-[26.4px]">$150</p>
						<div>
							<p>VIP ACCESS</p>
							<p className="text-sm leading-[21px]">20/52</p>
						</div>
					</div>
					<div
						onClick={() => setTicketType("vvip")}
						className={` p-3 flex flex-col gap-3 md:max-w-[158px] w-full box-border  ${
							ticketType === "vvip" && "bg-[#12464E]"
						} hover:bg-[#2C545B] rounded-xl font-regular border border-solid border-[#197686]`}>
						<p className="font-regular font-semibold text-2xl leading-[26.4px]">$150</p>
						<div>
							<p>VVIP ACCESS</p>
							<p className="text-sm leading-[21px]">20/52</p>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-2 font-regular">
				<p className="w-full font-regular">Number of Tickets</p>
				<Select value={ticketQuantity} defaultValue="1" onValueChange={(e: TicketQuantityProps)=>setTicketQuantity(e)}>
					<SelectTrigger className="w-full h-fit p-3 bg-none rounded-xl border border-solid border-[#07373F]">
						<SelectValue className="h-6" placeholder="Select quantity" />
					</SelectTrigger>
					<SelectPrimitive.Portal>
                    <SelectContent className="bg-[#08252b] rounded-2xl text-white border-[#07373F] border border-solid">
						<SelectItem value="1">1</SelectItem> 
						<SelectItem value="2">2</SelectItem>
						<SelectItem value="3">3</SelectItem>
						<SelectItem value="4">4</SelectItem>
						<SelectItem value="5">5</SelectItem>
					</SelectContent>
                    </SelectPrimitive.Portal>
				</Select>
			</section>
            <section className="flex max-md:flex-col-reverse gap-6">
                <Button className="bg-transparent hover:bg-[#24A0B5]/10 border border-solid border-[#24A0B5] rounded-lg px-6 py-3 w-full h-fit font-jejumyeongjo text-[#24A0B5]">Cancel</Button>
                <Button onClick={handleNextStep} className="bg-[#24A0B5] text-white rounded-lg px-6 py-3 w-full h-fit font-jejumyeongjo">Next</Button>
            </section>
		</div>
	);
};

export default SelectTicket;
