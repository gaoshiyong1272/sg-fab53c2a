'use strict';

import cookie from "./uitls/cookie";
import storage from "./uitls/storage";
import pinyin from "./uitls/pinyin";
import Helper from "./uitls/helper";

const helper= (setting) =>{
  return new Helper(setting)
};

export default {
  cookie,
  storage,
  pinyin, helper

}

