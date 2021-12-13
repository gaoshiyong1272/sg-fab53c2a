
class RegExps {
  constructor() {
    this.regChinese = '([\u4E00-\uFA29]|[\uE7C7-\uE7F3])';
    this.letter = '[a-zA-Z]';
    this.letterD = '[A-Z]';
    this.num = '[0-9]';
    this.email = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    this.regChineseAndLetter = "([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z])";
    this.numberAndletter = "([0-9]|[a-zA-Z])";
    this.character = "(\.)";
    this.rankname = "([a-zA-Z0-9\.])";
  }

  /**
   * @description 获取任意长度数字和大小写字母
   * @returns {RegExp}
   */
  getAnyNumAndLetter() {
    return new RegExp(`^${this.numberAndletter}*$`);
  }

  /**
   * @description 获取固定长度数字和大小写字母
   * @returns {RegExp}
   */
  getFixedLenNumAndLetter(min = 0, max = 10) {
    return new RegExp(`^${this.numberAndletter}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度任意字符集正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenChar(min = 0, max = 10) {
    return new RegExp(`^${this.character}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度大小写字母和点正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getRank(min = 0, max = 10) {
    return new RegExp(`^${this.rankname}{${min},${max}}$`);
  }

  /**
   * @description 电话正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getTel(min = 7, max = 20) {
    return new RegExp(`^${this.num}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度大小写字母正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenLetter(min = 0, max = 10) {
    return new RegExp(`^${this.letter}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度大写字母正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenUppercaseLetter(min = 0, max = 10) {
    return new RegExp(`^${this.letterD}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度数字长度正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenNumber(min = 0, max = 10) {
    return new RegExp(`^${this.num}{${min},${max}}$`);
  }

  /**
   * @description 获取任意长度数字正则
   * @returns {RegExp}
   */
  getAnyLenNumber() {
    return new RegExp(`^${this.num}*$`);
  }

  /**
   * @description 获取邮件正则表达式
   * @returns {RegExp}
   */
  getEmail() {
    return this.email;
  }

  /**
   * @description 获取固定长度汉字正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenChinese(min = 0, max = 10) {
    return new RegExp(`^${this.regChinese}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度汉字与字母长度正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenChineseAndLetter(min, max) {
    return new RegExp(`^${this.regChineseAndLetter}{${min},${max}}$`);
  };

  /**
   * @description 获取网络地址文件名称
   * @example getUpdateFileNmae('https://admin.jufubao.cn/index.html'); => index.html
   * @param url
   * @returns {null|*}
   */
  getUrlForFileNmae(url) {
    let reg = /^(http:\/\/|https:\/\/|\/\/)(.*)(\/((.*)\.(.*)))$/;
    let match = url.match(reg);
    if (!match) {
      return null;
    }
    console.log('getUpdateFileNmae', match[4]);
    return match[4];
  }

  /***
   * @description 检查是否为网络地址
   * @param url
   * @returns {boolean}
   */
  validURL(url){
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }

}

export default new RegExps();
