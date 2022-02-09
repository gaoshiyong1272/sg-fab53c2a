'use strict';

import cookie from "./uitls/cookie";
import storage from "./uitls/storage";
import pinyin from "./uitls/pinyin";
import Helper from "./uitls/helper";
import regExps from "./uitls/regExps";

const helper= (setting) =>{
  return new Helper(setting)
};

const install = function (Vue, setting) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$helper = helper(setting);
  Vue.prototype.$xdHelper = helper(setting);
  Vue.prototype.$xdCookie = cookie;
  Vue.prototype.$xdStorage = storage;
  Vue.prototype.$xdRegExps = regExps;
  Vue.prototype.$xdPinyin = pinyin;
  console.log('初始化成功！','Vue.use(gxd-helper)=> options', setting);
};

//浏览器使用
if (typeof window !== 'undefined') {
  if(window['Vue']) {
    install(window['Vue'])
  }
  window['xdHelper'] = helper;
  window['xdCookie'] = cookie;
  window['xdStorage'] = storage;
  window['xdPinyin'] = pinyin;
  window['xdRegExps'] = regExps;
}






export default {
  cookie,
  storage,
  pinyin,
  helper,
  regExps,
  install,
}

