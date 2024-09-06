import { performTraceroute } from "@/lib/tracer";

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "performTraceroute") {
    performTraceroute(request.host)
      .then((result) => sendResponse({ result }))
      .catch((error) => sendResponse({ error: error.message }));
    return true; // Will respond asynchronously.
  }
});

export {};
