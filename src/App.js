import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SendBirdApp
        // Add the two lines below.
        appId={process.env.REACT_APP_APP_ID} // Specify your Sendbird application ID.
        userId="junhee lee" // Specify your user ID.
        nickname="junhee"
        theme="dark"
      />
    </div>
  );
}

export default App;
