import { useState, useMemo } from "react";
export function useSuperhostFilter(allStays) {
  const [showAll, setShowAll] = useState(true);
  const filteredBySuperhost = useMemo(() => {
    if (showAll) return allStays;
    return allStays.filter((stay) => !stay.superhost);
  }, [allStays, showAll]);
  return {
    filteredBySuperhost,
    showAll,
    setShowAll,
  };
}
