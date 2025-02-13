"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TicketLayout from "@/assets/ticket-layout.svg";
import ProfilePicPlaceholder from "@/assets/profile-picture-placeholder.svg";
import BarcodeGeneratorComponent from "react-barcode";
import { Button } from "@/components/ui/button";

interface SelectTicketProps {
	setFormProgress: (formProgress: number) => void;
}

const Ticket = ({ setFormProgress }: SelectTicketProps) => {
	const [attendeeData, setAttendeeData] = useState<AttendeeDataProps>({} as AttendeeDataProps);

	useEffect(() => {
		const savedData: AttendeeDataProps = JSON.parse(localStorage.getItem("attendeeData") || "{}");
		setAttendeeData(savedData);
	}, []);

	const handleBookAnotherTicket = () => {
		localStorage.removeItem("attendeeData");
		setFormProgress(33);
	};

	return (
		<div className="w-full  flex flex-col gap-8">
			<section className="flex flex-col gap-3 md:gap-4 items-center">
				<h2 className="md:font-alatsi font-regular max-md:font-bold  text-2xl leading-[33.6px] md:text-[2rem] md:leading-[40.96px] text-center">
					Your Ticket is Booked!
				</h2>
				<p className="max-md:hidden font-regular  text-center">
					Check your email for a copy or you can <span className="font-bold">download</span>
				</p>
				<p className="md:hidden font-regular max-w-[287px] text-center">
					You can download or Check your email for a copy
				</p>
			</section>
			<div className="w-full flex flex-col gap-6">
				<section className="p-8 px-[21px]  flex flex-col items-center">
					<div className="relative w-full max-w-[300px] h-[600px]">
						<Image src={TicketLayout || "/placeholder.svg"} alt="ticket layout"  objectFit="cover"  />
						<div className=" absolute h-[505px] min-[400px]:h-[600px] inset-0 flex items-center justify-center ">
							<div className="absolute top-5 p-3  flex flex-col gap-2 min-[450px]:gap-5  border-[#24A0B5] border border-solid box-border rounded-2xl w-[220px] min-[380px]:w-[260px] h-[360px] min-[400px]:h-[426px]">
								<section className="text-center flex flex-col items-center">
									<h4 className="text-[24px] min-[300px]:text-[34px] leading-tight min-[300px]:leading-[34px] font-roadrage">Techember Fest &quot;25</h4>
									<div className="p-1 text-[10px] leading-[15px] [&_p]:font-regular flex flex-col gap-1 box-border">
										<p>📍 04 Rumens road, Ikoyi, Lagos</p>
										<p>📅 March 15, 2025 | 7:00 PM</p>
									</div>
								</section>
								<section className="flex flex-col items-center">
									{attendeeData.attendeeImage ? (
										<Image
											src={attendeeData.attendeeImage}
											width={1000}
											height={1000}
											alt="Profile"
											className=" object-cover rounded-[2rem] h-[140px] w-[140px] border-4 border-solid border-[#24A0B580]"
										/>
									) : (
										<Image
											src={ProfilePicPlaceholder}
											width={140}
											height={140}
											alt="Empty Profile Picture"
											className=" object-contain rounded-[2rem] h-[120px] w-[120px] min-[380px]:h-[140px] min-[380px]:w-[140px] border-4 border-solid border-[#24A0B580]"
										/>
									)}
								</section>
								<section className="font-regular box-border bg-[#08343C] border-[#133D44] w-full p-1 rounded-lg border border-solid">
									<div className="grid grid-cols-2 gap-px grid-row-2 bg-[#12464E]">
										<div className="bg-[#08343C] flex flex-col min-[380px]:gap-1 w-full p-1">
											<p className="text-white opacity-[0.33] text-[10px] leading-[15px] w-fit h-fit">
												Enter your name
											</p>
											<div className="relative group">
												<p className="truncate text-xs leading-[18px] font-bold">{attendeeData?.attendeeName}</p>
												<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 -bottom-8 bg-[#08343C] border border-[#12464E] rounded p-1 text-xs z-50 whitespace-normal">
													{attendeeData?.attendeeName}
												</div>
											</div>{" "}
										</div>
										<div className="bg-[#08343C] pl-3 flex flex-col min-[380px]:gap-1 w-full p-1">
											<p className=" text-nowrap text-white opacity-[0.33] text-[10px] leading-[15px] w-fit h-fit">
												Enter your email*
											</p>
											<div className="relative group">
												<p className="truncate text-xs leading-[18px] font-bold">{attendeeData?.attendeeEmail}</p>
												<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 -bottom-8 bg-[#08343C] border border-[#12464E] rounded p-1 text-xs z-50 whitespace-normal">
													{attendeeData?.attendeeEmail}
												</div>
											</div>
										</div>
										<div className="bg-[#08343C] flex flex-col min-[380px]:gap-1 w-full p-1">
											<p className="text-white opacity-[0.33] text-[10px] leading-[15px] w-fit h-fit">Ticket Type:</p>
											<p className="truncate text-[10px] leading-[10px]"> {attendeeData?.ticketType}</p>
										</div>
										<div className="bg-[#08343C] pl-3 flex flex-col min-[380px]:gap-1 w-full p-1">
											<p className="text-white opacity-[0.33] text-[10px] leading-[15px] w-fit h-fit">Ticket for:</p>
											<p className="truncate text-[10px] leading-[10px]"> {attendeeData?.ticketQuantity}</p>
										</div>
									</div>
									<div className="bg-[#08343C] box-border border-t border-solid border-t-[#12464E] flex flex-col min-[380px]:gap-1 w-full p-1 min-[380px]:p-2">
										<p className="text-white opacity-[0.33] text-[10px] leading-[15px] w-fit h-fit">Special request</p>
										<div className="relative group">
											<p className="text-[10px] leading-[15px] line-clamp-2">{attendeeData?.attendeeSpecialRequest}</p>
											<div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 -bottom-8 bg-[#08343C] border border-[#12464E] rounded p-1 text-xs z-50 whitespace-normal">
												{attendeeData?.attendeeSpecialRequest}
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className="absolute bottom-6 flex flex-col gap-5 box-border rounded-2xl">
								<div className="w-[236px] min-[420px]:h-[80px] max-[390px]:h-[80px] max-[415px]:h-[100px] max-sm:h-[100px] md:h-[68px]">
									<BarcodeGeneratorComponent
										format="EAN8"
										width={3.2}
										height={48}
										fontSize={12}
										background="#00000000"
										lineColor="#fff"
										value="12345670"></BarcodeGeneratorComponent>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="flex max-md:flex-col-reverse gap-6">
					<Button
						onClick={() => handleBookAnotherTicket()}
						className="bg-transparent border hover:bg-[#24A0B5]/10 border-solid border-[#24A0B5] rounded-lg px-6 py-3 w-full h-fit font-jejumyeongjo text-[#24A0B5]">
						Book Another Ticket
					</Button>
					<Button className="bg-[#24A0B5] text-white rounded-lg px-6 py-3 w-full h-fit font-jejumyeongjo">
						Download Ticket
					</Button>
				</section>
			</div>
		</div>
	);
};

export default Ticket;
