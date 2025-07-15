document.addEventListener("DOMContentLoaded", () => {
  loadLinks();

  document.getElementById("addBtn").addEventListener("click", async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const url = tab.url;

      chrome.storage.local.get({ savedSites: [] }, (result) => {
        const sites = result.savedSites;
        if (!sites.includes(url)) {
          sites.push(url);
          chrome.storage.local.set({ savedSites: sites }, () => {
            console.log("Site added:", url);
            loadLinks();
          });
        } else {
          console.log(" Site already saved:", url);
        }
      });
    } catch (err) {
      console.error(" Failed to add site:", err);
    }
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    chrome.storage.local.set({ savedSites: [] }, () => {
      console.log("🧹 All saved sites cleared.");
      loadLinks(); // Refresh UI
    });
  });
});

function loadLinks() {
  chrome.storage.local.get({ savedSites: [] }, (result) => {
    const siteList = document.getElementById("siteList");
    siteList.innerHTML = "";
    result.savedSites.forEach((url) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.textContent = url;
      li.appendChild(a);
      siteList.appendChild(li);
    });
  });
}
