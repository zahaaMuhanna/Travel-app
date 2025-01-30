import { handleSubmit } from "./handleSubmit.js";

document.getElementById("travel-form").addEventListener("submit", handleSubmit);

// Register the service worker for offline capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("Service Worker Registration Failed: ", err));
  });
}
