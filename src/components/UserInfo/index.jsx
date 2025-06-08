import avatar from "../../img/avatar.png";
import { Avatar, UserContainer } from "../../pages/feed/styles";
import { Name, ProgressBar } from "./styles";

const UserInfo = ({ name, percentual}) => {
  return (
    <UserContainer>
      <Avatar src={avatar} />
      <div>
        <Name>{name}</Name>
        <ProgressBar percentual={percentual} />
      </div>
    </UserContainer>
  );
};

export { UserInfo }