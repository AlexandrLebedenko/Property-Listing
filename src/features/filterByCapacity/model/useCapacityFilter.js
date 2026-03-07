import { useState, useMemo } from "react";

export function useCapacityFilter(allStays) {
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const maxBedrooms = useMemo(() => {
    if (allStays.length === 0) return 0;
    return Math.max(...allStays.map((stay) => stay.capacity.bedroom));
  }, [allStays]);

  const capacityOptions = useMemo(() => {
    const options = [{ value: null, label: "All" }];

    for (let i = 1; i <= maxBedrooms; i++) {
      options.push({
        value: i,
        label: `${i} ${i === 1 ? "bedroom" : "bedrooms"}`,
      });
    }
    return options;
  }, [maxBedrooms]);

  const filteredByCapacity = useMemo(() => {
    if (!isActive || minBedrooms === null) return allStays;
    return allStays.filter((stay) => stay.capacity.bedroom === minBedrooms);
  }, [allStays, minBedrooms, isActive]);

  const handleChange = (value) => {
    setMinBedrooms(value);
    setIsActive(true);
  };

  return {
    filteredByCapacity,
    minBedrooms,
    setMinBedrooms: handleChange,
    capacityOptions,
    isActive,
  };
}
