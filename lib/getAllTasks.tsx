export default async function getAllTasks() {
  const res = await fetch("https://projexa.onrender.com/api/get_all_task");

  if (!res.ok) throw new Error("failed to fetch data");

  const responseData = await res.json();

  const data = responseData.data;
  console.log(data);
  return data;
}
