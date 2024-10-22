import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../utils/sidebarSlice";
import Location from "./Location";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.sidebar.isOpen);
  if (!isOpen) null;

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-400 z-10"
        onClick={() => handleSidebar()}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      ></div>
      <div
        className="w-[500px] bg-white h-full absolute duration-500 z-20 p-2"
        style={{
          left: isOpen ? "0%" : "-100%",
        }}
      >
        <Location />

        <button
          className="absolute right-5 top-2 mt-4 px-2"
          onClick={() => handleSidebar()}
        >
          ❌
        </button>
      </div>
    </>
  );
};

export default Sidebar;
