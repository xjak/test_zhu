console.log("popup index=>", this);

const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {

  console.log("popup sendmessageid", sendMessageId);

  sendMessageId.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

      console.log('tabs', tabs);

      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          url: chrome.runtime.getURL("images/111.png"),
          imageDivId: `${guidGenerator()}`,
          tabId: tabs[0].id,
        },
        function (response) {
          console.log("popup response", sendMessageId);

          window.close();
        }
      );
      function guidGenerator() {
        const S4 = function () {
          return (((1 + Math.random()) * 0x10000) | 0)
            .toString(16)
            .substring(1);
        };
        return (
          S4() +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          S4() +
          S4()
        );
      }
    });

    
  };
}

// document.querySelector("#close").addEventListener("click", (e) => {
//   console.log(e);
// });
