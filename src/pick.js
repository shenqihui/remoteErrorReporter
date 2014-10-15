$(window).on('error', function(e) {
  console.log(e)
})

"use strict";
// 用于监控是否能触发本页面的 storageEvent 。
var addEventListenerStr,
  eventListenerPrefix = "",
  removeEventListenerStr;
// 初始化选择动作的处理
if (window.addEventListener != undefined) {
  addEventListenerStr = "addEventListener";
  removeEventListenerStr = "removeEventListener"
} else if (window.attachEvent != undefined) {
  addEventListenerStr = "attachEvent";
  removeEventListenerStr = "detachEvent";
  eventListenerPrefix = "on";
} else {

}

var addMyEvent = function(el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false);
  } else if (el.attachEvent) {
    el['e' + ev + fn] = fn;
    el[ev + fn] = function(e) {
      el['e' + ev + fn](e || window.event);
    }
    el.attachEvent('on' + ev, el[ev + fn]);
  } else {
    el['e' + ev + fn] = fn;
    el[ev + fn] = function(e) {
      el['e' + ev + fn](e || window.event);
    }
    el['on' + ev] = el[ev + fn];
  }
};