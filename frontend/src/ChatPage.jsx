import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow projectId="6e376a28-51bd-40e5-8d62-fcf8793c114e" username={props.user.username} secret={props.user.username} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
