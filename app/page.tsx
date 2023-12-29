"use client";
import Hero from "@/components/Hero";
import TasksPage from "@/components/Tasks";
import { useState, useEffect, useRef } from "react";
import getAllTasks from "@/lib/getAllTasks";
import getCategory from "@/lib/getCategory";
import getIndustry from "@/lib/getIndustry";
import getDifficulty from "@/lib/getDifficulty";
import Loader from "@/components/Loader";
import { Label } from "@headlessui/react/dist/components/label/label";

export default function Home() {
	const inputRef = useRef<HTMLDivElement>(null);
	const [unfilteredTasks, setUnfilteredTasks] = useState<Task[]>([]);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [searchData, setSearchData] = useState<string>("");

	// filter values
	const [category, setCategory] = useState<string>("");
	const [industry, setIndustry] = useState<string>("");
	const [difficulty, setDifficulty] = useState<string>("");
	const [toggle, setToggle] = useState<boolean>(false);

	// loader...
	const [loader, setLoader] = useState<boolean>(true);

	// filterStates
	const [categoryFilter, setCategoryFilter] = useState<Task[]>([]);
	const [industryFilter, setIndustryFilter] = useState<Task[]>([]);
	const [difficultyFilter, setDifficultyFilter] = useState<Task[]>([]);

	// use to clear filter values on toggle
	useEffect(() => {
		if (!toggle) {
			setCategory("");
			setIndustry("");
			setDifficulty("");
		} else {
			setSearchData("");
		}
	}, [toggle]);

	const Category = [
		{ value: "Saas", label: "Saas" },
		{ value: "Website Design", label: "Website Design" },
		{ value: "Mobile App Design", label: "Mobile App Design" },
		{ value: "Web App Design", label: "Web App Design" },
		{ value: "Other Design Porjects", label: "Other Design Porjects" },
		{ value: "Front-End Development", label: "Front-End Development" },
		{ value: "Back-End Devlopment", label: "Back-End Devlopment" },
		{ value: "Full-stack Development", label: "Full-stack Development" },
		{ value: "Other Develpment projects", label: "Other Develpment projects" },
	];

	// to fetch relevant data
	useEffect(() => {
		const fetchTasks = async () => {
			const tasksData = await getAllTasks();
			const categoryFilter = await getCategory();
			const industryFilter = await getIndustry();
			const difficultyFilter = await getDifficulty();
			setCategoryFilter(
				categoryFilter.map((i: any) => {
					const obj = { value: i, label: i };
					return obj;
				})
			);
			setIndustryFilter(
				industryFilter.map((i: any) => {
					const obj = { value: i, label: i };
					return obj;
				})
			);
			setDifficultyFilter(
				difficultyFilter.map((i: any) => {
					const obj = { value: i, label: i };
					return obj;
				})
			);
			!searchData && setTasks(tasksData);
			setUnfilteredTasks(tasksData);
			setLoader(false);
		};

		fetchTasks();
	}, []);

	// to filter tasks based on the search Inputfield
	useEffect(() => {
		if (!searchData) {
			setTasks(unfilteredTasks);
		} else {
			const filterData = unfilteredTasks.filter((i) =>
				i.title.toLowerCase().includes(searchData.toLowerCase())
			);
			setTasks(filterData);
			console.log(filterData);
		}
	}, [searchData]);

	// for multiply filter based on other filters
	useEffect(() => {
		if (!category && !industry && !difficulty) {
			setTasks(unfilteredTasks);
		} else {
			const filterData = unfilteredTasks.filter(
				(i) =>
					i.filter.category.toUpperCase() === category.toUpperCase() ||
					i.filter.industry_niche.toUpperCase() === industry.toUpperCase() ||
					i.filter.difficulty.toUpperCase() === difficulty.toUpperCase()
			);
			setTasks(filterData);
			console.log(filterData);
		}
	}, [category, industry, difficulty]);

	// used to turn off toggle when input search is focused
	const handleFocus = () => {
		setToggle(false);
	};

	// this clears all searchinput values
	const closeResults = () => {
		setSearchData("");
		inputRef.current?.focus();
	};

	return (
		<div className="mb-[150px]">
			<Hero
				inputRef={inputRef}
				searchData={searchData}
				setSearchData={setSearchData}
				closeResults={closeResults}
				setCategory={setCategory}
				setIndustry={setIndustry}
				setDifficulty={setDifficulty}
				toggle={toggle}
				setToggle={setToggle}
				handleFocus={handleFocus}
				categoryFilter={categoryFilter}
				industryFilter={industryFilter}
				difficultyFilter={difficultyFilter}
			/>
			<TasksPage tasks={tasks} />

			{/* --------LOADING COMPONEN */}
			{loader && <Loader />}
		</div>
	);
}
