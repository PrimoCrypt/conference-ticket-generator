"use client"
import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";
import TicketIcon from "@/assets/hugeicons_ticket-01.svg";
import Logo from "@/assets/ticz.svg";
import Image from "next/image";
import { Button } from "./ui/button";

const NavBar = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="px-4 py-3 text-white rounded-xl lg:rounded-3xl box-border flex justify-between max-md:max-w-80 items-center bg-[#05252C66] border-[#197686] border border-solid backdrop-blur-xl w-full">
			<section className="flex items-center gap-2">
				<div className="bg-[#052F35] border-primary border border-solid rounded-xl box-border px-2 py-1.5">
					<Image src={TicketIcon} alt="TIcket Icon" width={24} height={24} />
				</div>
				<Image src={Logo} alt="Tickz Logo" width={43.79} height={22.62} />
			</section>
			<section className="max-lg:hidden flex items-center gap-4 p-0">
				<span className="p-2.5 text-lg leading-[18px] tracking-normal h-[34px] box-border">Events</span>
				<span className="p-2.5 text-lg leading-[18px] tracking-normal h-[34px] box-border">My Tickets</span>
				<span className="p-2.5 text-lg leading-[18px] tracking-normal h-[34px] box-border">About Project</span>
			</section>
			<Button 
        className="bg-white hover:bg-[#24A0B5] hover:text-[#d9d9d9] border-[#D5EA001A] rounded-xl px-4 md:px-6 py-3 md:py-4 leading-6 text-[#0A0C11] h-fit flex items-center text-sm md:text-base gap-2 box-border w-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        MY TICKETS {isHovered ? <GoArrowUpRight /> : <HiArrowLongRight />}
      </Button>
		</div>
	);
};

export default NavBar;
