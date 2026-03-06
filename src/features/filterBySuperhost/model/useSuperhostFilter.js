import { useState, useMemo } from "react";
export function useSuperhostFilter(allStays = []) {
  const [superhostOnly, setSuperhostOnly] = useState(false);
  const filteredBySuperhost = useMemo(() => {
    if (!superhostOnly) return allStays;
    return allStays.filter((stay) => stay.superhost === true);
  }, [allStays, superhostOnly]);
  return {
    filteredBySuperhost,
    superhostOnly,
    setSuperhostOnly,
  };
}
