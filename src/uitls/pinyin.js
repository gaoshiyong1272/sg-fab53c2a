'use strict';

import simplePinyin from 'simple-pinyin';

class Pinyin {
  constructor() {

    /**
     * @description 转化类型
     * @type {{matchFullText: string}}
     * //blank，非拼音输出为空字符串
     * //空 跳过非拼音
     * //original 非拼音输出为原始字符
     */
    this.options = {
      matchFullText: ''
    }
  }

  /**
   * @description 获取全拼字符串
   * @param str
   * @returns {string}
   */
  getfullName(str) {
    this.options.matchFullText = 'original';
    let temp = simplePinyin(str, this.options);
    return temp.join('');
  }

  /**
   * @description 获取汉字的拼音首字母 汉英混排的时候汉语与英语之间使用"空格"隔开
   * @example getFirstLetter('妈妈跟我说再也不用担心我的 Chinese 不知道怎么念了。');
   * @param str
   */
  getFirstLetter(str) {
    this.options.matchFullText = 'original';
    let temp = simplePinyin(str, this.options);
    let len  = temp.length;
    let tempLetter = [];
    for(let i = 0; i < len ; i++) {
      if(temp[i].length > 1) {
        if(i === 0) {
          tempLetter.push(temp[i]);
        }
        else {
          tempLetter.push(' ');
          tempLetter.push(temp[i]);
        }
      }else {
        tempLetter.push(temp[i]);
      }
    }

    let newArr = tempLetter.join('').split(' ');
    let newArrLen = newArr.length;
    let firstLetter = [];
    for(let k = 0; k < newArrLen; k++) {
      if(newArr[k].length > 1) {
        firstLetter.push(newArr[k][0]);
      }else{
        firstLetter.push(newArr[k]);
      }
    }
    //console.log(firstLetter.join(''));
    return firstLetter.join('');

  }
}

export default new Pinyin()
