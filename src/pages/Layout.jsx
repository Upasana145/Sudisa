import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Strawberry from "./Strawberry";
import Safty from "./Safty";
import Vanilla from "./Vanilla";
import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { projectTypeHandler } from "../redux/slices/projectSlice";

const Layout = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [isloggedIn, setIsloggedin] = useState(false);

  const auth = useSelector((state) => state.auth.value);

  const projectType = useSelector((state) => state.projectType.value);

  const dispatch = useDispatch();

  console.log(projectType);

  const handleOptionSelect = (selectedOption) => {
    console.log(selectedOption, "uuuuuuuuuuuuuuuuuuuuuuuu");

    // setSelectedOption(selectedOption); // Update the selected option in state
    dispatch(projectTypeHandler(selectedOption));
  };

  // console.log(selectedOption);

  return (
    <>
      {!auth ? (
        <Signin />
      ) : (
        <>
          <Header handleOptionSelect={handleOptionSelect} />
          <Sidebar />
          {projectType && projectType === "Safty" && <Safty />}
          {projectType && projectType === "Moulding" && <Strawberry />}
          {projectType && projectType === "Visual Inspection" && <Vanilla />}
        </>
      )}
    </>
  );
};

export default Layout;
