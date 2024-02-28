import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "src/store/slices/product/productSlice";
import { fetchProducts } from "src/store/slices/product/productsAsyncThunks";

const useProductManagement = () => {
  const dispatch = useDispatch();

  const { data: products, status, error } = useSelector(productsData);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjust the number of items per page as needed
  //
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleAddProduct = () => {
    setAddModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditModalOpen(true);
    setSelectedProduct(product);
  };

  const filteredProducts = currentItems.filter((product) => {
    const categoryFilter =
      selectedCategory === "" || product.category === selectedCategory;

    const searchFilter = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryFilter && searchFilter;
  });

  return {
    categories,
    products,
    status,
    error,
    selectedCategory,
    searchTerm,
    isAddModalOpen,
    isEditModalOpen,
    selectedProduct,
    filteredProducts,
    handleAddProduct,
    handleEditProduct,
    setAddModalOpen,
    setEditModalOpen,
    setSelectedProduct,
    setSearchTerm,
    setSelectedCategory,
    // Pagination
    itemsPerPage,
    currentPage,
    onPageChange,
  };
};

export default useProductManagement;
