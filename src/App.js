import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./App.css";

const colorSet = {
  "sendbird-dark-primary-500": "salmon",
  "sendbird-dark-primary-400": "salmon",
  "sendbird-dark-primary-300": "salmon",
  "sendbird-dark-primary-200": "salmon",
  "sendbird-dark-primary-100": "salmon",

  "sendbird-light-primary-500": "salmon",
  "sendbird-light-primary-400": "salmon",
  "sendbird-light-primary-300": "salmon",
  "sendbird-light-primary-200": "salmon",
  "sendbird-light-primary-100": "salmon",
};

function App() {
  return (
    <div className="App">
      <SendBirdApp
        // Add the two lines below.
        appId={process.env.REACT_APP_APP_ID} // Specify your Sendbird application ID (on website).
        userId="junhee lee" // [ "eazel", "junhee", "junhee lee"]
        nickname="junhee" // nickname
        theme="light" // theme - light || dark
        allowProfileEdit={true} // profile 기능 사용 가능 여부
        showSearchIcon={true} // 채널 검색 기능
        colorSet={colorSet}
        // stringSet
      />
    </div>
  );
}

export default App;

/**
 interface AppProps {
  appId: string;
  userId: string;
  accessToken?: string;
  theme?: "light" | "dark";
  userListQuery?(): UserListQuery;
  nickname?: string;
  dateLocale?: Locale;
  profileUrl?: string;
  allowProfileEdit?: boolean;
  disableUserProfile?: boolean;
  showSearchIcon?: boolean;
  renderUserProfile?: (props: RenderUserProfileProps) => React.ReactNode;
  onProfileEditSuccess?(user: Sendbird.User): void;
  config?: SendBirdProviderConfig;
  useReaction?: boolean;
  useMessageGrouping?: boolean;
  stringSet?: Record<string, string>;
  colorSet?: Record<string, string>;
  imageCompression?: {
    compressionRate?: number;
    resizingWidth?: number | string;
    resizingHeight?: number | string;
  };
  replyType?: ReplyType;
  disableAutoSelect?: boolean;
}
 */
