export default async function getDifficulty() {
	const res = await fetch("https://projexa.onrender.com/api/filter/difficulty");

	if (!res.ok) throw new Error("failed to fetch data");

	const responseData = await res.json();

	const data = responseData.data;
	return data;
}
