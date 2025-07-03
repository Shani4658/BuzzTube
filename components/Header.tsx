"use client"
import React, { useEffect } from 'react'
import { RootState } from '../src/app/store/store';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import LOGO from "../public/Assets/logo.png"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../src/app/store/appSlice';
import { useRouter } from 'next/navigation';
import { SEARCH_SUGGESTION_URL } from '../Utils/Constants';
import ButtonList from './ButtonList';

type SuggestionItem = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
};


const Header = () => {
  const[searchQuery , setSearchQuery] = React.useState<string>("");
  const[suggestions , setSuggestions] = React.useState<SuggestionItem[]>([]);
  const[showSuggestions , setShowSuggestions] = React.useState<boolean>(true);

  console.log(searchQuery);
  const dispatch = useDispatch();
  const isToggle = useSelector((state: RootState) => state.app.isMenuOpen);
  const router = useRouter();

  useEffect(() => {
    
    const timer = setTimeout(()=>handleSuggestions(),200);
    return () =>{
      clearTimeout(timer);
    }
  },[searchQuery]);


  const handleSuggestions = async () => {
    // console.log("searchQuery",searchQuery);
    const response = await fetch(`${SEARCH_SUGGESTION_URL}${searchQuery}&key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json();
    // console.log(data.items);
    setSuggestions(data.items);
  }

  // console.log(SEARCH_SUGGESTION_URL);

  const NavigateToHome = () => {
    router.push(`/`);
  }
    return (
    

    <div className="bg-black mx-2 p-2 fixed top-0 left-0 right-0 z-20">
      <div className="grid grid-flow-col items-center text-gray-200">
        {/* Section 1. Hamburger + Logo */}
        <div className="flex col-span-1 justify-start">
          <GiHamburgerMenu
            className="text-gray-600 w-6 h-auto hover:cursor-pointer"
            onClick={() => dispatch(toggle())}
          />
          <Image
            onClick={NavigateToHome}
            src={LOGO}
            alt="logo"
            className="pb-2 object-cover object-center w-44 h-10 hover:cursor-pointer"
          />
        </div>

        {/* Section 2. Input + search icon */}
        <div className="relative w-full col-span-10">
          <div className="flex flex-row items-center gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              className="border border-gray-400 w-8/12 h-8 rounded-lg"
            />
            <button>
              <IoSearch className="h-6 w-auto text-gray-400" />
            </button>
          </div>

          {/* ⬇️ Suggestion box absolutely positioned inside this wrapper */}
          <div className="absolute top-10 w-[24rem] rounded-lg bg-white p-2 z-50 shadow-lg">
            <ul className="text-black">
              { showSuggestions && (
                suggestions.slice(0,7).map((s,index)=>(
                  <li key={index} className="hover:bg-gray-200 px-2 py-1 cursor-pointer">🔍{s.snippet.title}</li>
                ))
              )
                
              }
              {/* <li className="hover:bg-gray-200 px-2 py-1 cursor-pointer"> Suggestion 2</li>
              <li className="hover:bg-gray-200 px-2 py-1 cursor-pointer">🔍 Suggestion 3</li> */}
            </ul>
          </div>
        </div>

        {/* Section 3. Profile icon */}
        <div className="col-span-1 flex items-center justify-end">
          <FaUser className="h-8 w-auto" />
        </div>
      </div>

      {/* This stays in place */}
      <ButtonList />
    </div>

    
  )
}

export default Header