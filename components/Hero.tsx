"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import filter from "../assets/filter.svg";
import Image from "next/image";
import { IoClose, IoSearch } from "react-icons/io5";
import Filter from "./Filter";
import { debounce } from "lodash";

interface heroProps {
	inputRef: RefObject<any>;
	searchData: string;
	setSearchData: (arg: any) => any;
	closeResults: () => any;
	setCategory: (arg: any) => any;
	setIndustry: (arg: any) => any;
	setDifficulty: (arg: any) => any;
	toggle: boolean;
	setToggle: (arg: any) => any;
	handleFocus: () => any;
	categoryFilter: any;
	industryFilter: any;
	difficultyFilter: any;
}

const Hero = (props: heroProps) => {
	const [contentWidth, setContentWidth] = useState<number>(0);
	const [viewportWidth, setViewportWidth] = useState<number>(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (contentRef.current) {
			setContentWidth(contentRef.current.scrollWidth);
		}
		setViewportWidth(window.innerWidth);

		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		viewportWidth < 1000 ? setIsOpen(false) : setIsOpen(true);
	}, [viewportWidth]);

	return (
		<div className="max-w-[1440px] mx-auto pt-[112px] sm:pt-[100px]">
			<div className="flex justify-center items-center text-center text-[#393A32] flex-col">
				<h1 className="text-2xl sm:text-[56px] font-bold sm:leading-[67.2px] leading-[33.6px]">
					Explore Design Tasks to <br className="flex sm:hidden" />
					<br className="sm:flex hidden" /> Spark Your Creativity
				</h1>
				<p className="sm:mt-6 mt-2 sm:text-lg text-base">
					Lorem ipsum dolor sit amet, consectetur{" "}
					<br className="flex sm:hidden" /> adipiscing elit.
				</p>
			</div>

			<div className={` ${isOpen && "flex"} md:px-16 px-4 md:pb-4`}>
				<div
					className={` ${
						isOpen ? "items-end " : "items-center"
					} flex justify-between w-[100%] my-8 `}
				>
					<div className="w-[85%] h-[40px] flex items-center border-[1px] border-[#F4F4F4] rounded-[8px] px-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)] ">
						<input
							className=" flex-1 h-[100%] outline-none  "
							type="text"
							ref={props.inputRef}
							onFocus={props.handleFocus}
							value={props.searchData}
							onChange={(e) => props.setSearchData(e?.target?.value)}
						/>
						<div>
							{isLoading ? (
								<span className="loader"></span>
							) : (
								<>
									{!props.searchData.length ? (
										<IoSearch className="text-[25px]" />
									) : (
										<IoClose
											className="text-[20px] cursor-pointer"
											onClick={props.closeResults}
										/>
									)}
								</>
							)}
						</div>
					</div>

					{!isOpen && (
						<div
							onClick={() => props.setToggle((prev: any) => !prev)}
							className="cursor-pointer w-[12%] h-[40px]  border-[1px] border-[#F4F4F4] rounded-[8px]  shadow-[0_1px_2px_0px_rgba(0,0,0,0.06),0_1px_3px_0px_rgba(0,0,0,0.10)] flex justify-center items-center"
						>
							<div>
								<Image src={filter} width={24} height={24} alt="filter" />
							</div>
						</div>
					)}

					{isOpen && (
						<Filter
							categoryFilter={props.categoryFilter}
							industryFilter={props.industryFilter}
							difficultyFilter={props.difficultyFilter}
							setCategory={props.setCategory}
							setIndustry={props.setIndustry}
							setDifficulty={props.setDifficulty}
							type={"forDesktop"}
						/>
					)}
				</div>

				{props.toggle && (
					<Filter
						categoryFilter={props.categoryFilter}
						industryFilter={props.industryFilter}
						difficultyFilter={props.difficultyFilter}
						setCategory={props.setCategory}
						setIndustry={props.setIndustry}
						setDifficulty={props.setDifficulty}
						type={"forMobile"}
					/>
				)}
			</div>
		</div>
	);
};

export default Hero;
