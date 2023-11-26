
type Task = {
  id: number;
  conclusion: string;
  weeklyTasks: [
    {
      week_task: string;
      week_description: string;
      week_number: number;
    },
    {
      week_task: string;
      week_description: string;
      week_number: number;
    }
  ];
  timeline: {
    due_date: string;
    start_date: string;
  };
  description: string;
  task_id: number;
  resourceLink: [];
  requirement: [
    {
      requirement_description: string;
    },
    {
      requirement_description: string;
    }
  ];
  title: string;
  content_image: string;
  constraints: [
    {
      constraint_name: string;
    },
    {
      constraint_name: string;
    }
  ];
  content: string;
  filter: {
    difficulty: string;
    duration: string;
    category: string;
    industry_niche: string;
  };
  creator: string;
  skills: {
    "design skills": [string, string, string];
  };
};
