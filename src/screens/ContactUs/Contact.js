import React, { useState, useEffect } from "react";
import "./Contact.css";
import { getRecord, AddRecord } from "../../firebase/croud";
import { Calendar } from "react-calendar";
import "../../components/callender/Callender.css";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Aos from "aos";
import Effect from "../../components/Effect/Effect";

const Contact = () => {
  // get records
  const { data, isLoading, refetch } = useQuery(["record"], () => getRecord());

  // loading state
  let [loading, setLoading] = useState("send");
  // form validion
  let [name, setName] = useState("");
  let [email, setEamil] = useState("");
  let [phone, setPhone] = useState("");
  let [country, setCountry] = useState("");
  let [project, setproject] = useState("");

  // handel form
  const handelForm = (setState, e) => {
    setState((prev) => {
      return e.target.value;
    });
  };

  // date state
  let [dateTime, setDateTime] = useState(new Date());
  let [time, setStateTime] = useState(null);

  // click to open callender state
  let [click, setClick] = useState(false);
  const clickFun = () => {
    setClick(!click);
  };

  // close callender state
  const setTime = (e) => {
    setStateTime((p) => e.target.textContent);
    clickFun();
  };

  // clear From
  const clearForm = () => {
    setName("");
    setEamil("");
    setPhone("");
    setCountry("");
    setproject("");
    setStateTime(null);
    setDateTime(new Date());
  };

  const dates = [
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
  ];
  useEffect(() => {
    Aos.init();
  }, [dateTime, time]); // This effect will be triggered whenever the state changes

  const { handleSubmit } = useForm();

  return (
    <div className="section" id="contact">
      <div className="contact center">
        <div
          className={click === true ? "get-date visable" : "get-date hidden"}>
          <div>
            <Calendar
              onChange={(e) => {
                setDateTime((prevDateTime) => e);
              }}
            />
          </div>
          <div className="times">
            {isLoading === true ? (
              <div> loading.... </div>
            ) : (
              dates
                .filter((ElementDates) => {
                  let value = true;
                  data.forEach((ElementData) => {
                    if (
                      ElementData.date.split(" - ")[0] ===
                      dateTime.toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    ) {
                      if (
                        ElementData.date.split(" - ")[1].split(" ")[0] ===
                          ElementDates.split(" ")[0] &&
                        ElementData.date.split(" - ")[1].split(" ")[1] ===
                          ElementDates.split(" ")[1]
                      ) {
                        value = false;
                      }
                    }
                  });
                  return value;
                })
                .map((Element, index) => {
                  return (
                    <div onClick={setTime} key={index} className="time">
                      {Element}{" "}
                    </div>
                  );
                })
            )}
          </div>
        </div>
        <div className="conatainer contact-container">
          <div className="main-content">
            <div className="text-0">
              <div
                className="text"
                data-aos="fade-right"
                data-aos-duration="600">
                <h1>
                  Have a <span>project!</span> Let’s discuss
                </h1>
                <p>
                  Bring your project to life with Magic Tech. Our team is ready
                  to collaborate, provide valuable insights, and deliver
                  tailored solutions. Contact us to start the conversation
                  today!
                </p>
              </div>

              <form
                data-aos="fade-up"
                data-aos-duration="600"
                className="form"
                onSubmit={handleSubmit(async () => {
                  if (loading !== "loading...") {
                    setLoading("loading...");
                    const record = await AddRecord({
                      name: name,
                      email: email,
                      phone: phone,
                      project: project,
                      country: country,
                      date:
                        dateTime.toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }) +
                        " - " +
                        time,
                    });
                    clearForm();
                    refetch();
                    if (record === "success") {
                      setLoading("Sent");
                    } else {
                      setLoading("fail");
                    }
                  }
                  return false;
                })}>
                {loading === "Sent" ? (
                  <div className="sucsess">Sent</div>
                ) : loading === "fail" ? (
                  <div className="fail">Something went wrong</div>
                ) : (
                  <div></div>
                )}
                <input
                  placeholder="Your Name"
                  required
                  onChange={(e) => {
                    handelForm(setName, e);
                  }}
                  value={name}
                />
                <input
                  placeholder="Your Email"
                  required
                  onChange={(e) => {
                    handelForm(setEamil, e);
                  }}
                  value={email}
                />
                <input
                  placeholder="Phone Number"
                  required
                  onChange={(e) => {
                    handelForm(setPhone, e);
                  }}
                  value={phone}
                />
                <input
                  placeholder="Country"
                  required
                  onChange={(e) => {
                    handelForm(setCountry, e);
                  }}
                  value={country}
                />
                <input
                  placeholder="Project Name"
                  required
                  onChange={(e) => {
                    handelForm(setproject, e);
                  }}
                  value={project}
                />
                <input
                  inputMode="none"
                  required
                  placeholder="Meeting Date"
                  onFocus={clickFun}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  value={
                    time == null
                      ? ""
                      : dateTime.toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }) +
                        " - " +
                        time
                  }
                />
                <input
                  type={"submit"}
                  value={loading === "loading..." ? "Loading..." : "send"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="effect-contact effect-contact-1">
        <Effect />
      </div>
      <div className="effect-contact effect-contact-2">
        <Effect />
      </div>
    </div>
  );
};

export default Contact;
