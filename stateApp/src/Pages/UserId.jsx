import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetSingleUser } from "../api/getRequest";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserIdPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState("");

  const fetchSingleUser = async () => {
    const response = await GetSingleUser(id);
    setUserDetail(response);
  };

  useEffect(() => {
    fetchSingleUser();
  }, [id]);

  return (
    <div className="d-flex flex-column align-items-center my-5 text-info">
      <button
        style={{ width: "200px", marginTop: "-20px" }}
        className="btn btn-primary mb-3"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      {userDetail && (
        <Card style={{ width: "75%", borderRadius: "20px" }}>
          <Card.Body>
            <Card.Title className="text-center mb-4">User Details</Card.Title>

            <div className="imgParent">
              <img
                className="img-fluid rounded mx-auto d-block mb-4 imgCard"
                src={userDetail.image}
                alt={userDetail.firstName}
              />
            </div>
            <Card.Text>
              <strong>ID:</strong> {userDetail.id}
            </Card.Text>
            <Card.Text>
              <strong>First Name:</strong> {userDetail.firstName}
            </Card.Text>
            <Card.Text>
              <strong>Last Name:</strong> {userDetail.lastName}
            </Card.Text>
            <Card.Text>
              <strong>Maiden Name:</strong> {userDetail.maidenName}
            </Card.Text>
            <Card.Text>
              <strong>Age:</strong> {userDetail.age}
            </Card.Text>
            <Card.Text>
              <strong>Gender:</strong> {userDetail.gender}
            </Card.Text>
            <Card.Text>
              <strong>Email:</strong> {userDetail.email}
            </Card.Text>
            <Card.Text>
              <strong>Phone:</strong> {userDetail.phone}
            </Card.Text>
            <Card.Text>
              <strong>Birth Date:</strong> {userDetail.birthDate}
            </Card.Text>
            <Card.Text>
              <strong>Blood Group:</strong> {userDetail.bloodGroup}
            </Card.Text>
            <Card.Text>
              <strong>Height:</strong> {userDetail.height} cm
            </Card.Text>
            <Card.Text>
              <strong>Weight:</strong> {userDetail.weight} kg
            </Card.Text>
            <Card.Text>
              <strong>Eye Color:</strong> {userDetail.eyeColor}
            </Card.Text>
            <Card.Text>
              <strong>Hair:</strong> {userDetail.hair.color} -{" "}
              {userDetail.hair.type}
            </Card.Text>
            <Card.Text>
              <strong>IP Address:</strong> {userDetail.ip}
            </Card.Text>
            <Card.Text>
              <strong>Address:</strong> {userDetail.address?.address},{" "}
              {userDetail.address?.city}, {userDetail.address?.state},{" "}
              {userDetail.address?.postalCode}, {userDetail.address?.country}
            </Card.Text>
            <Card.Text>
              <strong>Mac Address:</strong> {userDetail.macAddress}
            </Card.Text>
            <Card.Text>
              <strong>University:</strong> {userDetail.university}
            </Card.Text>
            <Card.Text>
              <strong>Bank:</strong> {userDetail.bank?.cardNumber} (
              {userDetail.bank?.cardType}) - Expires{" "}
              {userDetail.bank?.cardExpire}
            </Card.Text>
            <Card.Text>
              <strong>Company:</strong> {userDetail.company?.name} (
              {userDetail.company?.department}) - {userDetail.company?.title}
            </Card.Text>
            <Card.Text>
              <strong>EIN:</strong> {userDetail.ein}
            </Card.Text>
            <Card.Text>
              <strong>SSN:</strong> {userDetail.ssn}
            </Card.Text>
            <Card.Text>
              <strong>User Agent:</strong> {userDetail.userAgent}
            </Card.Text>
            <Card.Text>
              <strong>Crypto:</strong> {userDetail.crypto?.coin} (Wallet:{" "}
              {userDetail.crypto?.wallet} - {userDetail.crypto?.network})
            </Card.Text>
            <Card.Text>
              <strong>Role:</strong> {userDetail.role}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserIdPage;
