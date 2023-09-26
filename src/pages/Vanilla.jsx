import React, { useEffect, useState } from "react";

import { getAPI } from "../utils/fetchapi";

const Vanilla = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const data = await getAPI(`master/dept`, null);
      // console.log(data, "data in the Vanillaaaaa");
      if (data.status) {
        setUsers(data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(users, "userss value in the vanillaaaa");

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="master" style={{ padding: "20px" }}>
      <div className="visual">
        <h1>Visual Inspection page is under construction</h1>
      </div>
      <div>
        <select>
          <option value="All">All</option>
          {users.map((opts, i) => (
            <option>{opts.dept_name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Vanilla;
