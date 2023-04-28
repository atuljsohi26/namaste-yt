import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="hamburger-logo"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="usr-icn"
          src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
        />
      </div>
    </div>
  );
};

export default Head;
