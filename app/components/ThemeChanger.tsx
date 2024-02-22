"use client"

import { useTheme } from "next-themes"
import { useIsClient } from "../utils/hooks";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    const isClient = useIsClient();

    if(!isClient) {
      return <div className="theme-btn_loader"></div>
    }
  
  
    return (
      <>
        {theme === "light" ?  <button className="theme-btn" onClick={() => setTheme('dark')}><Moon className="theme-btn_icon" /></button> :
        <button className="theme-btn" onClick={() => setTheme('light')}><Sun  className="theme-btn_icon"/></button>
        }
      </>
    )
  }