import { Formik, Form } from "formik";
import { Button, FormikRow } from "src/components";
import { registerValidationSchema } from "src/constants/FormValidation";
import { useAuthContext } from "src/contextApi/auth/AuthContext";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const { register } = useAuthContext();

  const handleSubmit = async (values) => {
    try {
      await register(values.email, values.username, values.password);
      toast.success("Registration Successfully");
      // Registration successful, redirect or show a success message
    } catch (error) {
      // Handle registration failure
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
      }}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <div className="flex items-center justify-center w-full">
          <div className="w-[450px] mx-auto mt-10 p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <Form>
              <FormikRow
                name="username"
                label="Username"
                value={values.username}
              />
              <FormikRow
                name="email"
                label="Email"
                type="email"
                value={values.email}
              />
              <FormikRow
                name="password"
                label="Password"
                type="Password"
                value={values.password}
              />

              <Button type="submit" disabled={isSubmitting}>
                Register
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
