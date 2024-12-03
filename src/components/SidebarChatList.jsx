import { FaPlus, FaSearch } from "react-icons/fa";

export default function SidebarChatList() {
  return (
    <div className="chatList">
      <div className="search flex w-full items-center justify-between gap-3 p-5">
        <div className="searchBar flex items-center rounded-md bg-emerald-700 px-2 focus:ring-1 focus:ring-emerald-600">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2 focus:outline-none"
          />
        </div>
        <FaPlus />
      </div>
    </div>
  );
}
