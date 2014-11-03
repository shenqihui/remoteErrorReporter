var reportObj = {
    href: location.href,
    userAgent: navigator.userAgent
  }, reportStr;

// 监控网页错误情况
//接受三个参数,分别是错误信息,错误页面的url和错误行号
window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
  // 错误信息
  reportObj.message = errorMessage || "";

  reportObj.detailMessage = errorObj.message || "";
  reportObj.detailStack = errorObj.stack || "";
  // 错误文件
  reportObj.scriptURI = scriptURI || "";
  // 错误行
  reportObj.lineNumber = lineNumber || "";
  // 错误列
  reportObj.columnNumber = columnNumber || "";
  // 暂时支持高级浏览器的 JSON 化，后期再处理其他旧版本浏览器。
  reportStr = JSON.stringify(reportObj);
  // console.log(reportStr);
}






/*

// var json = (new Function('return '+param +';'))();
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
};*/