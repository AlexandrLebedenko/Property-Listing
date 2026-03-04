import { useState, useEffect } from "react";
import { fetchAllStays } from "@/entities/Stay/model/api.js";
export function useCountyFilter(params) {
  const [stays, setStays] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("all");
  useEffect(() => {
    fetchAllStays().then((allStays) => {
      // Фильтруем на клиенте
      const filtered = selectedCountry === "all" ? allStays : allStays.filter((stay) => stay.country === selectedCountry);
      setStays(filtered);
    });
  }, [selectedCountry]);

  return { stays, selectedCountry, setSelectedCountry };
}
