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
