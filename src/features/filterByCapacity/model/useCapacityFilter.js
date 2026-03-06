import { useState, useMemo } from "react";
export function useCapacityFilter(allStays) {
  const [minBedrooms, setMinBedrooms] = useState(1);
  const maxBedrooms = useMemo(() => {
    return Math.max(...allStays.map((stay) => stay.capacity.bedroom));
  }, [allStays]);
  const capacityOptions = useMemo(() => {
    const options = [];
    for (let i = 1; i <= maxBedrooms; i++) {
      options.push({
        value: i,
        label: `${i} bedroom`,
      });
    }
    return options;
  }, [maxBedrooms]);
  const filteredByCapacity = useMemo(() => {
    return allStays.filter((stay) => stay.capacity.bedroom >= minBedrooms);
  }, [allStays, minBedrooms]);
  return {
    filteredByCapacity,
    minBedrooms,
    setMinBedrooms,
    capacityOptions,
  };
}
