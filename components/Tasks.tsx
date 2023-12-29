"use client";

import { motion } from "framer-motion";
import getAllTasks from "@/lib/getAllTasks";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";
import { Button } from "./buttons/Button";

interface taskProps {
	tasks: any;
}

export default function TasksPage(props: taskProps) {
	return (
		<div>
			<div>
				<div className=" px-4  max-w-[1440px] mx-auto">
					<div className="grid xl:grid-cols-2 xl:gap-7 grid-col-1 ">
						{props.tasks.length ? (
							props.tasks.map((task: any) => {
								return (
									<div
										className="my-5 hover:scale-[1.01] ease-linear duration-200"
										key={task.id}
									>
										<div
											className={`sm:p-8 p-3 md:max-w-[650px] md:mx-auto xl:p-10 bg-[#ffffff] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[18px] w-[100%] h-[350px] sm:h-[350px] md:h-[400px] md:text-[10px] flex flex-col border-[0.5px] ${task.title}`}
										>
											<div>
												<div className="flex text-[25px] text-secondary mb-3">
													<AiIcons.AiFillStar />
													<AiIcons.AiFillStar />
													<AiIcons.AiFillStar />
													<AiIcons.AiFillStar />
													<AiIcons.AiFillStar />
												</div>
											</div>
											<h2 className="font-bold w-full text-[20px] sm:text-[30px] text-secondary leading-[35px] ">
												{task.title.length > 50
													? task.title.slice(0, 50) + "..."
													: task.title}
											</h2>
											<p className="text-[14px] flex-1 sm:text-[18px] my-3 md:my-6">
												{task.description.length > 300
													? task.description.slice(0, 300) + "..."
													: task.description}
											</p>
											<div className="flex items-center justify-between sm:gap-8 ">
												<div className="flex items-center gap-4">
													<img
														src={task.content_image}
														alt=""
														className="sm:w-[51px] sm:h-[51px] w-[48px] h-[48px] rounded-full"
													/>
													<div></div>
													<div className=" ">
														<h4 className="font-bold text-secondary text-[16px]">
															{task.creator}
														</h4>
														<div className="flex flex-row gap-2 items-center ">
															<h4 className="text-[12px] bg-[#f4f4f4] px-[7px] py-1 rounded-[4px]">
																{task.tag1}
															</h4>
															<h4 className="text-[12px] bg-[#f4f4f4] px-[7px] py-1 rounded-[4px]">
																{task.tag2}
															</h4>
														</div>
													</div>
												</div>
												<div className="flex gap-3 ">
													<Link href={`/tasks/${task.task_id}`}>
														<Button variant="outline-primary">More info</Button>
													</Link>
													<Button variant="primary" className="sm:flex hidden">
														Join challenges
													</Button>
													{/* <Button /> */}
												</div>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<div className=" h-[250px] col-span-2 w-full grid place-content-center font-bold text-red-500">
								<p>NO TASKS AVAILABLE!!!</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
