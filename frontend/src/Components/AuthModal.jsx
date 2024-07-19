import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import logo from "../imgs/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { setAuthUser } from "../redux/authSlice";

const AuthModal = ({ showSignUpModal, onClose, showLoginModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    DOB: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/login", formData);
      toast.promise(res);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/register", formData);
      dispatch(setAuthUser(res.data));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  if (showLoginModal || showSignUpModal) {
    if (showLoginModal) {
      return (
        <div className="fixed inset-0 bg-slate-400 bg-opacity-25 flex justify-center items-center">
          <div className="w-[600px] h-[650px] bg-black rounded-2xl">
            <div className="p-2 flex justify-between">
              <IoCloseOutline
                className="cursor-pointer size-6"
                onClick={onClose}
              />
              <img className="size-10 mr-64" src={logo} alt="logo" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="w-80">
                <p className="md:text-3xl vsm:lg font-mono md:p-4 font-bold md:mt-1 text-slate-200">
                  Sign in to X
                </p>
                <button className="h-10 bg-white text-black rounded-3xl flex justify-center items-center w-80 my-2">
                  <FcGoogle size="20px" />
                  <span>Sign in with Google</span>
                </button>
                <button className="h-10 bg-white text-black rounded-3xl flex justify-center items-center w-80 my-2">
                  <FaApple size="20px" />
                  <span>Sign in with Apple</span>
                </button>
                <p className="text-white divider px-4">or</p>
                <form onSubmit={handleLoginSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    name="username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className="w-full p-4 bg-black border-slate-900 border-2 my-2"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full p-4 bg-black border-slate-900 border-2 my-2"
                  />
                  <button
                    type="submit"
                    className="h-10 text-black bg-white rounded-3xl flex justify-center items-center w-80 my-2 font-bold font-mono hover:bg-slate-200"
                  >
                    Submit
                  </button>
                </form>
                <button className="h-10 text-white bg-black border-[1px] border-slate-700 rounded-3xl flex justify-center items-center w-80 my-2 font-bold font-mono hover:bg-slate-900">
                  Forgot password
                </button>
                <p className="mt-10 text-slate-500">
                  Don't have an account?
                  <Link to="/signup" className="text-blue-600">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fixed inset-0 bg-slate-400 bg-opacity-25 flex justify-center items-center">
          <div className="w-[600px] h-[650px] bg-black rounded-2xl">
            <div className="p-2 flex justify-between">
              <IoCloseOutline
                className="cursor-pointer size-6"
                onClick={onClose}
              />
              <img className="size-10 mr-64" src={logo} alt="logo" />
            </div>
            <div className="flex justify-center items-center flex-col relative">
              <div className="w-[80%]">
                <p className="md:text-3xl vsm:lg font-mono md:p-4 font-bold md:mt-1 text-slate-200">
                  Join X today
                </p>
                <form onSubmit={handleRegisterSubmit}>
                  <input
                    type="text"
                    placeholder="Fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    className="w-full p-5 bg-black border-slate-900 border-2 my-2"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full p-5 bg-black border-slate-900 border-2 my-2"
                  />
                  <input
                    type="email"
                    name="username"
                    placeholder="Email"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className="w-full p-5 bg-black border-slate-900 border-2 my-2"
                  />
                  <p className="text-lg text-white">Date of birth</p>
                  <p className="text-slate-600">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                  <input
                    type="date"
                    name="DOB"
                    value={formData.DOB}
                    onChange={(e) =>
                      setFormData({ ...formData, DOB: e.target.value })
                    }
                    className="bg-black text-white text-lg w-full border-slate-900 border-2 mt-5 p-3"
                  />
                  <button
                    type="submit"
                    className="h-16 text-lg text-black bg-white rounded-3xl flex justify-center items-center w-[80%] mt-10 font-bold font-mono hover:bg-slate-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default AuthModal;
