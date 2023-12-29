export default async function getCategory() {
	const res = await fetch("https://projexa.onrender.com/api/filter/category");

	if (!res.ok) throw new Error("failed to fetch data");

	const responseData = await res.json();

	const data = responseData.data;
	return data;
}
