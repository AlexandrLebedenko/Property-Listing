const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json";

export async function fetchAllProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Loading error");
    return await response.json();
  } catch (error) {
    console.error("fetchAllProducts error:", error);
    return [];
  }
}
export async function fetchAvailableProducts() {
  try {
    const allProducts = await fetchAllProducts();
    return allProducts.filter((product) => product.available === true);
  } catch (error) {
    console.error("fetchAvailableProducts error:", error);
    return [];
  }
}
