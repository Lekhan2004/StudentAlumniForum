import "./Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [err, setErr] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const userType = watch("userType");
  
  async function onSignUpFormSubmit(userObj) {
    try {
      const res = await axios.post("http://localhost:5000/user-api/user", userObj);
      if (res.status === 201) {
        setSignupSuccess(true);
        setErr("");
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setErr("Failed to register. Please try again.");
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Signup</h2>
            </div>
            <div className="card-body">
              {err.length !== 0 && <p className="lead text-center text-danger">{err}</p>}

              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
              <div className="mb-4">
  <label
    className="form-check-label me-3"
    style={{
      fontSize: "1.2rem",
      color: "var(--light-dark-grey)",
    }}
  >
    Register as
  </label>
  <div className="form-check form-check-inline">
    <input
      type="radio"
      className="form-check-input"
      id="author"
      value="author"
      {...register("userType", { required: "User type is required" })}
    />
    <label htmlFor="author" className="form-check-label" style={{ color: "var(--crimson)" }}>
      Alumni
    </label>
  </div>
  <div className="form-check form-check-inline">
    <input
      type="radio"
      className="form-check-input"
      id="user"
      value="user"
      {...register("userType", { required: "User type is required" })}
    />
    <label htmlFor="user" className="form-check-label" style={{ color: "var(--crimson)" }}>
      Student
    </label>
  </div>
  {errors.userType && <p className="text-danger">{errors.userType.message}</p>}
</div>

                <div className="mb-4">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    {...register("username", { required: "Username is required" })}
                  />
                  {errors.username && <p className="text-danger">{errors.username.message}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    {...register("dob", { required: "Date of Birth is required" })}
                  />
                  {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="branch" className="form-label">Branch</label>
                  <select
                    className="form-select"
                    id="branch"
                    {...register("branch", { required: "Branch is required" })}
                  >
                    <option value="">Select your branch</option>
                    <option value="CSE">CSE</option>
                    <option value="CSBS">CSBS</option>
                    <option value="IOT">IOT</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="AIML">AIML</option>
                    <option value="CSDS">CSDS</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECHANICAL">MECHANICAL</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="AUTOMOBILE">AUTOMOBILE</option>
                  </select>
                  {errors.branch && <p className="text-danger">{errors.branch.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    {...register("description", { required: "Description is required" })}
                    ></textarea>
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                    </div>
                    <div className="mb-4">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                {...register("phone", { required: "Phone number is required", pattern: { value: /^\d{10}$/, message: "Invalid phone number" } })}
              />
              {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="picture" className="form-label">Picture URL</label>
              <input
                type="text"
                className="form-control"
                id="picture"
                {...register("picture")}
              />
              {/* Picture URL validation is optional based on your requirements */}
            </div>

            {/* Alumni Specific Fields */}
                    {
                      userType==="author" && (<>
                      <div className="mb-4">
                                    <label htmlFor="areasOfExpertise1" className="form-label">Area of Expertise 1</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="areasOfExpertise1"
                                        {...register("areasOfExpertise1")}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="areasOfExpertise2" className="form-label">Area of Expertise 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="areasOfExpertise2"
                                        {...register("areasOfExpertise2")}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="areasOfExpertise3" className="form-label">Area of Expertise 3</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="areasOfExpertise3"
                                        {...register("areasOfExpertise3")}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="workExperience" className="form-label">Work Experience</label>
                                    <textarea
                                        className="form-control"
                                        id="workExperience"
                                        {...register("workExperience")}
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="presentCompany" className="form-label">Present Company</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="presentCompany"
                                        {...register("presentCompany")}
                                    />
                                </div></>)
                    }
            <div className="text-end">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>

          {signupSuccess && (
            <div className="text-center mt-4">
              <p className="lead fs-3 display-4 text-success">Registration Successful!</p>
              <p className="text-center fs-6 text-secondary">
                Proceed to <Link to="/signin">Login</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default Signup;
