"use client";
import React, { useState } from "react";
import AttendeeFormHeader from "./_components/AttendeeFormHeader";
import AttendeeForm from "./_components/AttendeeForm";

const Page = () => {
	const [formProgress, setFormProgress] = useState<number>(33);
	return (
		<div className=" w-full flex flex-col items-center"><div className={`border border-solid rounded-[3rem] border-primary bg-[#041E23]  ${formProgress===33 ? "py-6": "py-8"} ${formProgress===100 && "mt-10"} p-6  lg:p-12 flex flex-col gap-8   w-full max-w-[700px] `}>
		<AttendeeFormHeader formProgress={formProgress} />
		<AttendeeForm setFormProgress={setFormProgress} formProgress={formProgress} />
	</div></div>
	);
};

export default Page;
