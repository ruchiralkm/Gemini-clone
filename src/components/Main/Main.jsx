import React, { useContext } from "react";
import "./Main.scss";
import compass from "../../assets/compass_icon.png";
import message from "../../assets/message_icon.png";
import bulb from "../../assets/bulb_icon.png";
import code from "../../assets/code_icon.png";
import gallery from "../../assets/gallery_icon.png";
import mic from "../../assets/mic_icon.png";
import send from "../../assets/send_icon.png";
import gemini from "../../assets/gemini_icon.png";
import user from "../../assets/user_icon.png";
import { Context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/google-gemini-icon.png"
          alt=""
          style={{ width: "30px", height: "30px", marginLeft: "-88%" }}
        />{" "}
        <img
          width="48"
          height="48"
          src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-avatar-with-flat-style-png-image_11517216.png"
          alt="User"
        />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello Dear,</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Suggest an organized list of the best food spots in a city
                </p>
                <img src={compass} alt="Compass" />
              </div>

              <div className="card">
                <p>Explain the impact of globalization</p>
                <img src={bulb} alt="Bulb" />
              </div>

              <div className="card">
                <p>Walk me through how to apply for a new role</p>
                <img src={message} alt="Message" />
              </div>

              <div className="card">
                <p>Help write SQL to generate a report</p>
                <img src={code} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-avatar-with-flat-style-png-image_11517216.png"
                alt="User"
              />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={gemini} alt="Gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={gallery} alt="Gallery" />
              <img src={mic} alt="Mic" />
              {input ? (
                <img onClick={() => onSent()} src={send} alt="Send" />
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            ©2024 Designed by Ruchira Kaluarachchi | All Rights Reserved. |
            ruchiralkm@gmail.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
