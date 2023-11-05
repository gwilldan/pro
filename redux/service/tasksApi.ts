import { ITask, ITasksResponse } from "@/types/tasks";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://projexa.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<ITasksResponse, void>({
      query: () => "get_all_task",
    }),
    getSpecifiTast: builder.query<ITask, string>({
      query: (taskId) => `get_submitted_task/${taskId}`,
    }),
  }),
});

export const { useGetTasksQuery, useGetSpecifiTastQuery } = tasksApi;
