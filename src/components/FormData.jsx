import React, { useState } from "react";

const FormData = () => {
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "male",
    language: ["html"],
  });

  const changeHandler = (event) => {
    if (event.target.name === "language") {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.language.push(event.target.value);
      } else {
        copy.language = copy.language.filter((el) => el !== event.target.value);
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const validateForm = () => {
    let err = {};
    if (formData.firstname === "") {
      err.firstname = "Firstname is required !";
    }

    if (formData.email === "") {
      err.email = "Email is required";
    } else {
      let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!regex.test(formData.email)) {
        err.email = "Email is not Validate";
      }
    }

    if (formData.password === "" && formData.cpassword === "") {
      err.password = "Password and Confirm Password Required";
    } else {
      if (formData.password !== formData.cpassword) {
        err.password = "Password is not matched";
      }
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let isValid = validateForm();
    isValid
      ? console.log(formData) && alert("Form is submmited")
      : console.log(isValid) && alert("Form is submmited");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} style={{ margin: "2rem" }}>
        <div>
          <label htmlFor="firstname">First Name : </label>
          <input
            type="text"
            placeholder="Enter Your firstName"
            name="firstname"
            onChange={changeHandler}
            value={formData.firstname}
          />
          <span style={{ color: "red" }}>{formError.firstname}</span>
        </div>
        <div>
          <label htmlFor="lastname">Last Name : </label>
          <input
            type="text"
            placeholder="Enter Your lastname"
            name="lastname"
            onChange={changeHandler}
            value={formData.lastname}
          />
          <span style={{ color: "red" }}>{formError.lastname}</span>
        </div>
        <div>
          <label htmlFor="email">Your Email : </label>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
          <span>{formError.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            placeholder="Enter Your password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="cpassword">Confirm Password : </label>
          <input
            type="password"
            placeholder="Enter Your password"
            name="cpassword"
            onChange={changeHandler}
            value={formData.cpassword}
            autoComplete="true"
          />
        </div>
        <span style={{ color: "red" }}>{formError.password}</span> <br />
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={changeHandler}
            checked={formData.gender === "male"}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={changeHandler}
            checked={formData.gender === "female"}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label>Languages</label>
          <div>
            <input
              type="checkbox"
              name="language"
              value="html"
              onChange={changeHandler}
              checked={formData.language.indexOf("html") !== -1}
            ></input>
            <label>HTML</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="language"
              value="css"
              onChange={changeHandler}
              checked={formData.language.indexOf("css") !== -1}
            ></input>
            <label>CSS</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="language"
              value="react js"
              onChange={changeHandler}
              checked={formData.language.indexOf("react js") !== -1}
            ></input>
            <label>React JS</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormData;
