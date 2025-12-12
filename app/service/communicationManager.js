import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.themealdb.com",
  timeout: 5000,
});

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error("TheMealDB API error:", err);
    return Promise.reject(err);
  }
);

// searchApi(letter): calls /api/json/v1/1/search.php?f=<letter>
export async function searchApi(letter) {
  const l = (letter || "").trim();
  // The API expects a single letter; if empty, return empty array
  if (!l) return [];

  // Use the 'f' parameter (search by first letter)
  const data = await apiClient.get(
    `/api/json/v1/1/search.php?f=${encodeURIComponent(l[0])}`
  );

  // The interceptor returns res.data, which should be an object with 'meals'
  return data && data.meals ? data.meals : [];
}

export default apiClient;
