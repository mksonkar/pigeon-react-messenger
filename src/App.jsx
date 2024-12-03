import ChatRoom from "./components/pages/ChatRoom";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="bg-emerald-800/65 flex h-[90vh] w-[90vw] rounded-md border border-white/10 backdrop-blur-xl">
        <ChatRoom />
      </div>
    </div>
  );
};

export default App;
