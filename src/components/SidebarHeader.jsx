import { FaEdit, FaUserCircle, FaVideo } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

export default function UserInfo() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-3 p-3">
        <FaUserCircle size={30} className="" />
        <h2 className="font-bold">John Doe</h2>
      </div>
      <div className="flex gap-3">
        <FiMoreHorizontal />
        <FaVideo />
        <FaEdit />
      </div>
    </div>
  );
}
