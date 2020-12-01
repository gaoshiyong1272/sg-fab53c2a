'use strict';



import cookie from "./uitls/cookie";
import storage from "./uitls/storage";
import pinyin from "./uitls/pinyin";
import Helper from "./uitls/helper";
import regExps from "./uitls/regExps";

const helper= (setting) =>{
  return new Helper(setting)
};

if (typeof window !== 'undefined') {
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
  regExps
}

