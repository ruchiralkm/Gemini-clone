import React, { useContext, useState } from "react";
import "./SideBar.scss";
import menu from "../../assets/menu_icon.png";
import plus from "../../assets/plus_icon.png";
import message from "../../assets/message_icon.png";
import question from "../../assets/question_icon.png";
import history from "../../assets/history_icon.png";
import setting from "../../assets/setting_icon.png";
import { Context } from "../../context/Context";

function SideBar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={menu}
          alt="Menu"
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={plus} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={message} alt="Message" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={question} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={history} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={setting} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
