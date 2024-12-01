import Sidebar from "../Sidebar";
import Chat from "../Chat";
import Details from "../Details";

export default function ChatRoom() {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="flex h-[90vh] w-[90vw] justify-start rounded-md border border-white/10 bg-emerald-800/75 backdrop-blur-xl">
        <Sidebar />
        <div className="">
          <Chat />
        </div>
        <div>
          <Details />
        </div>
      </div>
    </div>
  );
}
