import React from "react";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";

import { PopulerIcon } from "../icons/Icons";

const Content = () => {
  
  

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1660223355~hmac=cdb4f6412161ffbe4ebf4b120009fbbd"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />

      {/* Feed */}
      <FeedList />
    </main>
  );
};
export default Content;