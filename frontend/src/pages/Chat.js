import React from 'react';
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "../styles/Chat.styles.css";

const appID = "APP ID";
const userID = "USER EMAIL";
const nickname = "USER'S FULL NAME";

export default function Chat() {
  return (
    <div className="Chat">

      <p style={{ 'white-space': 'pre-wrap' }}>{"\n"}</p>
      <SendbirdApp appId={appID} userId={userID} nickname={nickname}/>
    </div>
  );
}
