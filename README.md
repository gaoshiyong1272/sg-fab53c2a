# xd-helper

#### 介绍
自定义类与工具类函数

#### 安装教程
npm install --save gxd-helper --registry=https://registry.npm.taobao.org

##### 开发

```bash
# 克隆项目
git clone https://gitee.com/e56buy/xd-helper.git

# 进入项目目录
cd gxd-helper

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --save --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

##### 使用

```bash
# 引入插件

import gxdHelper from 'gxd-helper';
let {cookie, storage, pinyin, helper } = gxdHelper;
let helperObj = helper(defautlSetting);

# defautlSetting配置 需要提供删除用户登录状态功能是，需要自行配置相关键值

{
    ...
    #用户登录storage存储key
    userInfoSaveStoreKey: 'admin_user_info', 
    #用户登录Cookie存储key
    userInfoSaveCookieKey: 'jufubao-access-token',
    ...
}

```


#### 常用方法
```text
#helper 工具类 （v1.12.14）
 - checkVarType(obj:Any) //判断变量类型 返回字符串(boolean|number|string|function|array|date|regExp|undefined|null|object)
 - cloneDeep(json:Object) //简单深拷贝
 - random(min:Number, max:Number) //随机数字值
 - romdomArray(arr:Arrar = []) //随机数组的值
 - getTime(lastDay:Number = 30) //获取最近某时间断内的时间
 - inArray(sourceArray:Array = [], findArray:Array = []) 检测查找数组是否在原数组中,返回boolean
 - repeatArray(sourceArray:Array = [], findArray:Array = []) 数组去重复
 - unionArray(sourceArray:Array = [], findArray:Array = []) 数组并集
 - intersectionArray(sourceArray:Array = [], findArray:Array = []) 数组交集
 - differenceArray(sourceArray:Array = [], findArray:Array = []) 数组差集
 - isEmpty(obj:Array|Object) 检查对象或者数组是否为空,返回boolean
 - idToSelectData(data:Array|Object, name:String = 'name', id:String = 'id', force:Boolean = true) 转化为vue element UI选择插件数据格式（{value: 'value' ,label: 'label'}）
 - isKeyInLists(list:Array|Object, value:Any, keyName:String='id') 检查值是否在数组中或者对象中并返回结果
 - getListKeyForValue(list:Array|Object, keyName:String = 'id') 获取数组或者对象中的某个key的value值
 - deleteParamEmptyKey(source:Object, ignoreKey:Array = []) 删除参数中[all|''|null|undefined] ignoreKey被忽略的Key
 - paramsBase64Decode(base64Str:String) //把Base64转化为对象
 - paramsBase64Encode(row:Object) //把对象转化为可传输的Url Base64安全格式
 - jsonToParams(params:String) //把对象解析成请求参数格式
 - cutStringLen(val:String, len:Number = 10) //截断字符串长短（汉字2个字符串，英文1个）
 - parseURL(url:String?) //解析链接地址 或者 获取当前url地址
 - getParmater(key:String)  //获取Url参数
 - addFloatNumber(currentNum:Number, targetNum:Number) //浮点型加法
 - cutFloatNumber(currentNum:Number, targetNum:Number) //浮点型减法
 - multiplyFloatNumber(currentNum:Number, targetNum:Number) //浮点型乘法
 - divisionFloatNumber(currentNum:Number, targetNum:Number) //浮点型除法
 - tirmL(str:String, replaceStr:String?) //去掉左边指定字符
 - tirmR(str:String, replaceStr:String?) //去掉右边指定字符串
 - tirm(str:String, replaceStr:String?) //去掉两部指定字符串
 - searchHigh(str:String, keyword:String|Array, options:Object? = {}) //搜索到匹配关键字高亮处理

#cookie （v1.12.14）
 - get(key:String, options:Object) //获取cookie
 - remove(key:String, options:Object) //删除指定键值所对应的cookie值
 - set(key:String, value:String, options:Object={domain,path,expires}) //添加指定名称cookie值 , 过期时间小时制

#Pinyin 汉语转拼音 （v1.12.14）
 - getfullName(str:String) //获取全部拼音
 - getFirstLetter(str:String) //获取汉字的拼音首字母 汉英混排的时候汉语与英语之间使用"空格"隔开

#storage 本地缓存（sessionStore，localStore） （v1.12.14）
1. storage.sessionStore
 - set(key:String, value:Any) //设置LocalStorage值
 - get(key:String) //获取LocalStorage值
 - remove(key:String) //删除LocalStorage值

2. storage.localStore
 - set(key:String, value:Any, expire:Number) //设置LocalStorage值
 - get(key:String) //获取LocalStorage值
 - remove(key:String) //删除LocalStorage值

```

#### 版本日志
```text
#helper 工具类 (v1.1.15)
 - loadFile(arr:Array|String, type:String = 'js|css') //加载js和css文件
```


