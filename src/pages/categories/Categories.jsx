import ProductCard from "../products/_comp/ProductCard";
import { capitalizeFirstLetter } from "src/constants/utils";
import useCategories from "./useCategories";

const Categories = () => {
  const { categories, selectedCategory, products, handleCategoryClick } =
    useCategories();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Product Categories</h1>
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${
              category === selectedCategory ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {capitalizeFirstLetter(category)}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">
            {capitalizeFirstLetter(selectedCategory)}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                handleEditProduct={() => handleEditProduct(product)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
