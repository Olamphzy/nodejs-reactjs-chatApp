
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        // eslint-disable-next-line react/prop-types
        username={props.user.username}
        // eslint-disable-next-line react/prop-types
        secret={props.user.secret}
      />
    </div>
  );
};
export default ChatsPage;