import { useState, useEffect, useMemo } from "react";
import { fetchAllStays } from "@/entities/Stay/model/api.js";
export function useCountryFilter() {
  const [allStays, setAllStays] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("all");
  useEffect(() => {
    fetchAllStays().then(setAllStays);
  }, []);
  const filteredStays = selectedLocation === "all" ? allStays : allStays.filter((stay) => stay.location === selectedLocation);
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(allStays.map((stay) => stay.location))];
    return [
      { value: "all", label: "All Stays" },
      ...uniqueLocations.map((loc) => ({
        value: loc,
        label: loc,
      })),
    ];
  }, [allStays]);
  return {
    allStays,
    filteredStays,
    selectedLocation,
    setSelectedLocation,
    locations,
  };
}
