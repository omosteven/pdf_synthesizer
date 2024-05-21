const getTabContent = async (tabId) => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      //   currentWindow: true,
    });

    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.documentElement.innerText,
    });
    console.log("async function completed", tab.id);

    return { data: result, status: true };
  } catch (error) {
    console.error("Error:", error);
    console.log("async function completed");

    return { status: false };
  }
};

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  const { tabId, action } = message || {};
  if (action === "GET_TAB_CONTENT") {
    try {
      const { data, status } = await getTabContent(tabId);
      console.log("tab processed");
      sendResponse({ data: "data", status });
    } catch (error) {
      // Handle errors here
      console.error("Error222:", error);
      console.log("tab error");
      sendResponse({ status: false });
    }
  }
  console.log("true sent");
  return true;
});
