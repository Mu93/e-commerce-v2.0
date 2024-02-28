import { useState, useEffect } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (selectedCategory) {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
          setProducts(response.data);
        } catch (error) {
          console.error(
            `Error fetching products for category ${selectedCategory}:`,
            error
          );
        }
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    selectedCategory,
    products,
    handleCategoryClick,
  };
};
export default useCategories;
