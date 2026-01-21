import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled.div`
  .form_container {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 50px 40px 20px 40px;
    background-color: #ffffff;
    box-shadow:
      0px 106px 42px rgba(0, 0, 0, 0.01),
      0px 59px 36px rgba(0, 0, 0, 0.05),
      0px 26px 26px rgba(0, 0, 0, 0.09),
      0px 7px 15px rgba(0, 0, 0, 0.1),
      0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: "Inter", sans-serif;
  }

  .logo_container {
    width: 80px;
    height: 80px;
    border-radius: 11px;
    border: 1px solid #f7f7f8;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 0.75rem;
    text-align: center;
    color: #8b8e98;
  }

  .input_container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .input_label {
    font-size: 0.75rem;
    color: #8b8e98;
    font-weight: 600;
  }

  .input_field {
    height: 40px;
    padding-left: 40px;
    border-radius: 7px;
    border: 1px solid #e5e5e5;
    outline: none;
  }

  .sign-in_btn {
    width: 100%;
    height: 40px;
    background: #115dfc;
    border-radius: 7px;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .sign-in_ggl,
  .sign-in_apl {
    width: 100%;
    height: 40px;
    border-radius: 7px;
    cursor: pointer;
  }

  .sign-in_ggl {
    background: #fff;
    border: 1px solid #e5e5e5;
  }

  .sign-in_apl {
    background: #212121;
    color: #fff;
  }

  .separator {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #8b8e98;
    width: 100%;
  }

  .line {
    width: 100%;
    height: 1px;
    background: #e8e8e8;
    border: none;
  }

  .error {
    font-size: 0.7rem;
    color: red;
  }
`;

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login Data:", data);

    const loginSuccess = true;
    if (loginSuccess) {
      // Get user data from register stored in localStorage
      const userData = localStorage.getItem('userData');
      if (userData) {
        localStorage.setItem('user', userData);
        // Trigger storage event for other tabs
        window.dispatchEvent(new Event('storage'));
      }
      navigate("/");
      // Force refresh to update state
      window.location.reload();
    }
  };

  return (
    <StyledWrapper>
      <div className="h-[100vh] w-full bg-gray-400 flex justify-center items-center">
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo_container" />

          <p className="title">Login to your Account</p>
          <p className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </p>

          {/* Email */}
          <div className="input_container">
            <label className="input_label">Email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              className="input_field"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="input_container">
            <label className="input_label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input_field"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="sign-in_btn">
            Sign In
          </button>

          <div className="separator">
            <hr className="line" />
            <span>Or</span>
            <hr className="line" />
          </div>

          <button type="button" className="sign-in_ggl">
            Sign In with Google
          </button>

          <button type="button" className="sign-in_apl">
            Sign In with Apple
          </button>

          <p className="subtitle">Terms of use & Conditions</p>
        </form>
      </div>
    </StyledWrapper>
  );
}

export default Login;
