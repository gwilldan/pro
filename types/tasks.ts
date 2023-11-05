export interface ITask {
  conclusion: string;
  content: string;
  content_image: string;
  creator: string;
  description: string;
  id: string;
  task_id: string;
  title: string;
  constraints: IConstraints[];
  requirement: IRequirement[];
  resourceLink: string[];
  timeline: ITimeline;
  weeklyTasks: IWeeklyTasks[];
}

export interface IConstraints {
  constraint_name: string;
}

export interface IRequirement {
  requirement_description: string;
}

export interface IResoureLink {}

export interface ITimeline {
  due_date: string;
  start_date: string;
}

export interface IWeeklyTasks {
  week_task: string;
}

export interface ITasksResponse {
  message: string;
  data: ITask[];
}
