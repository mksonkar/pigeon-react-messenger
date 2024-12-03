import { FaPlus, FaSearch } from "react-icons/fa";

export default function SidebarChatList() {
  return (
    <div className="chatList">
      <section className="search my-4 flex w-full items-center justify-between gap-3">
        <div className="searchBar flex items-center rounded-md bg-emerald-700 px-2 focus:ring-1 focus:ring-emerald-600">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2 focus:outline-none"
          />
        </div>
        <FaPlus />
      </section>
      <section className="flex flex-col bg-emerald-700 px-3 py-2">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/200/300"
            alt="chat"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-sm">Last message...</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-emerald-700 px-3 py-2">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/200/300"
            alt="chat"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-sm">Last message...</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-emerald-700 px-3 py-2">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/200/300"
            alt="chat"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-sm">Last message...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
