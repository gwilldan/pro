export default async function getTask(taskId:string) {
  const res = await fetch(`https://projexa.onrender.com/api/get_task/${taskId}`);

  if (!res.ok) throw new Error("failed to fetch data");

  const responseData = await res.json();

  const data = responseData.data;
  console.log(data);
  return data;
}
