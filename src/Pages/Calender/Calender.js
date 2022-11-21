import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const DateCalender = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(new Date());
  const date = value.toString();
  const selectedDate = value.toLocaleDateString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleTask = (data) => {
    const todoTask = {
      userEmail: user.email,
      todoName: data.task,
      description: data.description,
      date: date,
    };

    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoTask),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const handleDay = (value, event) => {
    console.log(value);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
      <Calendar
        onChange={setValue}
        value={value}
        defaultValue={new Date()}
        onClickDay={handleDay}
        className="mx-auto rounded-lg border-primary"
      />
      <div>
        <h1 className="text-4xl text-center font-bold text-primary">
          Make Your Day Today
        </h1>
        <p className="text-center font-bold">{date}</p>
        <p className="text-center font-bold text-primary text-xl mt-4">
          You Select : {selectedDate}
        </p>
        <div>
          <form onSubmit={handleSubmit(handleTask)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task</span>
              </label>
              <input
                type="text"
                placeholder="What would you do..."
                {...register("task", {
                  required: "Add a task...",
                })}
                className="input input-bordered border-primary w-full"
              />
              {errors.task && <p>{errors.task?.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-primary mx-auto w-full px-1"
                rows="4"
                name="description"
                {...register("description")}
                placeholder="Add description here..."
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DateCalender;
