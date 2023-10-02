"use client";
import { Spinner } from "@/assets/Icons/Spinner";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    alert("application send");
    reset();
    setLoading(false);
  };
  return (
    <>
      <div className="text-center text-3xl font-bold py-5 text-gray-600">
        Fill Your Information
      </div>

      <div className="bg-white ">
        <form className="px-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid mt-1">
            <label htmlFor="firstName" className="">
              First Name *
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            <small className="text-red-500">{errors.firstName?.message}</small>
          </div>

          <div className="grid mt-1">
            <label htmlFor="lastName" className="">
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            <small className="text-red-500">{errors.lastName?.message}</small>
          </div>
          <div className="grid mt-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <small className="text-red-500">{errors.email?.message}</small>
          </div>
          <div className="grid mt-1">
            <label htmlFor="fieldStudy">Field Of Study</label>
            <input
              type="text"
              name="fieldStudy"
              placeholder="Computer science "
              {...register("fieldStudy", {
                required: "Field Study Study is required",
              })}
            />
            <small className="text-red-500">{errors.fieldStudy?.message}</small>
          </div>
          <div className="grid mt-1">
            <label htmlFor="gpa">CGPA</label>
            <input
              type="number"
              name="gpa"
              placeholder="Gpa"
              {...register("gpa", {
                required: "GPA is required",
              })}
            />
            <small className="text-red-500">{errors.gpa?.message}</small>
          </div>

          <div className="grid mt-1 col-span-2">
            <label htmlFor="description">Upload Cv * pdf only</label>
            <input
              multiple
              type="file"
              accept="application/pdf"
              name="resume"
              {...register("resume", {
                required: "File is required",
              })}
            />
            <small className="text-red-500">{errors.resume?.message}</small>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="gridiantBg mb-10 text-white px-5 py-2 w-full flex justify-center justify-self-center mt-5 items-center rounded-full hover:-translate-y-2 transition-all"
            >
              <span className="ml-1">Submit </span>
              {loading ? <Spinner /> : null}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationForm;
