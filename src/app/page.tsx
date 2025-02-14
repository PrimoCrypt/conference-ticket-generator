"use client";
import React, { useEffect, useState } from "react";
import AttendeeFormHeader from "./_components/AttendeeFormHeader";
import AttendeeForm from "./_components/AttendeeForm";

const Page = () => {
	const [formProgress, setFormProgress] = useState<number>(33);
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		setLoading(true);
		const savedProgress: number = JSON.parse(localStorage.getItem("formProgress") || "{}");
		if (savedProgress) {
			setFormProgress(savedProgress);
		}
		const timer = setTimeout(() => {
			setLoading(false);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center fixed bg-none top-0 h-screen min-h-[70vh] ">
				<div className="flex space-x-2 animate-bounce">
					<div className="w-8 h-8 bg-white rounded-full"></div>
					<div className="w-8 h-8 bg-[#0e464f] rounded-full"></div>
					<div className="w-8 h-8 bg-[#0e464f] rounded-full"></div>
				</div>
			</div>
		);
	}
	return (
		<div className=" w-full flex flex-col items-center">
			<div
				className={`border border-solid rounded-[3rem] border-primary bg-[#041E23]  ${
					formProgress === 33 ? "py-6" : "py-8"
				} ${formProgress === 100 && "mt-10"} p-6  lg:p-12 flex flex-col gap-8   w-full max-w-[700px] `}>
				<AttendeeFormHeader formProgress={formProgress} />
				<AttendeeForm setFormProgress={setFormProgress} formProgress={formProgress} />
			</div>
		</div>
	);
};

export default Page;
