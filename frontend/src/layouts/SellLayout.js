import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import { useEffect } from "react";

export default function SellLayout() {
  // const navigate = useNavigate();
  // const userType = useSelector((state) => state.User?.userData?.user_type);

  // console.log("userType is", userType);

  // useEffect(() => {
  //   if (userType !== "hirer") {
  //     toast.error("You are not hirer sorry !!", toastConfig);
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}
