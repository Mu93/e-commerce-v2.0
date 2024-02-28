import { ErrorMessage, Field } from "formik";

function FormikRow({ label, name, ...rest }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-600 mb-2">
        {label}
      </label>
      <Field
        className="form-input w-full rounded-md border p-2 focus:outline-none focus:border-blue-500 hover:border-blue-300"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component="span" className="text-red-500" />
    </div>
  );
}

export default FormikRow;
