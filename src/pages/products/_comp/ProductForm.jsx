import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { productValidationSchema } from "src/constants/FormValidation";
import { Button, CustomModal, FormikRow, Spinner } from "../../../components";
import {
  addProduct,
  updateProduct,
} from "src/store/slices/product/productsAsyncThunks";

const ProductForm = ({
  isOpen,
  onRequestClose,
  isUpdate = false,
  selectedProduct,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    title: isUpdate ? selectedProduct?.title : "",
    price: isUpdate ? selectedProduct?.price : "",
    category: isUpdate ? selectedProduct?.category : "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (isUpdate) {
      dispatch(updateProduct({ id: selectedProduct?.id, ...values }));
      navigate("/products");
    } else {
      dispatch(addProduct({ id: Math.floor(Math.random() * 1000), ...values }));
    }

    setSubmitting(false);
    resetForm();
    onRequestClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      modalStyle={modalStyle}
    >
      <div className="bg-gray-800 p-3 flex items-center ">
        <h2 className="font-bold  text-white">
          {isUpdate ? "Update Product" : "Add New Product"}
        </h2>
      </div>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={productValidationSchema}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <FormikRow
                name="title"
                label="Product Title:"
                value={values.title}
              />
              <FormikRow
                name="price"
                label="Product Price:"
                value={values.price}
              />
              <FormikRow
                name="category"
                label="Product Category:"
                value={values.category}
              />

              {/* Add additional fields or customize based on your needs */}
              {isUpdate && (
                <FormikRow
                  name="image"
                  type="file"
                  accept="image/jpeg, image/png"
                  label="Product Image:"
                />
              )}

              <Button type="submit" disabled={isSubmitting}>
                {isUpdate ? "Update Product" : "Add Product"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </CustomModal>
  );
};

// Add this style to make the modal appear above other elements
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    zIndex: 1001,
    width: "25%", // Set the desired width
    height: "58%", // Set the desired height
    margin: "auto", // Center the modal
    padding: "0", // Center the modal
  },
};

export default ProductForm;
