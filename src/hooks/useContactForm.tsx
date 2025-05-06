import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export type FormContact = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
};

const {
  YOUR_SERVICE_ID = "",
  YOUR_TEMPLATE_ID = "",
  PUBLIC_API_KEY = "",
} = process.env;

export const useContactForm = () => {
  return useFormik<FormContact>({
    validateOnChange: false,
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter your email")
        .required("This field is required"),
      firstName: Yup.string().required("Please let me know your name"),
      lastName: Yup.string(),
      message: Yup.string().required("You don't have any thing to say?"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, values, PUBLIC_API_KEY);
        toast.success("Thanks! Your message has been sent");
        resetForm();
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });
};