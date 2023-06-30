import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import Footer from "./Footer.js";
import Header from "./Header";
import MainDropdown from "./MainDropdown";

import { Link, animateScroll as scroll } from "react-scroll";

const Forms = () => {
  const [renderForm, setRenderForm] = useState("Project Verification");

  const options = [
    { value: "Project Verification", label: "Project Verification" },
    { value: "Scam Investigation", label: "Scam Investigation" },
    { value: "Fund Recovery", label: "Fund Recovery" }
  ];

  const networks = [
    { value: "Ethereum", label: "Ethereum" },
    { value: "Binance", label: "Binance" },
    { value: "Polygon", label: "Polygon" },
    { value: "Fantom", label: "Fantom" },
    { value: "Cronos", label: "Cronos" },
    { value: "Avalanche", label: "Avalanche" },
    { value: "Solana", label: "Solana" },
    { value: "Algorand", label: "AlgoRand" },
    { value: "Polkadot", label: "Polkadot" },
    { value: "Cardano", label: "Cardano" },
    { value: "Zilliqa", label: "Zilliqa" },
    { value: "Ethereum Classic", label: "Ethereum Classic" }
  ];

  useEffect(() => {
    console.log(options);
    console.log(renderForm);
  }, [renderForm]);

  const RenderForm = ({ renderForm, setRenderForm }) => {
    //checks for which form view to render

    //checks if they want to sup to newsLetter
    const [subToNewsletter, setSubToNewsLetter] = useState(false);

    //potential form field values
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [projectRelationship, setProjectRelationship] = useState("");
    const [phone, setPhone] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [discordLink, setDiscordLink] = useState("");
    const [telegramLink, setTelegramLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [tokenName, setTokenName] = useState("");
    const [tokenContract, setTokenContract] = useState("");
    const [message, setMessage] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [blockchainNetwork, setBlockchainNetwork] = useState("");
    const [intialTxnHash, setIntialTxnHash] = useState("");
    const [network, setNetwork] = useState("");

    //potential files
    const [whitePaper, setWhitePaper] = useState([]);
    const [projectOverView, setProjectOverView] = useState([]);
    const [roadMap, setRoadMap] = useState([]);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_uxylk6s",
          "template_cmdlo98",
          form.current,
          "9sov1o4QzBBk3ZOuW"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    ///////////////////////////////PORJECT VERIFICATION FORM//////////////////////////////
    if (renderForm === "Project Verification") {
      const verifyForm = (e) => {
        e.preventDefault();
        if (email === "") {
          alert("Email cannot be empty");
        } else if (projectRelationship === "") {
          alert("Relationship to project cannot be empty");
        } else if (tokenName === "") {
          alert("Token name cannot be empty");
        } else if (message === "") {
          alert("Message cannot be empty");
        } else {
          alert("Request Sent");
          sendEmail(form);
        }
      };

      return (
        <>
          <form ref={form} onSubmit={verifyForm}>
            <div className="col" style={{ color: "black" }}>
              <label style={{ color: "white" }}>Select a Form</label>
              <Select
                placeholder={"Project Verification"}
                name="form"
                options={options}
                onChange={(e) => setRenderForm(e.value)}
                defaultValue={{
                  value: "Project Verification",
                  label: "Project Verification"
                }}
              />
            </div>
            <div className="row">
              <div className="col">
                <label for="html">First Name</label>
                <input
                  name="fName"
                  type="text"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Last Name</label>
                <input
                  name="lName"
                  type="text"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">*Relationship To Project</label>
                <input
                  name="projectRelationship"
                  type="text"
                  placeholder="Relationship To Project"
                  value={projectRelationship}
                  onChange={(e) => setProjectRelationship(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">Phone Number</label>
                <input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col empty"></div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Token Name</label>
                <input
                  name="tokenName"
                  type="text"
                  placeholder="Token Name"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Website Link</label>
                <input
                  name="websiteLink"
                  type="url"
                  placeholder="Website Link"
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Discord Link</label>
                <input
                  name="discordLink"
                  type="url"
                  placeholder="Discord Link"
                  value={discordLink}
                  onChange={(e) => setDiscordLink(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Token Contract Address</label>
                <input
                  type="text"
                  name="tokenContract"
                  placeholder="Token Contract Address"
                  value={tokenContract}
                  onChange={(e) => setTokenContract(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Telegram Link</label>
                <input
                  name="telegramLink"
                  type="url"
                  placeholder="Telegram Link"
                  value={telegramLink}
                  onChange={(e) => setTelegramLink(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Instagram Link</label>
                <input
                  name="instagramLink"
                  type="url"
                  placeholder="Instagram link"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label id="message">
                  *Why do you believe this project should be verified? Please
                  provide as much detail as you can. (ex. link or attachment of
                  the road map and white paper, team doxing status, past project
                  the team has worked on, etc.
                </label>
                <textarea
                  style={{ borderRadius: "5px", border: "none" }}
                  name="message"
                  id="messageInput"
                  type="textarea"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>

            {
              // project will have to get pro version of emailjs to get attachments
              /*<div className="row">
              <div className="col">
                <label for="html">White Paper</label>
                <input
                  name="whitePaper"
                  type="file"
                  value={whitePaper}
                  onChange={(e) => setWhitePaper(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Project Overview</label>
                <input
                  name="projectOverview"
                  type="file"
                  value={projectOverView}
                  onChange={(e) => setProjectOverView(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">Road Map</label>
                <input
                  name="roadMap"
                  type="file"
                  value={roadMap}
                  onChange={(e) => setRoadMap(e.target.value)}
                />
              </div>
                  </div> */
            }
            <div className="row">
              <div className="col" id="checkbox">
                <input
                  name="subToNewsLetter"
                  style={{ flex: 0, cursor: "pointer" }}
                  type="checkbox"
                  placeholder="Email"
                  value={subToNewsletter}
                  onChange={(e) => setSubToNewsLetter(!subToNewsletter)}
                />
                <label style={{ padding: " 0 0 0 5px" }}>
                  Subscribe to Newsletter
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  style={{ maxHeight: "none" }}
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </>
      );
    }

    ///////////////////////////////Scam Investigation FORM//////////////////////////////
    if (renderForm === "Scam Investigation") {
      const verifyForm = (e) => {
        e.preventDefault();
        if (email === "") {
          alert("Email cannot be empty");
        } else if (projectRelationship === "") {
          alert("Relationship to project cannot be empty");
        } else if (tokenName === "") {
          alert("Token name cannot be empty");
        } else if (message === "") {
          alert("Message cannot be empty");
        } else {
          alert("Request Sent");
          sendEmail(form);
        }
      };
      return (
        <>
          <form ref={form} onSubmit={verifyForm}>
            <div className="col" style={{ color: "black" }}>
              <label style={{ color: "white" }}>Select a Form</label>
              <Select
                placeholder={"Scam Investigation"}
                name="form"
                options={options}
                onChange={(e) => setRenderForm(e.value)}
                defaultValue={{
                  value: "Scam Investigation",
                  label: "Scam Investigation"
                }}
              />
            </div>
            <div className="row">
              <div className="col">
                <label for="html">First Name</label>
                <input
                  name="fName"
                  type="text"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Last Name</label>
                <input
                  name="lName"
                  type="text"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">*Relationship To Project</label>
                <input
                  name="projectRelationship"
                  type="text"
                  placeholder="Relationship To Project"
                  value={projectRelationship}
                  onChange={(e) => setProjectRelationship(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">Phone Number</label>
                <input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col empty"></div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Token Name</label>
                <input
                  name="tokenName"
                  type="text"
                  placeholder="Token Name"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Website Link</label>
                <input
                  name="websiteLink"
                  type="url"
                  placeholder="Website Link"
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Discord Link</label>
                <input
                  name="discordLink"
                  type="url"
                  placeholder="Discord Link"
                  value={discordLink}
                  onChange={(e) => setDiscordLink(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Token Contract Address</label>
                <input
                  type="text"
                  name="tokenContract"
                  placeholder="Token Contract Address"
                  value={tokenContract}
                  onChange={(e) => setTokenContract(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Telegram Link</label>
                <input
                  name="telegramLink"
                  type="url"
                  placeholder="Telegram Link"
                  value={telegramLink}
                  onChange={(e) => setTelegramLink(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Instagram Link</label>
                <input
                  name="instagramLink"
                  type="url"
                  placeholder="Instagram link"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label id="message">
                  *Why do you believe this project is a scam? Provide as much
                  details, evidence and proof as you can.
                </label>
                <input
                  name="message"
                  id="messageInput"
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            {
              // project will have to get pro version of emailjs to get attachments
              /*<div className="row">
            <div className="col">
              <label for="html">White Paper</label>
              <input
                name="whitePaper"
                type="file"
                value={whitePaper}
                onChange={(e) => setWhitePaper(e.target.value)}
              />
            </div>
            <div className="col">
              <label for="html">Project Overview</label>
              <input
                name="projectOverview"
                type="file"
                value={projectOverView}
                onChange={(e) => setProjectOverView(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label for="html">Road Map</label>
              <input
                name="roadMap"
                type="file"
                value={roadMap}
                onChange={(e) => setRoadMap(e.target.value)}
              />
            </div>
                </div> */
            }
            <div className="row">
              <div className="col" id="checkbox">
                <input
                  name="subToNewsLetter"
                  style={{ flex: 0, cursor: "pointer" }}
                  type="checkbox"
                  placeholder="Email"
                  value={subToNewsletter}
                  onChange={(e) => setSubToNewsLetter(!subToNewsletter)}
                />
                <label style={{ padding: " 0 0 0 5px" }}>
                  Subscribe to Newsletter
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  style={{ maxHeight: "none" }}
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </>
      );
    }

    ///////////////////////////////Fund Recovery FORM//////////////////////////////
    if (renderForm === "Fund Recovery") {
      const verifyForm = (e) => {
        e.preventDefault();
        if (email === "") {
          alert("Email cannot be empty");
        } else if (tokenName === "") {
          alert("Token name to project cannot be empty");
        } else if (tokenContract === "") {
          alert("Token contract addres name cannot be empty");
        } else if (message === "") {
          alert("Message cannot be empty");
        } else if (walletAddress === "") {
          alert("Wallet address cannot be empty");
        } else if (intialTxnHash === "") {
          alert("Initial txn hash cannot be empty");
        } else {
          alert("Request Sent");
          sendEmail(form);
        }
      };
      return (
        <>
          <form ref={form} onSubmit={verifyForm}>
            <div className="col" style={{ color: "black" }}>
              <label style={{ color: "white" }}>Select a Form</label>
              <Select
                placeholder={"Fund Recovery"}
                name="form"
                options={options}
                onChange={(e) => setRenderForm(e.value)}
                defaultValue={{
                  value: "Fund Recovery",
                  label: "Fund Recovery"
                }}
              />
            </div>
            <div className="row">
              <div className="col">
                <label for="html">First Name</label>
                <input
                  name="fName"
                  type="text"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Last Name</label>
                <input
                  name="lName"
                  type="text"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">Phone Number</label>
                <input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Token Name</label>
                <input
                  name="tokenName"
                  type="text"
                  placeholder="Token Name"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="html">*Token Contract Address</label>
                <input
                  name="tokenContract"
                  type="url"
                  placeholder="Website Link"
                  value={tokenContract}
                  onChange={(e) => setTokenContract(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ color: "black" }}>
                <label style={{ color: "white" }}>*Network</label>
                <Select
                  placeholder={"Scam Investigation"}
                  name="network"
                  options={networks}
                  onChange={(e) => setNetwork(e.value)}
                  defaultValue={{
                    value: "Ethereum",
                    label: "Ethereum"
                  }}
                />
              </div>
              <div className="col">
                <label for="html">*Wallet Address</label>
                <input
                  name="walletAddress"
                  type="text"
                  placeholder="Wallet Address"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="html">*Initial Purchase Txn Hash</label>
                <input
                  name="intialTxnHash"
                  type="text"
                  placeholder="Initial Purchase Txn Hash"
                  value={intialTxnHash}
                  onChange={(e) => setIntialTxnHash(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label id="message">
                  *Description of how you were scammed. Attach any supporting
                  documentation.
                </label>
                <input
                  name="message"
                  id="messageInput"
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            {
              // project will have to get pro version of emailjs to get attachments
              /*<div className="row">
            <div className="col">
              <label for="html">White Paper</label>
              <input
                name="whitePaper"
                type="file"
                value={whitePaper}
                onChange={(e) => setWhitePaper(e.target.value)}
              />
            </div>
            <div className="col">
              <label for="html">Project Overview</label>
              <input
                name="projectOverview"
                type="file"
                value={projectOverView}
                onChange={(e) => setProjectOverView(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label for="html">Road Map</label>
              <input
                name="roadMap"
                type="file"
                value={roadMap}
                onChange={(e) => setRoadMap(e.target.value)}
              />
            </div>
                </div> */
            }
            <div className="row">
              <div className="col" id="checkbox">
                <input
                  name="subToNewsLetter"
                  style={{ flex: 0, cursor: "pointer" }}
                  type="checkbox"
                  placeholder="Email"
                  value={subToNewsletter}
                  onChange={(e) => setSubToNewsLetter(!subToNewsletter)}
                />
                <label style={{ padding: " 0 0 0 5px" }}>
                  Subscribe to Newsletter
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  style={{ maxHeight: "none" }}
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </>
      );
    }
  };

  return (
    <div className="section forms" id="verify">
      <div className="left">
        <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="000">
          Submitting a project for verification has{" "}
          <span className="blue">never been easier.</span>
        </h1>
        <h5 data-aos="fade" data-aos-duration="2000" data-aos-delay="000">
          *The more details you provide, the easier and faster our response will
          be
        </h5>
      </div>
      <div
        className="right"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="000"
      >
        <div className="rightInner">
          <RenderForm
            renderForm={renderForm}
            setRenderForm={(e) => setRenderForm(e)}
          />
        </div>
      </div>
    </div>
  );
};

const FormsPage = ({ setScreen }) => {
  return (
    <>
      <Forms />
      <Footer />
    </>
  );
};

export default FormsPage;
