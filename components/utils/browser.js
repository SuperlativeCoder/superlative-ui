/* global window */
import ExecUtils from './exec';

// 设备系统类型标识
const IOS_REGEXP = /iphone|ipad|ipod/i;
const ANDROID_REGEXP = /android/i;

let ua = '';
let isIPhoneX = false;
if (ExecUtils.canUseDOM) {
  ua = window.navigator.userAgent;
  isIPhoneX = window.isiPhoneX;
}

const BrowserUtils = {
  isAndroid: ua ? ANDROID_REGEXP.test(ua) : false,
  isIOS: ua ? IOS_REGEXP.test(ua) : false,
  isIPhoneX,
};

export { IOS_REGEXP, ANDROID_REGEXP };
export default BrowserUtils;
