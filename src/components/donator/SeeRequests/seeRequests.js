import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getOneDonation, getRequests } from "../../../api/donator.api";
import LoadingSpinner from "../../common/LoadingSpinner";
import NoItems from "../noItems";
import RequestCard from "./requestCard";

export default function SeeRequests() {
  const location = useLocation();
  const fromAccepted = location.state?.fromAccepted;
  console.log(location);
  const [requests, setRequests] = useState([]);
  const [donation, setDonation] = useState([]);

  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getRequests(id)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.length > 0) {
          setRequests(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getOneDonation(id)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.length > 0) {
          setDonation(res.data.donation);
          // console.log(res.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <h3
        style={{
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Donation Title - {donation.donationTitle}
      </h3>
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            bottom: 0,
            left: 0,
            right: 0,

            margin: "auto",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : requests.length == 0 ? (
        <h4
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          No Requests Yet
        </h4>
      ) : (
        <div
          class="row row-cols-2"
          style={{
            marginLeft: 150,
            overflow: "hidden",
          }}
        >
          {requests.map(function (f) {
            return (
              <div
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   alignContent: "center",
              // }}
              >
                <div class="col">
                  <RequestCard
                    name={f.requesterName}
                    email={f.requesterEmail}
                    contact={f.requesterContact}
                    description={f.requestDescription}
                    id={f._id}
                    accepted={fromAccepted}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
