'use strict';

import pinyin from "./pinyin";
import {Base64} from 'js-base64';
import cookie from "./cookie";
import storage from "./storage";
import {checkVarType} from  './common';


class Helpers {

  constructor(setting){
    this.setting = setting
  }

  /***
   * @description 判断变量类型
   * @param obj
   * @returns {*}
   */
	checkVarType(obj){
    return checkVarType(obj)
	}

  /**
   * @description 获取最近某时间断内的时间
   * @param lastDay 默认30天
   * @returns {number}
   */
  getTime(lastDay = 30) {
    let now = new Date().getTime();
    let randomDay = this.random({min: 0, max: lastDay}); //获取随机天数毫秒数字
    let randomHour = this.random({min: 0, max: 23}); //获取随机小时数
    let randomMinutes = this.random({min: 0, max: 59}); //获取随机分钟数
    let randomSeconds = this.random({min: 0, max: 59}); //获取随机秒数

    randomDay = randomDay * 24 * 60 * 60 * 1000;
    randomHour = randomHour * 60 * 60 * 1000;
    randomMinutes = randomMinutes * 60 * 1000;
    randomSeconds = randomSeconds * 1000;
    return now - randomDay + randomHour + randomMinutes + randomSeconds;
  }

  /**
   * @description 简单深拷贝
   * @param json
   * @returns {any}
   */
  cloneDeep(json){
    if(this.checkVarType(json) ==='object'
      || this.checkVarType(json) === 'array'
    ) {
      return JSON.parse(JSON.stringify(json));
    }
    return json;
  }

  /***
   * @description 随机数字值
   * @param min 最小数
   * @param max 最大数
   * @returns {*}
   */
  random(min, max) {
    let Range = max - min;
    let Rand = Math.random();
    return (min + Math.round(Rand * Range));
  }

  /**
   * @description 随机数组的值
   * @param arr {Array}
   */
  romdomArray(arr = []) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    let min = 0;
    let max = arr.length - 1;
    let index = this.random(min, max);
    return arr[index];
  }

  /**
   * @description 统一返回格式
   * @param data
   * @param code
   * @param message
   */
  callback(data = [], code = 200, message = 'success') {
    return {
      code,
      data,
      message
    }
  }


  /**
   * @description 检测查找数组是否在原数组中
   * @param sourceArray 原数组
   * @param findArray 查找数组
   * @returns {boolean}
   */
  inArray(sourceArray = [], findArray = []){
    if(this.checkVarType(sourceArray) === 'array' &&
      this.checkVarType(findArray) === 'array'
    ){
      let sourceArraylen = sourceArray.length;
      let find = this.cloneDeep(findArray);
      let temp = [];
      //console.log(findArray, sourceArray)
      for(let i =0 ;i < sourceArraylen;i++) {
        let sourceVal = sourceArray[i];
        for( let k = 0 ; k < find.length; k++) {
          if(find[k] === sourceVal) {
            temp.push(true);
            find.splice(k,1);
            break;
          }
        }
      }
      //console.log('kkkkk',findArray, temp);
      return findArray.length === temp.length;
    }
    else {
      return false;
    }
  }

  /**
   * @description 数组去重复
   * @param sourceArray
   * @returns {*[]}
   */
  repeatArray(sourceArray = []){
    if(this.checkVarType(sourceArray) !== 'array') {
      console.log('repeatArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')
    }
    return Array.from(new Set(sourceArray))
  }

  /***
   * @description 数组并集
   * @param sourceArray
   * @param findArray
   * @returns {*[]}
   */
  unionArray(sourceArray = [], findArray = []){
    if (this.checkVarType(sourceArray) !== 'array') {
      console.log('unionArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')

    }
    if (this.checkVarType(findArray) !== 'array') {
      console.log('unionArray.findArray.error', findArray);
      throw new Error('findArray参数类型是数组')
    }
    return Array.from(new Set(sourceArray.concat(findArray)))
  }

  /**
   * @description 数组交集
   * @param sourceArray
   * @param findArray
   * @returns {*[]}
   */
  intersectionArray(sourceArray = [], findArray = []){
    if (this.checkVarType(sourceArray) !== 'array') {
      console.log('intersectionArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')
    }
    if (this.checkVarType(findArray) !== 'array') {
      console.log('intersectionArray.findArray.error', findArray);
      throw new Error('findArray参数类型是数组')
    }
    return sourceArray.filter(function (v) {
      return findArray.indexOf(v) > -1
    })
  }

  /**
   * @description 数组差集
   * @param sourceArray
   * @param findArray
   * @returns {*[]}
   */
  differenceArray(sourceArray = [], findArray = []){
    if (this.checkVarType(sourceArray) !== 'array') {
      console.log('differenceArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')
    }
    if (this.checkVarType(findArray) !== 'array') {
      console.log('differenceArray.findArray.error', findArray);
      throw new Error('findArray参数类型是数组')
    }
    return sourceArray.filter(function (v) {
      return findArray.indexOf(v) === -1
    }).concat(findArray.filter(function (v) {
      return sourceArray.indexOf(v) === -1
    }))
  }

  /**
   * @description 检查对象或者数组是否为空
   * @param obj
   * @return boolean
   */
  isEmpty(obj) {
    if (this.checkVarType(obj) === 'array' ||
      this.checkVarType(obj) === 'object'
    ) {
      let str = JSON.stringify(obj);
      if (str === '{}' || str === '[]') {
        return true;
      } else {
        return false;
      }
    } else {
      console.log('isEmpty.error', obj);
      throw new Error('只支持数组与JSON对象格式');
    }
  }


  /**
   * @description 只支持数组与JSON对象格式遍历
   * @param source
   * @param callback
   */
  forEach(source, callback){
    if(this.checkVarType(source) === 'object' && !this.isEmpty(source)) {
      Object.keys(source).forEach(callback);
    }else if(this.checkVarType(source) === 'array') {
      source.forEach((item, index)=>{
        callback(index);
      });
    }else{
      console.log('forEach.error', source);
      throw new Error('只支持数组与JSON对象格式');
    }
  }

  /***
   * @description 转化为vue element UI选择插件数据格式
   * @example {key1: 'name',key1: 'name'}
   * @param data
   * @return Array
   */
  keyToSelectData(data) {
    let temp = [];
    let reg = /^[0-9]+$/;
    this.forEach(data, (key) => {
      let k = key;
      if (reg.test(key)) k = parseInt(key);
      temp.push({
        id: k,
        key: key,
        value: k,
        label: data[key],
        fullname: pinyin.getfullName(data[key]),
        firstLetter: pinyin.getFirstLetter(data[key]),
      });
    });
    return temp
  }

  /**
   * @description 转化为vue element UI选择插件数据格式
   * @example [{id: 1,name: 'name1'},{id: 1,name: 'name1'}];
   * @param data 原始数据
   * @param name 指定Name key
   * @param id 指定Name kei
   * @param force 字符串数字id是否强制转换数字类型
   */
  idToSelectData(data, name = 'name', id = 'id', force = true) {

    if (this.checkVarType(data) !== 'array') {
      console.log('idToSelectData() Data type not array', data);
      console.error('idToSelectData() Data type not array');
      return [];
    }

    let temp = [];
    this.forEach(data, (index) => {

      let regNumber = /^[0-9]+$/;
      let item = this.cloneDeep(data[index]);
      let numId = item[id];
      if (numId !== '') {

        //字符串数字id转number
        if (force && this.checkVarType(item[id]) === 'string' && regNumber.test(item[id])) {
          numId = parseInt(item[id]);
        }
        if(force) {
          item['id'] = numId;
          item['key'] = numId;
        }else {
          if (!item['id']) item['id'] = numId;
          if (!item['key']) item['key'] = numId;
        }

        item['value'] = numId;
        item['label'] = item[name];
        item['fullname'] = pinyin.getfullName(item[name]);
        item['firstLetter'] = pinyin.getFirstLetter(item[name]);
        temp.push(item);
      }
    });
    //console.log('idToSelectData', name, id, temp);
    return temp
  }

  /**
   * @deprecated 检查值是否在数组中或者对象中并返回结果
   * @param list
   * @param value
   * @param keyName
   * @param strict 是否严格判断
   * @example
   * [{id: 1,name:'gao'},{id: 2,name:'wu'}]
   * OR
   * {'1':{id: 1,name:'gao'},'2':{id: 2,name:'wu'}}
   * @return []
   */
  isKeyInLists(list, value, keyName='id', strict = false){
    let items = null;
    if(this.checkVarType(list) === 'array'
      || this.checkVarType(list) === 'object'
    ){
      this.forEach(list,(index)=>{
        let item = list[index];
        //严格判断
        if (strict) {
          if (value === list[index][keyName]) {
            items = item;
          }
          //松散判断
        } else {
          if (value == list[index][keyName]) {
            items = item;
          }
        }
      });
      return items;
    }
    else{
      console.log('isKeyInLists.error', list);
      throw new Error('只支持数组与JSON对象格式');

    }
  }

  /**
   * @description 查询列表某组值并返回值
   * @param list
   * @param values
   * @param findKey
   * @param strict 是否严格判断
   *
   * @returns {[]}
   */
  getValuesForList( list, values = [], findKey = 'value', strict = true) {
    let temp = [];
    //对象与数组处理
    if (this.checkVarType(list) === 'object' ||
      this.checkVarType(list) === 'array'
    ) {
      values.map((val) => {
        let item = this.isKeyInLists(list, val, findKey, strict);
        if (item !== null) temp.push(item);
      })
    } else {
      console.error('数据类型错误')
    }
    return temp;
  }

  /**
   * @deprecated 获取数组或者对象中的摸个key的value值
   * @param list
   * @param keyName
   * @example
   * [{id: 1,name:'gao'},{id: 2,name:'wu'}]
   * OR
   * {'1':{id: 1,name:'gao'},'2':{id: 2,name:'wu'}}
   * @return []
   */
  getListKeyForValue(list, keyName = 'id'){
    let arr = [];
    if (this.checkVarType(list) === 'array'
      || this.checkVarType(list) === 'object'
    ) {
      this.forEach(list, (index) => {
        let item = list[index];
        arr.push(item[keyName]);
      });
      return arr;
    } else {
      console.log('getListKeyForValue.error', list);
      throw new Error('只支持数组与JSON对象格式');
    }
  }

  /**
   * @description 删除参数中[all|''|null|undefined]
   * @param source
   * @param ignoreKey 忽略的key
   */
  deleteParamEmptyKey(source, ignoreKey = [] ){
    let data = this.cloneDeep(source); //防止对象浅拷贝
    this.forEach(data, (key) => {
      if(ignoreKey.length > 0) {
        if(!this.inArray(ignoreKey,[key])) {
          if (data[key] === 'all' || data[key] === '' || data[key] === null  || data[key] === undefined ) {
            delete data[key];
          }
        }
      }
      else{
        if (data[key] === 'all' || data[key] === '' || data[key] === null || data[key] === undefined) {
          delete data[key];
        }
      }

    });
    return data;
  }


  checkPath(path, params) {
    let arr = path.split('/');
    this.forEach(params, (key) => {
      let val = params[key];
      for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) {
          arr.splice(i, 1, ':' + key);
        }
      }
    });
    return arr.join('/');
  }

  /**
   * @description Menu Tree
   * @param paths
   * @param path
   */
  isFindPath(paths, path) {
    let temp = [];
    let deep = (tree, parent) => {
      for (let i = 0; i < tree.length; i++) {
        if (tree[i]['children'] && tree[i]['children'].length > 0) {
          deep(tree[i]['children']);
        } else {
          temp.push(tree[i]['parentFullPath']);
          //console.log('parentFullPath', tree[i]['parentFullPath']);
        }
      }
    };
    deep(paths);

    let flag = false;
    for (let j = 0; j < temp.length; j++) {
      let fullname = this.checkPath(path.path, path.params);
      //console.log('fullname', fullname , temp[j]);
      if (fullname === temp[j]) {
        flag = true;
        break;
      }
    }
    //console.log('flag', flag, this.checkPath(path.path, path.params));
    return flag;
  }


  /**
   * @description url base64.encode
   * @param row
   */
  paramsBase64Encode(row){
    return Base64.encodeURI(JSON.stringify(row));
  }

  /**
   * @description url base64.decode
   * @param base64Str
   */
  paramsBase64Decode(base64Str) {
    try{
      return JSON.parse(Base64.decode(base64Str));
    }
    catch (e) {
      return {};
    }

  }

  /**
   * @description 对象转url参数
   * @param params
   */
  jsonToParams(params){
    params = this.cloneDeep(params);
    let paramsStr = '';
    let count = 0;
    this.forEach(params, (key) => {
      if(count === 0) {
        paramsStr = `${key}=${params[key]}`;
      }
      else{
        paramsStr += `&${key}=${params[key]}`;
      }
      count++;
    });
    return paramsStr;
  }


  /**
   * @description 字符串截取
   * @param val
   * @param len
   * @param useType {String} 返回值类型 默认：''=>返回截取字符串  len=> 返回字符串长度
   */
  cutStringLen(val, len = 10, useType='') {
    let fix = '...';
    let newLength = 0;
    let newStr = "";
    let chineseRegex = /[^\x00-\xff]/g;
    let singleChar = "";
    let strLength = val.replace(chineseRegex, "**").length;
    for (let i = 0; i < strLength; i++) {
      singleChar = val.charAt(i).toString();
      if (singleChar.match(chineseRegex) != null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }
    if (strLength > len) {
      newStr += fix;
    }

    if (useType === 'len') {
      return newLength
    }
    return newStr;
  }

  /***
   * 解析url地址
   * @param url
   * @returns {}
   */
  parseURL(url) {
    if (!url) url = window.location.href;
    let a = document.createElement('a');
    a.href = url;
    return {
      source: url,
      protocol: a.protocol.replace(':', ''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function () {
        let ret = {},
          seg = a.search.replace(/^\?/, '').split('&'),
          len = seg.length, i = 0, s;
        for (; i < len; i++) {
          if (!seg[i]) {
            continue;
          }
          s = seg[i].split('=');
          if (s[1]) {
            ret[s[0]] = s[1];
          }
        }
        return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
      hash: a.hash.replace('#', ''),
      path: a.pathname.replace(/^([^\/])/, '/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
      segments: a.pathname.replace(/^\//, '').split('/')
    };
  }

  /**
   * 获取参数值
   * @param key
   * @returns {null|*}
   */
  getParmater(key) {
    let params = this.parseURL()['params'];
    if (params && params[key]) {
      return params[key];
    } else {
      return null;
    }
  }

  /**
   * @description 获取用户登录token
   */
  getToken() {
    if(this.setting && this.setting['userInfoSaveCookieKey']) {
      let token = cookie.get(this.setting['userInfoSaveCookieKey']);
      if (token) {
        return cookie.get(this.setting['userInfoSaveCookieKey']);
      } else {
        this.removeUserInfo();
        return token;
      }
    }
    else {
      throw new Error('无配置信息选项');
    }
  }

  /***
   * @description 获取用户信息
   */
  getUserInfo() {
    if (this.setting && this.setting['userInfoSaveStoreKey']) {
      if (this.getToken) {
        return storage.localStore.get(this.setting['userInfoSaveStoreKey']);
      } else {
        return null;
      }
    }
    else {
      throw new Error('无配置信息选项');
    }

  }

  /**
   * @description 退出登录
   */
  removeUserInfo() {
    if (this.setting && this.setting['userInfoSaveCookieKey']) {
      cookie.remove(this.setting['userInfoSaveCookieKey']);
      cookie.remove('demandCount');
    } else {
      throw new Error('无配置信息选项');
    }

    if (this.setting && this.setting['userInfoSaveStoreKey']) {
      storage.localStore.remove(this.setting['userInfoSaveStoreKey']);
    } else {
      throw new Error('无配置信息选项');
    }
  }

  /***
   * @description 根据路由获取商品类型
   * @param markeConstant
   * @param route
   */
  getMarketType(route, markeConstant) {
    if(!markeConstant) {
      markeConstant = {
        SHOP: '1',
        CAKE: '2',
        BOOK: '4',
        MEDIA: '5',
        TRAVEL: '6'
      }
    }
    let routeArr = route.path.split('/');
    let typeKey = routeArr[2].toLocaleUpperCase();
    console.log('routeArr', markeConstant[typeKey],typeKey);
    return markeConstant[typeKey];
  }

  /***
   * @description 根据路由获取商品类型路由名称
   * @param route
   * @param index
   */
  getMarketRouteListName(route,index=2){
    let routeArr = route.path.split('/');
    let typeKey = routeArr[index].toLocaleLowerCase();
    console.log('routeArr', typeKey, index);
    return `/market/${typeKey}/list`;
  }

  /***
   * @description 获取路由某段值
   * @param route
   * @param index
   */
  getMarketRouteKey(route, index=0) {
    let routeArr = route.path.split('/');
    let typeKey = routeArr[index].toLocaleLowerCase();
    console.log('routeArr', typeKey, index);
    return typeKey
  }

  /**
   * @description 判断俩个需要处理的数字谁的小数点后位数多，
   * 以多的为准，值乘以10的小数位的幂数，相加以后，再除以10的小数位的幂数
   * @param currentNum
   * @param targetNum
   */
  checkFloatMore(currentNum, targetNum){
    let sq1, sq2;
    try {sq1 = currentNum.toString().split(".")[1].length;}
    catch (e) {sq1 = 0;}
    try {sq2 = targetNum.toString().split(".")[1].length;}
    catch (e) {sq2 = 0;}
    return Math.pow(10, Math.max(sq1, sq2));
  }

  /**
   * @description 两个小数相加
   * @param currentNum
   * @param targetNum
   * @return number
   */
  addFloatNumber(currentNum, targetNum){
    let power = this.checkFloatMore(currentNum, targetNum);
    return (this.multiplyFloatNumber(currentNum, power) + this.multiplyFloatNumber(targetNum, power )) / power;
  }

  /**
   * @description 两个小数减
   * @param currentNum
   * @param targetNum
   * @return number
   */
  cutFloatNumber(currentNum, targetNum) {
    let power = this.checkFloatMore(currentNum, targetNum);
    return (this.multiplyFloatNumber(currentNum, power) - this.multiplyFloatNumber(targetNum, power)) / power;
  }

  /**
   * @description 计算两个小数相乘
   * @param currentNum
   * @param targetNum
   * @returns {number}
   */
  multiplyFloatNumber(currentNum, targetNum){
    let m = 0, s1 = currentNum.toString(), s2 = targetNum.toString();
    try {m += s1.split(".")[1].length;} catch (e) {}
    try {m += s2.split(".")[1].length;} catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  }

  /**
   * @description 计算两个小数相除
   * @param currentNum
   * @param targetNum
   * @returns {number}
   */
  divisionFloatNumber(currentNum, targetNum){
    let t1 = 0, t2 = 0, r1, r2;
    try {t1 = currentNum.toString().split(".")[1].length} catch (e) {}
    try {t2 = targetNum.toString().split(".")[1].length} catch (e) {}
    r1 = Number(currentNum.toString().replace(".", ""))
    r2 = Number(targetNum.toString().replace(".", ""))
    return this.multiplyFloatNumber(r1 / r2, Math.pow(10, t2 - t1));
  }

  /**
   * @description 去掉左边指定字符串
   * @param str
   * @param replaceStr
   * @returns {string}
   */
  tirmL(str = '', replaceStr = ',') {
    if (!str || this.checkVarType(str) !== 'string') {
      return str;
    }
    let homeReg = new RegExp(`^(${replaceStr})(.+)$`);
    let homeMatchStr = str.match(homeReg);
    if (homeMatchStr) str = homeMatchStr[2];
    return str;
  }

  /**
   * @description 去掉右边指定字符串
   * @param str
   * @param replaceStr
   * @returns {string}
   */
  tirmR(str = '', replaceStr = ',') {
    if (!str || this.checkVarType(str) !== 'string') {
      return str;
    }
    let endReg = new RegExp(`^(.+)(${replaceStr})$`);
    let endMatchStr = str.match(endReg);
    if (endMatchStr) str = endMatchStr[1];
    return str;
  }

  /**
   * @description 去掉两部指定字符串
   * @param str
   * @param replaceStr
   * @return {string}
   */
  tirm(str = '', replaceStr = ',') {
    str = this.tirmL(str, replaceStr);
    str = this.tirmR(str, replaceStr);
    return str;
  }

  /**
   * @description 搜索到匹配关键字高亮处理
   * @param str {string} 需要检索的字符串
   * @param keyword {string|array} 搜索关键字
   * @param options {object}
   * @param options.tag 有效的html中有效的tag标签
   * @param options.color 匹配的字符高亮颜色 默认：red
   * @param options.weight
   * ，css font-weight有效值，默认：normal
   * @returns {*}
   */
  searchHigh(str, keyword, options = {}) {
    try {
      let __option = {
        tag: 'span',
        color: 'red',
        weight: 'normal',
      };
      if (this.checkVarType(keyword) === 'array') {
        keyword = keyword.join('|');
      } else if (this.checkVarType(keyword) === 'string') {
        keyword = keyword.trim();
      } else {
        throw new Error('关键字类型错误')
      }
      let opt = Object.assign({}, __option, options);
      let reg = new RegExp(`(${keyword})`, 'ig');
      return str.replace(reg, `<${opt.tag} style="color:${opt.color};font-weight: ${opt.weight}">$1</${opt.tag}>`);
    } catch (e) {
      console.error(e)
      return str;
    }
  }

  /**
   * @description 加载js文件
   * @param src
   * @param done
   */
  sripts(src, done) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    document.body.appendChild(s);
    s.onload = () => {
      done();
    }
  }

  /**
   * @description 加载js|css文件
   * @param arr {string|array} js地址 ['http://www.xxx.com/xxx.js'] | 'http://www.xxx.com/xxx.js'
   * @param type {string} // type=css|js
   * @return {Promise}
   */
  loadFile(arr, type = 'js') {
    let loader = [];
    if (this.checkVarType(arr) === 'string' || this.checkVarType(arr) === 'array') {
      if (this.checkVarType(arr) === 'string') {
        arr = [arr];
      }
      let len = arr.length;
      return new Promise((resolve) => {
        arr.map((value) => {
          let fnName = 'sripts';
          if (type === 'css') {
            fnName = 'css';
          }
          this[fnName](value, () => {
            loader.push(value);
            if (len === loader.length) {
              resolve(loader);
            }
          })
        });
      });
    } else {
      console.error('传入的参数格式错误', arr);
      throw Error('传入的参数格式错误');
      return new Promise((resolve, reject) => {
        reject('传入的参数格式错误')
      });
    }

  }

  /**
   * @description 加载文件
   * @param url
   * @param done
   */
  css(url, done) {
    let ele = document.createElement('link');
    ele.type = "text/css";
    ele.rel = "stylesheet";
    ele.href = url;
    document.head.appendChild(ele);
    ele.onload = () => {
      setTimeout(() => {
        done();
      }, 500);
    }
  }

  /**
   * @description 过滤html标签
   * @param html html文本
   * @param allowed 允许通过的标签 例如：'<p><a><li>'
   * @returns {string|XML}
   */
  filterHtml(html, allowed) {
    allowed = allowed == undefined ? '' : allowed;
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return html.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
  };

  /**
   * @description 获取随机字符串
   * @param len {number}
   * @returns {string}
   */
  randomChar(len) {
    let arrstring = 'qwertyuiopasdfghjklzxcvbnm123456789QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    let str = '';
    for (let i = 0; i < len; i++) {
      let index = this.random(0, arrstring.length - 1);
      str += arrstring[index];
    }
    return str;
  }


}

export default Helpers;
