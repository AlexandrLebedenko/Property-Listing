import { useState, useEffect } from "react";
import { fetchAllProducts, fetchAvailableProducts } from "@/entities/Stay/model/api.js";

export function useProductFilter() {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        let data;
        if (activeTab === "all") {
          data = await fetchAllProducts();
        } else {
          data = await fetchAvailableProducts();
        }
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
      }
    };

    loadProducts();
  }, [activeTab]);

  return {
    products,
    activeTab,
    setActiveTab,
  };
}
