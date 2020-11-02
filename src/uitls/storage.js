'use strict';

import helper from "./helper";

/**
 * 本地Session存储
 */
class SessionStorage {
  constructor() {
    this.regKey = /^[a-zA-Z_]+$/;
    this.store = window.sessionStorage ? window.sessionStorage : null;
  }

  check(key) {
    if (!this.store) throw "Browser don't support sessionStorage";
    if (!this.regKey.test(key)) throw "Key the rules is error";
  }

  /***
   * @description 设置sessionStorage值
   * @param key [a-zA-Z_]
   * @param value
   */
  set(key, value) {
    this.check(key);
    /**数组与对象需要序列号**/
    if (helper.checkVarType(value) === 'object'
      || helper.checkVarType(value) === 'array'
    ) {
      value = JSON.stringify(value);
    }
    this.store.setItem(key, value);
  }

  /**
   * @description 获取sessionStorage值
   * @param key
   * @returns {string|null}
   */
  get(key) {
    this.check(key);
    let value = this.store.getItem(key);
    try{
      value = JSON.parse(value);
    }catch (e) {
      console.log('不是对象或者数组')
    }
    return value;
  }

  /**
   *  @description 删除sessionStorage键值
   * @param key
   */
  remove(key) {
    this.check(key);
    this.store.removeItem(key);
  }
}

/**
 * 本地Local存储
 */
class LocalStorage {
  constructor() {
    this.regKey = /^[a-zA-Z_]+$/;
    this.store = window.localStorage ? window.localStorage : null;
  }

  check(key) {
    if (!this.store) throw "Browser don't support localStorage";
    if (!this.regKey.test(key)) throw "Key the rules is error";
  }

  getTime() {
    return Math.floor(new Date().getTime() / 1000);
  }

  /***
   * @description 设置LocalStorage值
   * @param key {string}
   * @param value { Object|Array|string }
   * @param expire {number} 小时单位
   */
  set(key, value, expire) {
    this.check(key);

    /**数组与对象需要序列号**/
    if (helper.checkVarType(value) === 'object'
      || helper.checkVarType(value) === 'array'
    ) {
      value = JSON.stringify(value);
    }

    /**已设置过期期间处理**/
    if (expire && typeof expire === 'number') {
      let expireKey = `${key}_expire_date`;
      let expireValue = this.getTime() + expire * 60 * 60;
      this.store.setItem(expireKey, expireValue);
      this.store.setItem(key, value);
    } else {
      this.store.setItem(key, value);
    }
  }

  /**
   * @description 获取LocalStorage值
   * @param key {string}
   * @returns {string|null}
   */
  get(key) {
    this.check(key);
    let value = this.store.getItem(key);

    /**有值**/
    if (value) {
      let expireKey = `${key}_expire_date`;
      let time = this.store.getItem(expireKey);
      /**判断是否设置有效期**/
      if (time) {
        /**数据已过期**/
        if (time < this.getTime()) {
          this.remove(key);
          this.remove(expireKey);
          return null;
        } else {
          try {
            return JSON.parse(value);
          } catch (e) {
            console.log('不是对象或者数组')
            return value;
          }
        }
      } else {
        try {
          return JSON.parse(value);
        } catch (e) {
          console.log('不是对象或者数组')
          return value;
        }
      }
    } else {
      return null;
    }
  }

  /**
   *@description 删除LocalStorage值
   * @param key
   */
  remove(key) {
    this.check(key);
    let expireKey = `${key}_expire_date`;
    this.store.removeItem(key);
    let time = this.store.getItem(expireKey);
    if (time) this.store.removeItem(expireKey);
  }
}

export default {
  sessionStore: new SessionStorage(),
  localStore: new LocalStorage()
};
