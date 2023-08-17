import React, { useState, useLayoutEffect, useEffect } from "react";
import "./Admin.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAdminData, getAdmins } from "./controllers/firebase.js";
import { getRecord } from "../../firebase/croud.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Effect from "../../components/Effect/Effect";
import { AddAdmin } from "../login/controllers/firebase";
import Aos from "aos";

const Record = ({ data, index }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="record"
      data-aos={index % 2 === 0 ? "fade-up" : "fade-left"}
      data-aos-duration="600">
      <div className="name">
        <span>Name : </span>
        {data.name}
      </div>
      <div className="country">
        <span>Country : </span>
        {data.country}
      </div>
      <div className="date">
        <span>Date : </span>
        {data.date}
      </div>{" "}
      <div className="project">
        <span>Project : </span>
        {data.project}
      </div>
      <div className="more-info">
        <div className="contact-social">
          <div className="phone">{data.phone}</div>
          <div className="email">{data.email}</div>
        </div>
        {/* <div className="acceptable">
          <div className="accept">
            <i className="fa-sharp fa-solid fa-check"></i>
          </div>
          <div className="reject">
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Records = () => {
  // get records
  const {
    data: recordsData,
    isLoading: isLoadingRecordsData,
    refetch: refreshRecordData,
  } = useQuery(["record"], () => getRecord());

  return (
    <>
      {isLoadingRecordsData === true ? (
        <div>Loading...</div>
      ) : (
        recordsData.map((Element, index) => {
          return (
            <Record
              data={Element}
              refetch={refreshRecordData}
              index={index}
              key={Math.random()}
            />
          );
        })
      )}
    </>
  );
};

const AdminCard = ({ data, index }) => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      className="admin-card"
      data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
      data-aos-duration="600">
      <div className="img"></div>
      <div>
        <div className="name">{data.name}</div>
        <div className="email">{data.email}</div>
      </div>
    </div>
  );
};

const Admins = () => {
  const { data: AdminsData, isLoading } = useQuery(["adminData"], () =>
    getAdmins()
  );

  return (
    <div>
      {isLoading === true
        ? "Loading"
        : AdminsData.map((Element, index) => {
            return (
              <AdminCard data={Element} key={Math.random()} index={index} />
            );
          })}
    </div>
  );
};

const AddAdminPage = () => {
  useEffect(() => {
    Aos.init();
  });

  // handel form data
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [status, setStatus] = useState("");

  const { handleSubmit } = useForm();

  const signUp = async () => {
    setStatus("loading");
    try {
      const user = await AddAdmin(name, email, password);
      if (user === true) {
        setStatus("success");
      } else {
        setStatus("fail");
      }
    } catch (e) {
      setStatus("fail");
    }
  };
  return (
    <>
      <div
        className="add-admin center"
        data-aos-duration="600"
        data-aos="slide-up">
        <div className="container-log-in">
          <form className="login" onSubmit={handleSubmit(signUp)}>
            <h3 className="title">Add Admin</h3>
            <div className="text-input">
              <i className="ri-user-fill"></i>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <i className="ri-user-fill"></i>
              <input
                type="email"
                placeholder="Eamil"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <i className="ri-lock-fill"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <input
              className="login-btn"
              value={status === "loading" ? "loading..." : "Add Admin"}
              type={"submit"}
            />
          </form>
        </div>
      </div>
      {status === "success" ? (
        <div className="sucsess-admin">Success</div>
      ) : status === "fail" ? (
        <div className="fail-admin">Some Error Happines</div>
      ) : (
        <div></div>
      )}
    </>
  );
};

const Admin = () => {
  // navigation
  const navigate = useNavigate();

  // get admin data
  const params = useParams();
  const {
    data: adminData,
    isLoading: isLoadingAdminData,
    refetch: refreshAdminData,
  } = useQuery(["admin"], () => getAdminData(params.id));

  // use Effect

  useEffect(() => {
    //check local token or something
    if (Cookies.get("adminUid") !== params.id) {
      navigate("/log-in-admin");
    }
    Aos.init();
  }, []);

  // swich function
  let [swich, setSwich] = useState(0);

  const onSwich = (index) => {
    setSwich(index);
  };
  // render th ui
  return (
    <div className="admin-page">
      <div className="menu-admin">
        <div className="menu-admin-fixed">
          <div className="logo" data-aos="fade-right" data-aos-duration="600">
            Magic Tech
          </div>
          <div className="links-admin">
            <span
              className={swich === 0 ? "active" : "non-active"}
              onClick={() => {
                onSwich(0);
              }}>
              Records
            </span>
            <span
              className={swich === 1 ? "active" : "non-active"}
              onClick={() => {
                onSwich(1);
              }}>
              Admins
            </span>
            <span
              className={swich === 2 ? "active" : "non-active"}
              onClick={() => {
                onSwich(2);
              }}>
              Add Admin
            </span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header-admin">
          <div className="name" data-aos="fade-down" data-aos-duration="600">
            {isLoadingAdminData === true ? "Loading..." : adminData.name}
          </div>
        </div>
        <div className="cards items">
          {swich === 0 ? (
            <Records />
          ) : swich === 1 ? (
            <Admins />
          ) : (
            <AddAdminPage />
          )}
        </div>
      </div>
      <div className="effect-admin effect-admin-1">
        <Effect />
      </div>
      <div className="effect-admin effect-admin-2">
        <Effect />
      </div>
    </div>
  );
};

export default Admin;
