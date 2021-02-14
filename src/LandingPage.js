import Sidebar from "./Sidebar.js";
import ChatOptions from "./ChatOptions.js";
import ChatWindow from "./ChatWindow.js";

import "./App.css";

function LandingPage({ handleLogout }) {
  return (
    <div className="App">
      <Sidebar />
      <ChatOptions />
      <ChatWindow />
    </div>
  );
}

export default LandingPage;
