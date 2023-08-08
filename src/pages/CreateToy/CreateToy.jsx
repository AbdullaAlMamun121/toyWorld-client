import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const CreateToy = () => {
  useTitle("Add Toy");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const onSubmit = (data) => {
    fetch("https://toy-assignment-server-omega.vercel.app/createToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((info) => {
        alert("Toy created successfully!");
        console.log(info);
      });
  };

  return (
    <section style={{ backgroundColor: "#E0E7FF" }}>
      <div className="container py-5">
        <h2 className="text-center" style={{ paddingTop: "100px" }}>
          Add A Toy
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Picture URL of the toy</label>
            <input
              type="text"
              className="form-control"
              {...register("pictureUrl", { required: true })}
            />
            {errors.pictureUrl && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Seller Name</label>
            <input
              defaultValue={user?.displayName}
              type="text"
              className="form-control"
              {...register("sellerName", { required: true })}
            />
            {errors.sellerName && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Seller Email</label>
            <input
              defaultValue={user?.email}
              type="email"
              className="form-control"
              {...register("sellerEmail", { required: true })}
            />
            {errors.sellerEmail && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Sub-category</label>
            <select
              className="form-select"
              {...register("subCategory", { required: true })}
            >
              <option value="">Select a sub-category</option>
              <option value="sports">Sports Car</option>
              <option value="police">Police Car</option>
              <option value="regular">Regular Car</option>
            </select>
            {errors.subCategory && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input
              type="number"
              className="form-control"
              {...register("rating", { required: true })}
            />
            {errors.rating && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Available Quantity</label>
            <input
              type="number"
              className="form-control"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Detail Description</label>
            <textarea
              rows={10}
              className="form-control"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-4 ">
            Add Toy
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateToy;
