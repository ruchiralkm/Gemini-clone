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
        <img width="48" height="48" src={user} alt="User" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <img src={compass} alt="Compass" />
              </div>

              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <img src={bulb} alt="Bulb" />
              </div>

              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <img src={message} alt="Message" />
              </div>

              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <img src={code} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={user} alt="User" />
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            autem earum soluta
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
