import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UserData from "../components/UserData";
import { getAPI, postAPI } from "../utils/fetchapi";
// const API = "https://dummyjson.com/products/1";``
const API = "http://10.12.1.151:4002/api/v1/master/dept";

const Depts = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getAPI(`master/dept`, null);
      // console.log(data, "helllllllllllllllllllllllllllllllllllll");
      if (data.status) {
        setUsers(data?.data);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try Again!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="main">
        <div className="table_header">
          <div className="table_header_left">
            <h3>Departments</h3>
            {/* <p>
              Home / <span>Departments</span>
            </p> */}
          </div>
          {/* <div className="table_header_center">
            <input type="text" className="form-control" />
            <button className="btn btn-primary btn-sm">
              <FaSearch />
            </button>
          </div> */}
          <div className="table_header_r">
            <Link to="/addDept">Add Department</Link>
          </div>
        </div>
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              {/* <th scope="col">ID</th>
              <th scope="col">Department Name</th>
              <th scope="col">Head Name</th>
              <th scope="col">Emails</th> */}
              <th scope="col">Department ID</th>
              <th scope="col">Department Name</th>
              <th scope="col">Emails</th>
              <th scope="col">Head Name</th>
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} fetchUsers={fetchUsers} />
            {/* <tr>
              <th scope="row">1</th>
              <td></td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Depts;
