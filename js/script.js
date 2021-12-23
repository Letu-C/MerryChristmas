const words = [
  "我知道现在是什么时候。",
  "但这并不能阻止我满心感激。",
  "我很感激今年能与你相识。",
  "感谢一路走来的陪伴。",
  "我圣诞节不要太多，我只想让宝贝此刻感到被爱。",
  "愿你得到你想要的一切，让你的现在和未来充满幸福。",
  "   ",
  "我会一直在的，宝\(^o^)/~",
  "圣诞快乐！"
];
let i = 0;
let timer;
// speed in ms
let deleteDelay = 2000; // 倒退删除时间
let typeSpeed = 100; // 文字出现速度
let delSpeed = 50;  // 文字清除速度

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      delay(function () {
        deletingEffect(); // do stuff
      }, deleteDelay); // end delay
      // deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, typeSpeed);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      }
      // else {
      //   i = 0;
      // }
      typingEffect();
      return false;
    }

    timer = setTimeout(loopDeleting, delSpeed);
  };

  loopDeleting();
}

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

typingEffect();