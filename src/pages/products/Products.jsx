import { Button, SearchBar, Spinner, CategoryFilter } from "../../components";
import ProductCard from "./_comp/ProductCard";

import useProductManagement from "./_comp/useProductManagement";
import ProductForm from "./_comp/ProductForm";
import Pagination from "src/components/shared/Pagination";

const Products = () => {
  const {
    categories,
    status,
    error,
    selectedCategory,
    searchTerm,
    isAddModalOpen,
    isEditModalOpen,
    selectedProduct,
    filteredProducts,
    products,
    handleAddProduct,
    handleEditProduct,
    setAddModalOpen,
    setEditModalOpen,
    setSearchTerm,
    setSelectedCategory,

    // Pagination
    itemsPerPage,
    currentPage,
    onPageChange,
  } = useProductManagement();

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      {/* Add new product */}

      <ProductForm
        isOpen={isAddModalOpen}
        onRequestClose={() => setAddModalOpen(false)}
      />
      <ProductForm
        isOpen={isEditModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        isUpdate={true}
        selectedProduct={selectedProduct}
      />

      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button onClick={handleAddProduct}>Add New Product</Button>
        </div>

        {/* Products Actions*/}
        <div className="flex justify-between mt-5">
          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* View all products */}
        <section className="bg-slate-100 h-screen p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                handleEditProduct={() => handleEditProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="flex items-center justify-center font-semibold text-2xl">
              There is no product to display.
            </div>
          )}

          {!searchTerm && !selectedCategory && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={products.length}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default Products;
