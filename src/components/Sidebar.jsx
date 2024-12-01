import SidebarChatList from "./SidebarChatList";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <div className="list flex-1">
      <SidebarHeader />
      <SidebarChatList />
    </div>
  );
}
