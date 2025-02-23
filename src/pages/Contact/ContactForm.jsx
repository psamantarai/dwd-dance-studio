/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnect";
import Alert from "../../components/Alert";
// eslint-disable-next-line no-undef
const EMAIL_TOKEN = import.meta.env.VITE_EMAIL_TOKEN;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // For success message
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    data = {
      ...data,
      access_key: EMAIL_TOKEN,
      subject: `${data.firstname.toUpperCase()} has submitted a form!`,
    };
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        "https://api.web3forms.com/submit",
        data
      );
      // const response = { status: "OK" };
      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setErrorMessage("There is issue in submission. Please try again. ");
      }
    } catch (error) {
      setErrorMessage("Error while sending message! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-7"
      action="POST"
    >
      {isSuccess && <Alert message={"Form submitted!"} type={"success"} />}
      {errorMessage && <Alert message={errorMessage} type={"error"} />}

      <div className="flex flex-col gap-5 lg:flex-row">
        {/* firstname */}
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>

          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
            {...register("firstname", { required: true })}
          />

          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>

        {/* lastname */}
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>

          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your email address
          </span>
        )}
      </div>

      {/* phoneNo */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>

        <div className="flex flex-row gap-5">
          {/* dropdown */}
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      {/* message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>

        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message"
          className="form-style"
          {...register("message", { required: true })}
        />

        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your message
          </span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
