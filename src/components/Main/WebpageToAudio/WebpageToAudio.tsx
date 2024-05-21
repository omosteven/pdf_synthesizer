/*global chrome*/
// @ts-nocheck

import { useEffect, useState } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

import { Button } from "../../ui";

import "./WebpageToAudio.scss";

import Select from "../../ui/Select";

const WebpageToAudio = () => {
  const [tabsList, setTabsList] = useState([]);

  const [selectedTab, selectTab] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // const [tabContent, setTabContent] = useState("");

  const { speak, cancel, speaking } = useSpeechSynthesis();

  const playAudio = (tabContent) => {
    speak({
      text: tabContent,
    });
  };

  // const tabRequestHandler = () => {
  //   try {
  //     chrome.runtime.sendMessage(
  //       {
  //         tabId: 528143985,
  //         action: "GET_TAB_CONTENT",
  //       },
  //       (response) => {
  //         const { data, status } = response || {};
  //         console.log("response here", { data, status });
  //         setTabContent(data);
  //         setErrorMessage(status ? "" : "An error occurred");
  //         playAudio(data);
  //       }
  //     );
  //   } catch (ex) {
  //     console.log("request error", ex);
  //   }
  // };

  const getTabsList = async () => {
    try {
      const allTabs = await chrome.tabs.query({
        // active: true,
        //   currentWindow: true,
      });

      const getActiveTab = allTabs?.find(({ active }) => active === true);

      setTabsList(allTabs);

      selectTab(getActiveTab?.id);
    } catch (e) {
      console.log("error");
    }
  };

  const getTabContent = async (tabId) => {
    try {
      // const [tab] = await chrome.tabs.query({
      //   active: true,
      //   //   currentWindow: true,
      // });

      const [{ result }] = await chrome.scripting.executeScript({
        target: { tabId: selectedTab },
        func: () => document.documentElement.innerText,
      });

      return { data: result, status: true };
    } catch (error) {
      console.log("error", error);
      return { status: false };
    }
  };

  const sendTabRequest = async () => {
    setErrorMessage("");

    const { data, status } = await getTabContent();

    // setTabContent(data);
    setErrorMessage(status ? "" : "An error occurred");
    playAudio(data);
  };

  const handleAudioAction = () => {
    speaking ? cancel() : sendTabRequest();
  };

  const handleSelectTab = (tabId) => {
    console.log({ tabId });
    selectTab(Number(tabId));
  };

  useEffect(() => {
    getTabsList();
  }, []);

  return (
    <div className="webpage-to-audio">
      <h4>Listen To Your Web Tab Content At a Go</h4>

      <section>
        {errorMessage && <p>Something went wrong. Please try again.</p>}

        <Select
          label="Choose Which Tab To Read From"
          options={tabsList?.map(({ title, id }) => ({
            label: title,
            value: id,
          }))}
          value={selectedTab}
          onChange={handleSelectTab}
        />

        <Button
          onClick={handleAudioAction}
          className={speaking ? "invert" : ""}
          text={speaking ? "Stop Listening" : "Start Listening"}
        />
      </section>
    </div>
  );
};

export default WebpageToAudio;
