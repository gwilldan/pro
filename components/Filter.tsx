import Select from "react-select";

interface filterProps {
	type: string;
	setCategory: (arg: any) => any;
	setIndustry: (arg: any) => any;
	setDifficulty: (arg: any) => any;
	categoryFilter: any;
	industryFilter: any;
	difficultyFilter: any;
}

const Filter = (props: filterProps) => {
	return (
		<div
			className={` ${
				props.type == "forMobile"
					? "flex-col w-full"
					: "w-[70%] shrink-0 gap-5 ml-5 "
			}  flex gap-2 mt-8`}
		>
			<div
				className={` ${
					props.type == "forMobile" ? "w-full" : "w-[30%] shrink-0"
				} flex flex-col gap-2 `}
			>
				<h6 className="text-base text-[#393A32]">Category</h6>
				<Select
					className="my-1 rounded-md border-black"
					options={props.categoryFilter}
					onChange={(e: any) => props.setCategory(e?.value)}
				/>
			</div>
			<div
				className={` ${
					props.type == "forMobile" ? "w-full" : "w-[30%] shrink-0"
				} flex flex-col gap-2 `}
			>
				<h6 className="text-base text-[#393A32]">Industry/Niche</h6>
				<Select
					className="my-1 rounded-md border-black"
					options={props.industryFilter}
					onChange={(e: any) => props.setIndustry(e?.value)}
				/>
			</div>
			<div
				className={` ${
					props.type == "forMobile" ? "w-full" : "w-[30%] shrink-0"
				} flex flex-col gap-2 `}
			>
				<h6 className="text-base text-[#393A32]">Difficulty Level</h6>
				<Select
					className="my-1 rounded-md border-black"
					options={props.difficultyFilter}
					onChange={(e: any) => props.setDifficulty(e?.value)}
				/>
			</div>
		</div>
	);
};

export default Filter;
