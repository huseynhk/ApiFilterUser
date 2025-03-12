import React, { useState, useEffect } from "react";
import { GetDatas } from "../api/getRequest";
import { Table, Nav } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTER } from "../constant/router";

const rolesArray = ["admin", "moderator", "user"];

function Manager() {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("role");

  const handleData = async () => {
    const response = await GetDatas();
    setDatas(response.users);
    setFilteredData(response.users);
  };

  const filterUsers = (users, role) => {
    if (role) {
      setFilteredData(users.filter((user) => user.role === role));
    } else {
      setFilteredData(users);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    filterUsers(datas, activeTab);
  }, [activeTab, datas]);

  const getRoleStyle = (role) => {
    switch (role) {
      case "admin":
        return { color: "blue" };
      case "moderator":
        return { color: "red" };
      case "user":
        return { color: "green" };
      default:
        return null;
    }
  };

  return (
    <div className="text-center px-5 py-3">
      <h2 className="text-white mb-3">Users Table</h2>

      {/* Tabs */}
      <Nav variant="tabs" activeKey={activeTab}>
        {rolesArray?.map((role) => (
          <Nav.Item key={role}>
            <Nav.Link
              eventKey={role}
              onClick={() => setSearchParams({ role })}
              className={activeTab === role ? "default" : "white"}
            >
              {role}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div className="mt-3">
        <button
          style={{ width: "170px" }}
          onClick={() => setSearchParams({})}
          className="btn btn-primary mb-3"
        >
          Reset
        </button>
        <Table
          striped
          bordered
          hover
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Role</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.age}</td>
                <td className="fw-bold" style={getRoleStyle(user.role)}>
                  {user.role}
                </td>
                <td>
                  <FaEye
                    size={30}
                    color="blue"
                    className="eye-icon"
                    onClick={() => navigate(`${ROUTER.Detail}/${user.id}`)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Manager;
