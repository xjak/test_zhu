console.log("content init=>", this);

const $ = (name) => {
  const el = document.querySelector(name);
  if (el) {
    el.__proto__.$remove = () => el.parentNode.removeChild(el);
  } else {
    throw Error("$ " + name + " is not");
  }

  return el;
};

const $all = (name) => {
  const el = Array.from(document.querySelectorAll(name));
  el.forEach((v) => {
    v.__proto__.$remove = () => v.parentNode.removeChild(v);
  });
  return el;
};

let timer = null;

console.log("content body=>", window.location, $("body"));

// 登录窗口
const hideDom = () => {
  try {
    $("button.Button.Modal-closeButton.Button--plain").click();
  } catch (e) {}
};

const init = () => {
  // 采用remove操作DOM 优化内存占用
  $(".QuestionButtonGroup").$remove();
  $(".Question-sideColumn.Question-sideColumn--sticky").$remove();
  $(".QuestionHeader-main.QuestionHeader-footer-main").$remove();
};

const obs = new MutationObserver((dom, ob) => {
  console.log("MutationObserver===> ", dom, ob);

  // 登录识别
  if (dom[0] && dom[0].addedNodes.length) {
    hideDom();
    console.log("Observer===>1 ", dom[0].addedNodes[0].outerHTML);
  }
});

obs.observe(document.body, { childList: true });

window.onload = () => {
  setTimeout(init, 400);
  console.log("onload,,,");
};

// $("body").style.background = "#000";
// $("#head").style.background = "#aaa";

// 消息传递
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log("content", request);

//   const img = document.createElement("img");
//   img.id = request.imageDivId;
//   img.setAttribute("src", request.url);
//   img.className = "slide-image";
//   $("body").prepend(img);

//   setTimeout(() => {
//     console.log(111, $(`#${request.imageDivId}`));
//     if ($(`#${request.imageDivId}`)) {
//       $(`#${request.imageDivId}`).addEventListener("click", (e) => {
//         e.target.parentNode.removeChild(e.target);
//       });
//     }
//   }, 1000);

//   sendResponse({ fromcontent: "This message is from content.js" });
// });
