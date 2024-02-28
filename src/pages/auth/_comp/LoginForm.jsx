import { Formik, Form } from "formik";
import { Button, FormikRow } from "src/components";
import { loginValidationSchema } from "src/constants/FormValidation";
import { useAuthContext } from "src/contextApi/auth/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await login(values.username, values.password);
      toast.success("Login Successfully");
      navigate("/products");
      // Login successful, you may want to redirect or show a success message
    } catch (error) {
      // Handle login failure
      toast.error("Login failed:", error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "mor_2314",
        password: "83r5^_",
      }}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <div className="flex items-center justify-center w-full">
          <div className="w-[450px] mx-auto mt-10 p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <Form>
              <FormikRow
                name="username"
                label="Username"
                value={values.username}
              />
              <FormikRow
                name="password"
                label="Password"
                type="Password"
                value={values.password}
              />

              <Button type="submit" disabled={isSubmitting}>
                Log In
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
