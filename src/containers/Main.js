import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import LanguageNotification from "../components/LanguageNotification/LanguageNotification";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const getInitialLanguage = () => {
  const browserLanguages = navigator.languages || [navigator.language];
  return browserLanguages.some(language =>
    language.toLowerCase().startsWith("es")
  );
};

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isSpanish, setIsSpanish] = useLocalStorage(
    "isSpanish",
    getInitialLanguage()
  );
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <LanguageProvider
          value={{isSpanish: isSpanish, changeLanguage: changeLanguage}}
        >
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <LanguageNotification />
              <Greeting />
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
              <ScrollToTopButton />
            </>
          )}
        </LanguageProvider>
      </StyleProvider>
    </div>
  );
};

export default Main;
