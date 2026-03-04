const API_URL =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json";

export async function fetchAllStays() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
