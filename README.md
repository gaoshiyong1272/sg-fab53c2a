# xd-helper

#### 介绍
自定义类与工具类函数

#### 软件架构
软件架构说明


#### 安装教程
npm install --save gxd-helper

##### 开发

```bash
# 克隆项目
git clone https://gitee.com/e56buy/xd-helper.git

# 进入项目目录
cd gxd-helper

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

##### 使用

```bash
# 引入插件

import gxdHelper from 'gxd-helper';
let {cookie, storage, pinyin, helper } = gxdHelper;
let helperObj = helper(defautlSetting);
