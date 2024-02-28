import * as Yup from 'yup'
// import { z } from 'zod'

export const loginValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})

export const registerValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   .required('Confirm Password is required'),
})

export const productValidationSchema = Yup.object({
  title: Yup.string().min(3).max(50).required('Title is required'),
  price: Yup.string().min(3).max(50).required('Price is required'),
  category: Yup.string().min(3).max(50).required('Category is required'),
  // image: Yup.mixed().required('Image is required'),
  //     .test("fileSize", "File size is too large", (value) => {
  //       return value && value.size <= 1024000; // 1MB
  //     })
  //     .test("fileType", "Unsupported file type", (value) => {
  //       return value && ["image/jpeg", "image/png"].includes(value.type);
  //     }),
})

// Validation schema for register
// export const RegisterFormSchema = z.object({
//   email: z.string().email('Invalid email').required('Email is required'),
//   username: z
//     .string()
//     .min(3, 'Username must be at least 3 characters')
//     .required('Username is required'),
//   password: z
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// })

// Validation schema for login
// export const LoginFormSchema = z.object({
//   username: z
//     .string()
//     .min(3, 'Username must be at least 3 characters')
//     .required('Username is required'),
//   password: z
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// })
