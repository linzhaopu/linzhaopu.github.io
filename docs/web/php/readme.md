---
sidebarDepth:
---

# PHP 介绍

> PHP(Hypertext Preprocessor 超文本预处理器) 的简称

1. [PHP](http://www.php.net) 是通用的，免费开源的，运行在服务器端的脚本编程语言

   - 通用：指跨平台，如：Windows、Linux、MacOS 免费：意味着你不必为 PHP 花一分钱，哪怕用在商业项目中
   - 开源：意味着你可以轻松获取全部源代码，并进行定制或扩展
   - 服务器端：意味着你必须将它安装在服务器环境下才可以使用
   - 脚本语言：意味着与 JS 一样，也是解释型语言，按编写顺序执行

2. `PHP` 能做什么

   - 可以快速动态的生成 HTML 页面 -可以返回前端需要的各种类型的数据
   - 可以高效安全的处理表单数据
   - 可以控制与客户端的会话( Cookie/Session )
   - 可以安全的操作服务器上的文件 -可以对用户的行为进行授权控制
   - 可以高效安全的操作各种类型的数据库
   - 通过扩展，可以实现加密，压缩等其他功能
   - 可以提供接口数据，包括：小程序、APP、等其他语言

3. 学习 `PHP` 需要什么基础

   - `HTML`：超文本标记语言
   - `CSS`：层叠样式表
   - `JavaScript`：前端脚本编程语言

4. `PHP` 文件中有什么
   - `PHP` 文件，必须使用 .php 为后缀名
   - `PHP` 文件在服务器上执行，最终以 HTML 或字符串格式返回
   - `PHP` 文件中除了有 PHP 代码外，还可以有：
     - `HTML` 代码
     - `CSS` 代码
     - `JavaScript` 代码纯文本
5. `PHP` 的优势
   - `PHP` 简单易学，上手快
   - `PHP` 开发效率高，开发成本低
   - `PHP` 执行效率高、安全性好、功能强大
   - `PHP` 支持多种平台服务器：LinuxWindowsUnix 服务器数量不受限制

## PHP 运行原理

### 常用术语

- `http` ：基于请求与响应机制的, 超文本传输协议
- `html` ：超文本标记语言
- `Apache/Nginx` ：Web 服务器软件
- `php.exe` ：php 解释器

### 主机/客户端/服务器

- 主机 ：本地主机(客户端), 远程主机(服务器)
- IP ：网络中的主机标识符, 有数字与字符串二种表示方法
- IP 地址与主机名 ：如果是本地主机,IP 是 127.0.0.1,主机名(标识符为):localhost
- 客户端 ：一台安装了浏览器或者其它可以访问网站软件的电脑
  请求 ：客户端发起的 http 请求(url 请求),例如通过浏览器地址栏,或者终端命令
- 客户端和服务器可以是同一台电脑,此时服务器的地址就是 ：127.0.0.1 或 localhost
- 服务器 ：一台安装了 Web 软件的电脑,就是一台可提供 Web 访问的服务器
- 响应 ：通过指定的端口 80,来响应客户端发送到过 http 请求
- 端口 ：服务器可以端口对外提供的各种服务,例如 http:80, ftp:21,email:25,ssh:22
- 主机/客户端/服务器

### CGI 协议/CGI 脚本/Zend 虚拟机

- Web 服务器: 默认只能处理静态请求,如: html,遇到动态请求,如 php,jsp...无能为力
- web 应用程序: 这些动态请求,例如 php,jsp..., 就是传说中的 Web 应用程序
- CGI: 通用网关接口, 是 web 服务器与 web 应用程序之间通信规范, 没错, 与 http 一样,也是协议
  -CGI 脚本: 其实就是 php 程序,例如: index.php
- Zend 虚拟机: 其实就是 php 程序的解释器, 可理解为 php.exe,用来执行 php 程序

### php 运行流程

::: tip 运行流程

1.  客户通过浏览器发出 http 请求 index.php
2.  web 服务器接受到这个请求,通过 CGI 协议,转发给 Zend 虚拟机处理
3.  CGI 启动 Zend 虚拟机,对 php 脚本进行解析并执行,执行完毕输出 html,并关闭 Zend 虚拟机
4.  CGI 将执行结果返回到 web 服务器, 并由它返回到客户端, 最终完成一个完整的 http 请求响应过程

:::

### 提升自己: PHP-CGI 原理（选读）

- 每种 web 应用程序都有对应的 CGI,php 对应的是: php-cgi,它的执行流程大致如下:
  - 初始化 php 的各种变量
  - 调用并初始化: Zend 虚拟机
  - 加载并解析: php.ini
  - 激活: Zend
    1.  Zend 加载 php 程序,做词法/语法分析
    2.  编译生成:opcode,并执行
    3.  输出结果
    4.  关闭: Zend
    5.  将结果返回: web 服务器

## PHP 安装

### 环境安装

- [wampserver](https://www.wampserver.com/)

  ![wamperserver](/images/wamperserver-download.png)

- [vscode](https://https://code.visualstudio.com/Download)

  ![vscode](/images/vscode-download.png)

- [phpstorm](https://www.jetbrains.com/phpstorm/)

  ![vscode](/images/phpstorm-download.png)

## PHP 语法

### 语言标记

> 开始标记 `<?php` 和 结束标记 `?>` 中间写 PHP 代码

- echo 输出

```php
<?php
echo 'Hello World!';
?>
```

- php 嵌入到 HTML,以嵌入多个 PHP 标记

```php
<?php
echo '我是欧阳克';
echo '我是黄蓉';Float 带小数的数字
?>
```

- 语句结束符 `;`

### php 注释

- 执行会跳过注释.注释更方便的理解代码

- php 中的单行注释 `#`
- php 中的多行注释/\* \*/

### php 变量

- 声明变量

```php
  $a = '欧阳克';
  echo $a;
```

- 变量命名规则,开头不能用数字,中间不能有空格

```php
  # 下划线命名法
  $my_name = '欧阳克';
  echo $my_name;
  echo '<hr>';
  # 小驼峰命名法
  $myName  = '黄蓉';
  echo $myName;
  echo '<hr>';
  # 大驼峰命名法
  $MyName  = '郭靖';
  echo $MyName;
```

- 引号作用,单引号里面是文本,双引号里面可以是文本和变量

```php
  $php = '我是"欧阳克"！';
  echo $php;
  echo '<hr>';
  $php = "我是'欧阳克'！";
  echo $php;
  echo '<hr>';
  $name = '欧阳克';
  $php = "我是{$name}！";
  echo $php;
  echo '<hr>';
```

- 转移字符 \

```php
  $php = "我是\"欧阳克\"！";
  echo $php;
  echo '<hr>';
  $php = "\\";
  echo $php;
```

### php 常量

- 常量声明后，不允许改变,有效的常量名以字符或下划线开头

```php
 define('SITE_SUFFIX','www.xx.com');
 echo SITE_SUFFIX;
 echo '<hr>';
 define('OUYANGKE','欧阳克');
 echo OUYANGKE;
```

### php 数据类型

|  类型  |                 描述                  |
| :----: | :-----------------------------------: |
| 布尔型 |         Boolean true 和 false         |
|  整型  |          Integer 0 - 无限大           |
| 浮点型 |          Float 带小数的数字           |
| 字符串 | String 汉子、英文、符合其他国家的语言 |
|  数组  | Array 数组可以在一个变量中存储多个值  |
|  对象  | Object 对象数据类型也可以用于存储数据 |
|  空值  |          NULL 表示变量没有值          |

- echo 输出数据值，开发时使用
- var_dump 可以打印数据类型和值，测试时使用

1. 布尔型，常用于条件判断

```php
  $x = true;
  var_dump($x);
  echo '<hr>';
  $y = false;
  var_dump($y);
```

2. 整型
   ::: tip 注意
   整数不能包含逗号或空格
   整数是没有小数点的
   整数可以是正数或负数
   整型可以用三种格式来指定：十进制、十六进制、八进制
   :::

```php
  $number = 0;
  var_dump($number);
  echo '<hr>';
  $number = 67;
  var_dump($number);
  echo '<hr>';
  $number = -322;
  var_dump($number);
```

3. 浮点型,带小数部分的数字

```php
  $number = 10.03;
  var_dump($number);
  echo '<hr>';
  $number = -88.23;
  var_dump($number);
```

4.字符串

```php
  $str = '我是欧阳克';
  var_dump($str);
  echo '<hr>';
  $str = 'My name is ou yang ke';
  var_dump($str);
```

5. NULL 表示变量没有值

```php
  $null;
  var_dump($null);
  echo '<hr>';
  $null = '';
  var_dump($null);
  echo '<hr>';
  $null = null;
  var_dump($null);
```

## php 函数

> php 自带的一些功能方法，叫函数

> php 拥有 1000 多个内建的函数函数

1. 函数描述

- is_bool() 判断是否是布尔型
- is_int() 判断是否是整型
- is_float() 判断是否是浮点型
- is_string() 判断是否是字符串
- is_null() 判断是否是为空
- isset() 判断变量是否有值
- empty() 判断变量是否为空
- unset() 释放变量

> is_bool 判断是否是布尔型

```php
  $bool = true;
  var_dump(is_bool($bool));
  echo '<hr>';
  $bool = false;
  var_dump(is_bool($bool));
  echo '<hr>';
  $bool = 33;
  var_dump(is_bool($bool));
  echo '<hr>';
  $bool = '欧阳克';
  var_dump(is_bool($bool));
  echo '<hr>';
```

> is_int 判断是否是整型

```php
  $bool = true;
  var_dump(is_int($bool));
  echo '<hr>';
  $bool = 33;
  var_dump(is_int($bool));
  echo '<hr>';
  $bool = '欧阳克';
  var_dump(is_int($bool));
  echo '<hr>';
```

> is_float 判断是否是浮点型

```php
  $bool = true;
  var_dump(is_float($bool));
  echo '<hr>';
  $bool = 33;
  var_dump(is_float($bool));
  echo '<hr>';
  $bool = '欧阳克';
  var_dump(is_float($bool));
  echo '<hr>';
  $bool = 22.22;
  var_dump(is_float($bool));
  echo '<hr>';
```

> is_string 判断是否是字符串

```php
  $bool = true;
  var_dump(is_string($bool));
  echo '<hr>';
  $bool = 33;
  var_dump(is_string($bool));
  echo '<hr>';
  $bool = '欧阳克';
  var_dump(is_string($bool));
  echo '<hr>';
  $bool = 22.22;
  var_dump(is_string($bool));
  echo '<hr>';
```

> is_null 判断是否是为空

```php
  $str = null;
  var_dump(is_null($str));
  echo '<hr>';
  $str = '欧阳克';
  var_dump(is_null($str));
  echo '<hr>';
  $str = 0;
  var_dump(is_null($str));
  echo '<hr>';
```

> isset 判断变量是否有值

```php
  var_dump(isset($str));
  echo '<hr>';
  $str = null;
  var_dump(isset($str));
  echo '<hr>';
  $str = 'null';
  var_dump(isset($str));
  echo '<hr>';
  $str = '';
  var_dump(isset($str));
  echo '<hr>';
  $str = 0;
  var_dump(isset($str));
```

> empty 判断变量是否为空

```php
  var_dump(empty($str));
  echo '<hr>';
  $str = null;
  var_dump(empty($str));
  echo '<hr>';
  $str = 'null';
  var_dump(empty($str));
  echo '<hr>';
  $str = '';
  var_dump(empty($str));
  echo '<hr>';
  $str = 0;
  var_dump(empty($str));
```

> unset 释放变量

```php
  $str = '欧阳克';
  unset($str);
  var_dump($str);
  echo '<hr>';
```

## PHP 运算符

- 运算符描述

\- 相加 \* 相减
\- 相乘
\/ 相除
\% 取余
\++ 加加
\-- 减减
\. 连接、用在字符串

- 示例：

```php
  $int1 = 100;
  $int2 = 30;
  var_dump( $int1 + $int2 );
  echo '<hr>';
  var_dump( $int1 - $int2 );
  echo '<hr>';
  var_dump( $int1 * $int2 );
  echo '<hr>';
  var_dump( $int1 / $int2 );
  echo '<hr>';
  var_dump( $int1 % $int2 );
  echo '<hr>';
  var_dump( $int1++ );
  echo '<hr>';
  var_dump( $int1-- );
  echo '<hr>';
  var_dump( ++$int2 );
echo '<hr>';
var_dump( --$int2 );
echo '<hr>';
var_dump( $int1 . $int2 );
echo '<hr>';

$var1 = '欧阳克';
$var2 = '18 岁';
var_dump( $var1 . $var2 );
//两个变量连接，没问题
//一个变量和字符串，没问题
//一个变量连接整型，必须在整型前面增加空格
```

### PHP 赋值运算符

- 运算符描述
  \= 赋值
  \+= 先加，后赋值
  \-= 先减，后赋值
  \*= 先乘，后赋值
  \/= 先除，后赋值
  \%= 先取余，后赋值
  \.= 先连接，后赋值
- 示例：

```php
$int = 100;
  var_dump($int);
echo '<hr>';
$int += 30;
var_dump( $int );
echo '<hr>';
$int = $int + 30;
var_dump( $int );
echo '<hr>';
$int -= 30;
var_dump( $int );
echo '<hr>';
$int \*= 30;
var_dump( $int );
echo '<hr>';
$int /= 30;
var_dump( $int );
echo '<hr>';
$int %= 30;
var_dump( $int );
echo '<hr>';
$int .= 30;
var_dump( $int );
```

### PHP 比较运算符

- 运算符描述

```php
var_dump( 100 > 100 );
echo '<hr>';
var_dump( 100 > 90 );
echo '<hr>';
var_dump( 100 > 110 );
echo '<hr>';
var_dump( true > false );
echo '<hr>';
var_dump( 'php' > 'php' );
echo '<hr>';
//>= 大于等于
var_dump( 100 >= 100 );
echo '<hr>';
var_dump( 100 >= 90 );
echo '<hr>';
var_dump( 100 >= 110 );
echo '<hr>';
var_dump( true >= false );
echo '<hr>';
var_dump( 'php' >= 'php' );
echo '<hr>';
//< 小于
 var_dump( 100 < 100 );
 echo '<hr>';
 var_dump( 100 < 90 );
 echo '<hr>';
 var_dump( 100 < 110 );
 echo '<hr>';
 var_dump( true < false );
 echo '<hr>';
 var_dump( 'php' < 'php' );
 echo '<hr>';
//<= 小于等于
 var_dump( 100 <= 100);
 echo '<hr>';
 var_dump( 100 <= 90);
 echo '<hr>';
 var_dump( 100 <= 110);
 echo '<hr>';
 var_dump( true <= false);
 echo '<hr>';
 var_dump( 'php' <= 'php' );
echo '<hr>';
//== 等于
 var_dump( 100 == 100 );
 echo '<hr>';
 var_dump( true == 'true' );
 echo '<hr>';
//!= 不等于
 var_dump( 100 != 100 );
 echo '<hr>';
 var_dump( true != 'true' );
 echo '<hr>';
//=== 恒等于
 var_dump( 100 === 100 );
 echo '<hr>';
 var_dump( true === 'true' );
 echo '<hr>';
//!== 恒不等
 var_dump( 100 !== 100 );
 echo '<hr>';
 var_dump( true !== 'true' );
 echo '<hr>';
```

### PHP 逻辑运算符

- 运算符描述
- and 和 && 与,or 和 || 或,xor 异或, ! 非
  > and 和 &&

```php
 //两个真，返回真。有一个是假，返回假。
 var_dump( 100 && 30 );
 echo '<hr/>';
 var_dump( true && true );
 echo '<hr/>';
 var_dump( true and false );
 echo '<hr/>';
 var_dump( false and false );
 echo '<hr/>';
```

> or 和 ||

```php
//一个真，返回真。两个真，返回真。两个假，返回假。
var_dump( 100 || 30 );
echo '<hr/>';
var_dump( true || true );
echo '<hr/>';
var_dump( true or false );
echo '<hr/>';
var_dump( false or false );
echo '<hr/>';
```

> xor

```php
 //一个真、返回真。两个真，返回假。两个假，也返回假。
 var_dump( 0 xor 1 );
 echo '<hr/>';
 var_dump( true xor true );
 echo '<hr/>';
 var_dump( true xor false );
 echo '<hr/>';
 var_dump( false xor false );
 echo '<hr/>';
```

> !一个真、返回真。两个真，返回假。两个假，也返回假。

```php
var_dump( !0);
echo '<hr/>';
var_dump( !true );
echo '<hr/>';
var_dump( !false );
echo '<hr/>';
var_dump( !1 );
echo '<hr/>';
```

## 流程控制

### PHP 条件判断

1. 三元运算符 `? :`

```php
$var = 100;
var_dump( $var>=100 ? '买' : '不买' );
```

2. `if`

```php
$var = 10000;
if($var >= 10000){
    $var1 = '我要买台mac';
    echo $var1;
}
```

3. `ifelse`

```php
$var = 10000;
if($var >= 10000){
    $var1 = '我要买台mac';
    echo $var1;
}else{
    $var2 = '我要洗洗睡觉';
    echo $var2;
}
```

3. `ifelse` `else if`

```php
$var = 10000;
if($var >= 10000){
    echo '我要买个iphone xs max';
}else if($var >= 8000){
echo '我要买个 iphone xs';
}else if($var >= 6000){
    echo '我要买个iphone xr';
}else if($var >= 4000){
echo '我只能买个小米手机';
}else{
echo '我洗洗睡了';
}
```

4. `switch case default`

```php
$var = 10000;
switch ($var) {
case $var >= 10000:
        echo '我要买个iphone xs max';
        break;
    case $var >= 8000:
        echo '我要买个iphone xs';
        break;
    case $var >= 6000:
        echo '我要买个iphone xr';
        break;
    case $var >= 4000:
        echo '我只能买个小米手机';
        break;
    default:
        echo '我洗洗睡了';
        break;
}
```

### PHP 循环

1. while

```php
$int = 1;
while ( $int < 10 ) {
    echo $int;
    echo '<hr/>';
    $int ++;
}
```

2. do while

```php
$int = 1;
do {
echo $int;
    echo '<hr>';
    $int++;
}while ( $int < 1);
```

3. for

```php
示例1：
    for( $int=1; $int<10; $int++){
        echo $int;
        echo '<hr>';
    }
示例2：
    for( $int=1; $int<10; $int++){
        echo $int;
        if($int == 5){
echo '比较特殊';
}
echo '<hr>';
}
```

### PHP 跳出流程语句

1. continue
   结束本次循环，进入下次循环
   在循环语句中使用 whilefor

```php
for( $int=1; $int<10; $int++){
    if($int == 5){
//结束当前循环，进入下次循环
continue;
}
var_dump($int);
    echo '<hr>';
}
```

2. break
   结束本层循环
   在循环语句中使用 whileforswitch
   可以跳出多层循环
   示例 1：

```php
for( $int=1; $int<10; $int++){
    if($int == 5){
//结束当前循环，进入下次循环
break;
}
var_dump($int);
    echo '<hr>';
}
```

示例 2：

```php
$var = 10000;
switch ($var) {
case $var >= 10000:
echo '我要买个 iphone xs max';
break;
case $var >= 8000:
echo '我要买个 iphone xs';
break;
case $var >= 6000:
echo '我要买个 iphone xr';
break;
case $var >= 4000:
echo '我只能买个小米手机';
break;
default:
echo '我洗洗睡了';
break;
}
```

## PHP 数组

### 创建数组

- 创建空数组

```php
$arr = array();
var_dump( $arr );
$arrs = [];
var_dump( $arrs );
```

- 创建索引数组

```php
$arr = array(
    '欧阳克',
    '黄蓉',
    '郭靖'
);
var_dump( $arr );
$arrs = [
    '欧阳克',
    '黄蓉',
    '郭靖'
];
var_dump( $arrs );
```

- 创建关联数组

```php
$arr = array(
    'ouyangke' => '欧阳克',
    'huangrong' => '黄蓉',
    'guojing' => '郭靖'
);
var_dump( $arr );
$arrs = [
    'ouyangke' => '欧阳克',
    'huangrong' => '黄蓉',
    'guojing' => '郭靖'
];
var_dump( $arrs );
```

- 输出数组值

```php
$arr = [
    '欧阳克',
    '黄蓉',
    '郭靖'
];
echo $arr[0];
echo '<hr>';
echo $arr[1];
echo '<hr>';
echo $arr[2];
echo '<hr>';
$arrs = [
    'ouyangke' => '欧阳克',
    'huangrong' => '黄蓉',
    'guojing' => '郭靖'
];
echo $arrs['ouyangke'];
echo '<hr>';
echo $arrs['huangrong'];
echo '<hr>';
echo $arrs['guojing'];
echo '<hr>';
```

- 打印数组 print_r

```php
$arr = [
    '欧阳克',
    '黄蓉',
    '郭靖'
];
print_r($arr);
```

### php 多维数组

> 备：数组最好不要超过 3 层

- 二维数组

```php
$arr = array(
    array(
        'name' => '欧阳克',
        'age'  => 18,
    ),
    array(
        'name' => '黄蓉',
        'age'  => 16,
    ),
    array(
        'name' => '郭靖',
        'age'  => 22,
    )
)
var_dump($arr);
print_r($arr);
```

- 三维数组

```php
$arr = [
    [
        'name' => '欧阳克',
        'age'  => 18,
        'gongfu' => [
            '神驼雪山拳',
            '灵蛇拳法'
        ]
    ],
    [
        'name' => '黄蓉',
        'age'  => 16,,
        'gongfu' => [
            '碧波掌法',
            '落英神剑掌'
        ]
    ],
    [
        'name' => '郭靖',
        'age'  => 22,,
        'gongfu' => [
            '降龙十八掌',
            '九阴真经'
        ]
    ]
];
var_dump($arr);
print_r($arr);
```

- 多维数组访问
  > 备：数组访问时，层次不要弄错

```php
$arr = [
    [
        'name' => '欧阳克',
        'age'  => 18,
        'gongfu' => [
            '神驼雪山拳',
            '灵蛇拳法'
        ]
    ],
    [
        'name' => '黄蓉',
        'age'  => 16,,
        'gongfu' => [
            '碧波掌法',
            '落英神剑掌'
        ]
    ]
]
echo $arr[0]['name'].' --- ';
echo $arr[0]['gongfu'][0].' --- ';
echo $arr[0]['gongfu'][1];
```

### php 数组循环

> 数组循环，是对二维数组以上的数组进行循环

- foreach

```php
$arr = array(
    'ouyangke' => '欧阳克',
    'huangrong' => '黄蓉',
    'guojing' => '郭靖'
);
foreach( $arr as $v ){
    echo $v;
    echo '<hr>';
}
```

- key 和 value

```php
//示例1：
$arr = array[
    'ouyangke' => '欧阳克',
    'huangrong' => '黄蓉',
    'guojing' => '郭靖'
];
foreach( $arr as $k=>$v ){
    echo $k . ' --- ' . $v;
    echo '<hr>';
}
//示例2：
$arr = [
    '欧阳克',
    '黄蓉',
    '郭靖'
];
foreach( $arr as $k=>$v ){
    echo $k . ' --- ' . $v;
    echo '<hr>';
}
```

- 循环多维数组

```php
//示例1：
$arr = [
    [
        'name' => '欧阳克',
        'age'  => 18
    ],
    [
        'name' => '黄蓉',
        'age'  => 16
    ],
    [
        'name' => '郭靖',
        'age'  => 22
    ]
];
foreach( $arr as $k=>$v ){
    print_r($v);
    echo '<hr>';
}
//示例2：
$arr = [
    [
        'name' => '欧阳克',
        'age'  => 18
    ],
    [
        'name' => '黄蓉',
        'age'  => 16
    ],
    [
        'name' => '郭靖',
        'age'  => 22
    ]
];
foreach( $arr as $k=>$v ){
    foreach ($v as $key => $value) {
        echo $value;
        echo '<hr>';
    }
}
//示例3：
$arr = [
    [
        'name' => '欧阳克',
        'age'  => 18
    ],
    [
        'name' => '黄蓉',
        'age'  => 16
    ],
    [
        'name' => '郭靖',
        'age'  => 22
    ]
];
foreach( $arr as $k=>$v ){
    echo $v['name'].' --- '.$v['age'];
    echo '<hr>';
}
```

## PHP 函数

> PHP 函数就是有一定功能的一些语句组织在一起的一种形式。
> PHP 的真正力量来自它的函数：它拥有超过 1000 个内建的函数。

### 系统函数

- 字符串函数
  |函数 |描述|
  |:--:|:--:|
  |strtolower()| 将字符串转化为小写|
  |strtoupper| 将字符串转化为大写|
  |strlen() |获取字符串长度|
  |trim() |去除字符串首尾处的空白字符（或者其他字符）|
  |ltrim()| 去除字符串开头的空白字符|
  |rtrim() |去除字符串结尾的空白字符|
  |str_replace()| 字符串替换|
  |strpbrk() |字符串中查找一组字符是否存在|
  |explode() |将字符串分割为数组|
  |implode() |把数组元素组合为字符串|
  |md5() |将字符串进行 md5 加密|

```php
//1. strtolower()
$str = 'OUYANGKE';
echo strtolower($str);
echo '<hr>';
$str = 'HuangRong';
echo strtolower($str);
//2. strtoupper()
$str = 'ouyangke';
echo strtoupper($str);
echo '<hr>';
$str = 'HuangRong';
echo strtoupper($str);
//3、strlen()
$str = 'ouyangke';
echo strlen($str);
echo '<hr>';
$str = 'HuangRong';
echo strlen($str);
//4. trim()ltrim()rtrim()
$str = ' ouyangke ';
echo trim($str);
echo '<hr>';
$str = ' HuangRong ';
echo lrim($str);
echo '<hr>';
$str = ' guojing ';
echo rrim($str);
//5、str_replace()
$str = 'ouyangke huangrong guojing';
echo str_replace('ouyangke','欧阳克',$str);
//6、strpbrk()
   $str = 'ouyangke huangrong guojing';
echo str_replace($str,'huang');
//7、explode()
$str = 'ouyangke huangrong guojing';
$arr = explode(' ',$str);
//8、implode()
$arr = array(
'欧阳克',
'黄蓉',
'郭靖'
);
echo implode(',',$arr);
//9、md5()
$str = 'ouyangke';
echo md5($str);
```

### 数组函数

|      函数      |              描述              |
| :------------: | :----------------------------: |
|    count()     |        数组中元素的数量        |
| array_merge()  |     两个数组合并为一个数组     |
|   in_array()   |     数组中是否存在指定的值     |
|     sort()     |     对数值数组进行升序排序     |
|    rsort()     |     对数值数组进行降序排序     |
| array_unique() |      移除数组中的重复的值      |
|  array_push()  | 将一个或多个元素插入数组的末尾 |
|  array_pop()   |    删除数组中的最后一个元素    |

```php
//1、count()
$arr = array(
   '欧阳克',
   '黄蓉',
   '郭靖'
   );
   echo count($arr);
//2、array_merge()
$arr1 = array(
   '欧阳克',
   '黄蓉'
   );
   $arr2 = array(
    '郭靖',
    '杨康'
);
$arr3 = array_merge($arr1,$arr2);
   print_r($arr3);
//3、in_array()
$arr = array(
   '欧阳克',
   '黄蓉',
   '郭靖'
   );
   echo in_array('欧阳克',$arr);
//4、sort()
$arr = array(
   'ouyangke',
   'huangrong',
   'guojing'
   );
   sort($arr);
   print_r($arr);
   //5、array_unique()
   $arr = array(
    '欧阳克',
    '欧阳克',
    '黄蓉',
    '黄蓉',
    '郭靖'
);
$arr = array_unique($arr);
print_r($arr);
  // 6、array_push()
   $arr = array(
    '欧阳克',
    '黄蓉',
    '郭靖'
);
array_push($arr,'杨康');
   print_r($arr);
//7、array_pop()
$arr = array(
   '欧阳克',
   '黄蓉',
   '郭靖'
   );
   array_pop($arr);
print_r($arr);
```

### 函数分类

|   集合名   |                                 描述                                  |
| :--------: | :-------------------------------------------------------------------: |
|   String   |                            字符串处理函数                             |
|   Array    |                     数组函数允许您访问和操作数组                      |
|   MySQLi   |                     允许您访问 MySQL 数据库服务器                     |
|    Date    |                        服务器上获取日期和时间                         |
| Filesystem |                       允许您访问和操作文件系统                        |
|    Mail    |              数学函数能处理 integer 和 float 范围内的值               |
|    HTTP    | 允许您在其他输出被发送之前，对由 Web 服务器发送到浏览器的信息进行操作 |
|  Calendar  |              日历扩展包含了简化不同日历格式间转换的函数               |
| Directory  |                   允许您获得关于目录及其内容的信息                    |
|   Error    |                      允许您对错误进行处理和记录                       |
|   Filter   |                            进行验证和过滤                             |
|    FTP     |          通过文件传输协议 (FTP) 提供对文件服务器的客户端访问          |
|   MySQL    |                     允许您访问 MySQL 数据库服务器                     |
| SimpleXML  |                        允许您把 XML 转换为对象                        |
|    XML     |               允许我们解析 XML 文档，但无法对其进行验证               |
|    Zip     |                   压缩文件函数允许我们读取压缩文件                    |

### 自定义方法 (自定义函数)

- 方法使用

1. 方法声明 function 关键词 + 方法名 - `function a(){ echo '我是 a 方法'; }`
2. 方法调用,在方法外部调用
   - `a(); function a(){ echo '我是 a 方法'; } a();`
3. 方法参数,参数数量不限制 - `function a($n1,$n2){ echo $n1 + $n2; } a(100,10);`
   - 方法参数可以有默认值，有默认值可以不传值
   - `function a($n1,$n2=5){ echo $n1 + $n2; } a(100);`
4. 方法返回值 return.方法必须以返回的方式
   - `function a($n1,$n2){ return $n1 \* $n2; } echo a(100,10);`

## PHP 类与对象

> 关键词：类，类实例，对象，对象检测

> 类的三大特性：
> 封装：把对象的属性和方法组织在一个类（逻辑单元）里
> 继承：以原有的类为基础，创建一个新类，从而代码复用的目的
> 多态：允许将子类类型的指针赋值给父类类型的指针需要的数据库

```
CREATE TABLE `user` (
`uid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户 ID',
`name` varchar(50) NOT NULL COMMENT '姓名',
`age` smallint(3) unsigned NOT NULL COMMENT '年龄',
PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

INSERT INTO `user` VALUES ('1', '欧阳克', '18');
INSERT INTO `user` VALUES ('2', '老顽童', '50');
INSERT INTO `user` VALUES ('3', '黄蓉', '33');
INSERT INTO `user` VALUES ('4', '郭靖', '18');
INSERT INTO `user` VALUES ('5', '一灯大师', '80');
INSERT INTO `user` VALUES ('6', '洪七公', '79');
```

### 创建类

类不好理解，因为概念太抽象。动物是一个类，而兔子、猪、猫狗，都是动物类的实例化对象。类就是一个分类，一个清单。这个类有什么，通过这个类，创建出对象。对象不是凭空出来的，都是通过类创建出来的。所以咱们是先写类，在创建对象。

- 创建类

```php
class Animal{

}
```

- 调用类（实例化）

```php
$monkey = new Animal();    // 猴子
$rabbit = new Animal(); // 兔子
//备：类如果只能使用一次，那我们没必须用类，每次直接写代码就可以了。所以类可以实例化多次（N 次），次数无限制。
//同一个类实例化出来，它们是不一样的
var_dump($monkey == $rabbit);
echo '<br>';

var_dump($monkey === $rabbit);
echo '<br>';
//检测对象是否是类的实例
var_dump($monkey instanceof Animal);
echo '<br>';
```

- 类属性
  > 关键词: 类属性, 访问限制符, 动态属性,在类里直接写代码，是错误的

```php
//错误示例
class Animal{
echo 111;
}
```

> 类是一个类型的集合，它里面有成员的。类里成员有两种：属性(变量)和行为(方法)。任何类，都有属性和行为。

- 属性(变量)

```php
class People{
$name = '杨幂'; //会报错，必须有修饰符
$age = 31; //会报错，必须有修饰符
// 属性 设置了初始值
public $name = '杨幂';
public $age = 31;
}
```

- 外部访问：需要通过访问限定符、或修饰符

```php
$yangmi = new People;
echo $yangmi->name;
```

- 在类中声明属性变量时,设置它的作用域

|  修饰符   |               作用域               |
| :-------: | :--------------------------------: |
|  public   | 公有的，类内,类外,子类都是可访问的 |
| protected |   受保护的，类内，子类都可以访问   |
|  private  |        私有的，只能类内访问        |

- 属性重新赋值

```php
$yangmi->name = '欧阳克';
$yangmi->age = 18;
echo $yangmi->name.$yangmi->age;
```

- 行为(方法)
  > 关键词: self, $this,每个方法里，都带有$this，用作调用自己类的属性和方法

```php
class People{
// 属性
public $name = '杨幂';
	public $age = 31;
	// 方法，默认就是public ，不加也是
	public function getInfo(){
		echo '姓名：杨幂，年龄：31';
		return '姓名：杨幂，年龄：31';
	}
	// 方法
	public function getInfo1(){
		// self : 当前类
		$obj = new self();
		// 输出对象属性
		return  '姓名: ' .$obj->name .', 年龄: ' . $obj->age . '<br>';
	}
	// 方法
	public function getInfo2(){
		// 因为该方法必须通过对象调用,所有没必要在类中实例化
		// 直接引用该类的实例化对象即可
		// 在类中使用伪变量: "$this" 引用当前类的实例
// $this = new self();  相当于先执行了这条语句,尽管你不需要这样做
		return  '姓名: ' .$this->name .', 年龄: ' . $this->age . '<br>';
	}
	// 方法
	public function getInfo3(){
		// 当前类
		$obj = new People();
		$obj->name = '欧阳克';
		$obj->age = 18;
		// 输出对象属性
		return  '姓名: ' .$obj->name .', 年龄: ' . $obj->age . '<br>';
	}
}
// 类实例化
$yangmi = new People();
echo $yangmi->getInfo();
echo $yangmi->getInfo1();
echo $yangmi->getInfo2();
echo $yangmi->getInfo3();
// 查看类中定义的对象方法: public 才会显示出来
$methods = get_class_methods('People');
echo '<pre>'.print_r($methods,true);
echo '<hr>';
```

- 构造方法（魔术方法）
  > 构造方法是类中的特殊方法,在类实例化时会被自动调用,可用来初始化对象成员,调用类的时候，立即执行构造方法，第一个执行的方法。方法的没有位置的先后顺序,构造方法: public function \_\_construct(){...} ，也可以跟类名一样的方法

```php
class People{
	// 属性
	public $name;
	public $age;
	// 构造方法
	public function __construct($name, $age){
		echo '开始执行';
		$this->name = $name;
		$this->age = $age;
	}
	// 方法
	public function getInfo(){
		return  '姓名: ' .$this->name .', 年龄: ' . $this->age . '<br>';
	}
}
// 实例化
$obj = new People('杨幂',31);
echo $obj->getInfo();
```

- 析构方法（魔术方法）
  > 析构方法是类中的特殊方法,在类执行完前，自动调用。可以释放，关闭一些资源,构造方法: public function \_\_destruct(){...} ，也可以跟类名一样的方法

```php
class People{
	// 属性
	public $name;
	public $age;
	// 构造方法
	public function __construct($name, $age){
		echo '开始执行';
		$this->name = $name;
		$this->age = $age;
	}
	// 方法
	public function getInfo(){
		return  '姓名: ' .$this->name .', 年龄: ' . $this->age . '<br>';
	}
	// 析构方法
	public function __destruct(){
		echo '类执行完毕，要关闭了';
	}
}
// 实例化
$obj = new People('杨幂',31);
echo $obj->getInfo();
$obj = null; // 如果没有手动释放，就会在最后执行析构方法
```

```php
//实战：自动连接数据库

class Db{
// 连接参数
public $dsn;
	public $user;
	public $password;
	// 连接属性
	public $pdo;
	// 连接方法
	public function connect(){
		// 使用PDO方式管理数据库, 连接成功则返回PDO对象,赋值给对象属性pdo
		$this->pdo = new PDO($this->dsn, $this->user, $this->password);
	}
	// 希望在实例化时, 自动连接数据库, 这个需求很常见
	public function __construct($dsn, $user, $password){
		// 初始化对象属性
		$this->dsn = $dsn;
		$this->user = $user;
		$this->password = $password;
		// 自动调用对象方法,连接数据库
		$this->connect();
	}
	// 析构方法
	public function __destruct(){
		$this->pdo = null;
	}
}
// 实例化
$db = new Db('mysql:host=localhost;dbname=ouyangke', 'root', 'root');
if ($db->pdo) {
	echo '<h2>连接成功</h2>';
}
// 读取数据库测试
$stmt = $db->pdo->prepare('select * from user');
$stmt->execute();
foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $user) {
	print_r($user); echo '<br>';
}
```

### 类的继承：类的第一特点

> 功能扩展, 方法重写,继承只能单集成，不能继承多个父类,继承方便扩展，维护

```php
class People{
// 对象属性
public $name;
	public $age;
	// 构造方法
	public function __construct($name, $age){
		$this->name = $name;
		$this->age = $age;
	}
	// 方法
	public function getInfo(){
		return  '姓名: ' .$this->name .', 年龄: ' . $this->age;
	}
}
// 子类Sub1, 代码复用
class Woman extends People{
	// ...
}
// 实例化子类Woman, 尽管子类中无任何成员,但是它可以直接调用父类People中的全部成员
$sub1 = new Woman('杨幂', 31);
echo $sub1->getInfo() . '<br>';
```

- 实现子类里的方法

```php
// 子类 Woman, 增加属性和方法,扩展父类功能
class Woman extends People{
public $wages;  // 工资
	// 子类的构造方法
	public function __construct($name, $age, $wages){
		// 调用父类的构造方法,否则还要手工把父类中的属性初始化语句全部写一遍
		// parent:: 调用被覆写的父类方法内容
		parent::__construct($name, $age);
		// 只需要添加子类中的成员初始化代码
		$this->wages = $wages;
	}
	// 计算一年工资
	public function total(){
	   return $this->wages*12;
	}
}
// 实例化子类
$sub2 = new Woman('杨幂',31,500000);
echo $sub2->name . '的年薪: ' . $sub2->total() . '<br>';
子类重写父类方法

// 如果父类有这个方法，子类也用了这个方法
// 第三个子类, 继承自 Woman, 而 Star 又继承自 People,这就形成了多层给的继承关系
class Star extends Woman{
// 重写父类 total()方法
public function total(){
$total = parent::total();
		// 判断工资单位
		switch ($total) {
case $total>100000000:
				$total = ($total/10000).'亿';
break;
case $total>10000:
				$total = ($total/10000).'万';
break;
default:
$total = $total;
				break;
		}
		return $total;
	}
}
// 实例化子类
$sub3 = new Star('杨幂',31,500000);
echo $sub3->name . '的年薪: ' . $sub3->total() . '<br>';
echo '<hr>';
```

> 备注：this,parent 关键字

> this 是指向当前对象，也包括继承的。但是会有相同的方法名，this 是先找本类，在找父类

> parent 是指向父类，重写时，使用到。或者有父类和子类相同方法时，才使用。

### 类的封装：类的第二特点

> 访问控制符, public, protected, private

> public: 默认, 类内,类外,子类都可见

> protected: 类内, 子类可见, 类外不可见

> private: 类内可见, 子类, 类外不可见

- 成员（变量）的封装

```php
class Woman{
// 属性
public $name;			// 姓名
	protected $age;			// 年龄
	private $wages;			// 工资
	// 构造方法
	public function __construct($name, $age, $wages){
		$this->name = $name;
		$this->age = $age;
		$this->wages = $wages;
	}
}
// 类实例化
$obj = new Woman('杨幂',31,500000);

echo $obj->name, '<br>';

// echo $obj->age, '<br>'; // 会报错

// echo $obj->wages, '<br>'; // 会报错

// 继承后访问
class Star extends Woman{
public function info(){
echo $this->name, '<br>';
		echo $this->age, '<br>';
		// echo $this->wages, '<br>';    // 会报错
	}
}
// 类实例化
$obj1 = new Star('baby',28,400000);

echo $obj1->name, '<br>';

// echo $obj->age, '<br>'; // 会报错

// echo $obj->wages, '<br>'; // 会报错

echo $obj1->info();
echo '<hr>';
```

- 行为（方法）的封装

```php
class Woman{
// 属性
public $name;			// 姓名
	protected $age;			// 年龄
	private $wages;			// 工资
	// 构造方法
	public function __construct($name, $age, $wages){
		$this->name = $name;
		$this->age = $age;
		$this->wages = $wages;
	}
	public function name(){
		return '我的名字叫：'.$this->name.'<br>';
}
protected function age(){
return '我的年龄是：'.$this->age.'<br>';
	}
	private function wages(){
		return '我的工资是：'.$this->wages.'<br>';
}
public function all(){
echo $this->name();
		echo $this->age();
		echo $this->wages();
	}
}
// 类实例化
$obj = new Woman('杨幂',31,500000);

echo $obj->name();

//echo $obj->age(); // 会报错

//echo $obj->wages(); // 会报错

echo $obj->all();

class Star extends Woman{
public function info(){
echo $this->name();
		echo $this->age();
		// echo $this->wages(); //私有的会报错
	}
	public function a(){
		echo $this->all();
	}
}
// 类实例化
$obj1 = new Star('baby',28,400000);
echo $obj1->a();
echo '<hr>';
```

### 类属性与类方法(静态成员)

> 类属性: 静态属性

> 类方法: 静态方法

> 静态成员属于类,而不属于对象（重点）

> 静态成员不需要通过对象访问,所以不必实例化

> 使用 static 关键字定义

> 类外使用类名访问,类内使用 self 访问

> 类外部, 类属性不能用实例访问,但类方法可以

```php
class People{
	// 属性
	public $name;
	// 属性
	public $age;
	// 属性: 静态属性
	public static $country = '中国';
	// 构造方法
	public function __construct($name, $age){
		$this->name = $name;
		$this->age = $age;
		// $this->country = $country;	// 会报错
		// 尽管可以在构造方法中初始化静态属性,但不建议这样做,否则静态属性,无法在对象之间共享
	}
	// 对象方法
	public function getInfo1(){
		// 这个方法可以用对象访问,方法中访问了静态属性,实现了类属性在对象中的共享
		// return $this->name . '年龄是: ' . $this->age. '国家是：' . $this->country; // 这样会报错
		return $this->name . '年龄是: ' . $this->age. '国家是：' . self::$country;
}
// 类方法: 静态方法
public static function getInfo2(){
// 静态方法是类方法, 不能用对象调用,所以内部也不允许使用对象引用$this
		// 如果静态方法中,一定要用到对象属性或方法,可以用参数传入
		return $this->name . '年龄是: ' . $this->age . '国家是：' . self::$country;
}
// 静态方法: 以方法传参方式调用对象属性/方法
public static function getInfo3($name,$age){
// return $this->name; // 会报错，在静态方法里，不能访问非静态成员
		// 可以用self调用，也可以用本类名调用。 最好在本类用self，在外部用类名
		return $name . '年龄是: ' . $age . '国家是：' . Demo1::$country;
}
}
$obj = new People('范冰冰',33);
echo $obj->name, '<br>';
echo $obj->age, '<br>';
// echo $obj->country, '<br>';	//会报错
echo People::$country; // 应该以这种方式访问静态属性
echo '<br>';
echo $obj->getInfo1(), '<br>';
// echo $obj->getInfo2(), '<br>';	// 会报错
// echo People::getInfo2(), '<br>';	// 会报错
echo People::getInfo3($obj->name,$obj->age);
echo '<br>';
// 对象不能访问静态属性,但是可以访问静态方法
echo $obj->getInfo3($obj->name,$obj->age);

// 静态成员可以重新赋值。在创建很多对象，值不会因为创建的对象改变。
People::$country = 'china';
$obj1 = new People('杨幂',31);
echo People::$country;
echo '<hr>';
```

### 类常量

> 类常量也类属性一样,也是属于类的, 必须用类访问,不能用对象访问类常量与类属性的区别是: 类常量不允许修改,而类属性可以修改类常量与普通常量的命名规则是一致的, 推荐使用大写字母或大写字母+下划线类常量不需要设置访问限制符,默认行为与 public 是一样的

```php
define('COUNTRY','中国');
class People{
	// 类常量也类属性一样,也是属于类的, 必须用类访问,不能用对象访问
	const COUNTRY = '中国';
	// 类常量与类属性的区别是: 类常量不允许修改,而类属性可以修改
	public static $sex = '女';
	private $name;
	public function __construct($name){
$this->name = $name;
	}
	public function getInfo(){
		// 类常量在类的内部,访问方式与类属性是一样的
		return $this->name.'的性别是:' . self::$sex.',国籍是: ' . self::COUNTRY;
}
}
$obj = new People('刘诗诗');
// 访问类属性
echo People::$sex, '<br>';
// 访问类常量
echo People::COUNTRY, '<br>';
// 访问对象方法: 该方法又访问了类属性与类常量
echo $obj->getInfo();
echo '<hr>';
// 修改类属性
People::$sex = '保密';
// 修改类常量: 报错
//People::COUNTRY = '美国';
// 可以看到类属性:$sex发生了变化
echo $obj->getInfo();
echo '<hr>';
```

### 属性重载

> 重载: 动态的创建属性和方法,当访问未定义或不可见的属性/方法时, 重载方法会自动调用,"当访问未定义或不可见", 统称为: "不可访问",PHP 中的重载,是通过"魔术方法"实现,"魔术方法"是特指客户端不能访问,而只能是系统根据一定条件自动调用,所有重载方法必须声明为: public

- 重载方法
  > \_\_get($name): 当获取未定义可不见属性时触发，需要一个参数

> **set($name, $value) :当给未定义可不见属性赋值时触发，需要两个参数
> **isset($name): 当检测未定义可不见属性时触发

> \_\_unset($name): 当注销未定义可不见属性时触发

> 魔术方法，可以给变量赋值。它的作用是可以进行赋值判断，如果是共有的，可以随便赋值。直接复制不能判断，用**get，**set 可以判断一些不太可能的值。比如年龄，不可能会超过 200 岁。比如女朋友，不可能多个。

```php
class People{
private $name;
	private $age;
	protected $country = '中国';
	// public $country = '中国';
	// 构造方法
	public function __construct($name, $age){
		$this->name = $name;
		$this->age = $age;
	}
	// __get($name):当获取未定义可不见属性时触发
// $name 是属性名
	public function __get($name){
if ($name === 'country') {
			// 仅允许name=='admin'的用户可以查看country字段内容
			return ($this->name === 'admin') ? $this->$name : '无权查看';;
}
return $this->$name;
}
// **set($name, $value):当给未定义可不见属性赋值时触发
public function **set($name, $value){
		// 直接返回, 极少这样做，这样做相当于把类属性直接设置为：public
		// $this->$name = $value;
		// 添加过滤机制
		if ($name === 'age') {
return $this->name === 'admin' ? $this->$name = $value : '无权修改';
		}
		return $this->$name = $value;
	}
	// __isset($name): 当检测未定义可不见属性时
public function **isset($name){
		if ($this->name === 'admin') {
if (isset($this->$name)){
echo '存在该属性';
} else {
echo '没有该属性';
}
} else {
echo '无权检测';
}
}
//**unset($name): 当注销未定义可不见属性时触发
	public function __unset($name){
if ($this->name === 'admin') {
			unset($this->$name);
		} else {
			echo '无法删除';
		}
	}
}
$obj = new People('迪丽热巴', 26);
echo $obj->name, '<br>';
echo $obj->country, '<br>';
// 怎么才能查看 country, 只能用'admin'来实例化
$obj = new People('admin', 50);
echo $obj->country, '<br>';
// 直接修改 age, 类中没有__set()会报错
$obj->age = 80;
// 查看 age 字段值
echo $obj->age, '<br>';
// 检测是否存在age字段
isset($obj->age);
echo '<br>';
// 删除 salary 属性
unset($obj->age);
echo '<br>';
isset($obj->age);
echo '<hr>';
```

### 方法重载

> \_\_call(): 访问未定义的对象方法时会自动调用它

> \_\_callStatic(): 访问未定义的静态类方法时会自动调用它

```php
class People{
// **call(): 访问不存在/不可见对象方法时触发，有两个参数，第一个是方法名，第二个方法的参数
public function **call($name, $arguments){
		return '方法名: '.$name.'<br>方法参数列表: ' . '<pre>'.print_r($arguments, true).'不存在';
	}
	// __callStatic(): 访问不存在/不可见的类方法(静态)方法时触发
	public static function __callStatic($name, $arguments){
		return '方法名: '.$name.'<br>方法参数列表: ' . '<pre>'.print_r($arguments, true).'不存在';
	}
}
$obj = new People();
// 访问不存在或无权访问的对象方法
echo $obj->getInfo1(10,20,30);
echo '<hr>';
// 访问不存在或无权访问的静态类方法
echo Demo4::getInfo2('html','css', 'javascript');
echo '<hr>';
```

### 小案例

```php
call_user_func($callback[,$parameter...]): 以函数参数的方式,执行一个函数,其实就是以回调的方式执行函数
call_user_func_array($callback,$array): 功能与 call_user_func()相同, 仅仅是参数以数组形式提供
function sum($a, $b) {
	return $a . ' + ' . $b . ' = ' . ($a+$b);
}
// 正常函数调用
echo sum(20, 40);
echo '<br>';
// 以回调的方式执行该函数
echo call_user_func('sum', 50, 20);
echo '<br>';
// call_user_func_array(), 第二个参数是数组格式,不能省略
echo call_user_func_array('sum', [30, 80]);
echo '<hr>';
// 现在换个思路, 将函数放在一个类中, 再来调用这个方法/函数
class Test1{
	// 对象方法
	public function sum($a, $b){
		return $a . ' + ' . $b . ' = ' . ($a+$b);
	}
}
// 如果以回调方式执行对象方法呢?
$obj = new Test1();
echo call_user_func([$obj,'sum'], 50, 20);
echo '<br>';
// 仅以 call_user_func_array()举例, call_user_func()原理一样
echo call_user_func_array([$obj,'sum'], [10,30]);
echo '<br>';
// 如果仅调用一次,可以简化一下对象创建方式
echo call_user_func_array([new Test1(),'sum'], [15,35]);
echo '<hr>';
// 如果是一个静态方法,如果调用呢？
class Test2{
// 对象方法 (乘法运算)
public static function mul($a, $b){
		return $a . ' * ' . $b . ' = ' . ($a\*$b);
}
}
// 直接将类名与方法写在一个字符串即可
echo call_user_func_array('Test2::mul', [10,30]);
echo '<br>';
// 将类名与类方法分开,放在一个数组中
echo call_user_func_array(['Test2','mul'], [10,30]);
echo '<br>';
echo '类名是: '. Test2::class; // 返回一个类名字符串
echo '<br>';
// 所以这样写,也是正确的
echo call_user_func_array([Test2::class,'mul'], [10,30]);
```

- 下面是一个 sql 语句类的案例

> 类方法的跨类调用的实现：方法重载的应用，数据库查询的链式操作链式调用的原理分析：以模拟 ThinkPHP5.1 框架中的数据库查询构造器为案例,来演示方法重载的精妙之处

```php
require 'query.php';
class Db
{
// 数据库连接对象
protected static $pdo = null;
	// 数据库连接方法, 每次查询时再连接, 实现真正的惰性连接,节省系统开销
	public static function connection(){
		// 为简化,这里直接使用字面量参数连接数据库,真实项目中应该将参数放在配置文件中
		self::$pdo = new PDO('mysql:host=localhost;dbname=ouyangke','root','root');
}
// 这是查询类操作的入口, 通过静态魔术方法进行跳转,实现对象方法的跨类调用
public static function \_\_callStatic($name, $arguments){
		// 创建pdo对象,并连接数据库
		self::connection();
		// 实例化查询类,将连接对象做为参数
		$query = new query(self::$pdo);
// 执行查询类 Query 中的对象方法, 注意参数是数组,我只需要第一个参数:表名, 所以加了索引键名
return call_user_func_array([$query,$name],[$arguments[0]]);
}
}

// 客户端的链式调用
// 以 Db 类做入整数数据库操作的入口, SQL 语句的各个部分用对象方法提供
// 链式操作是现代 PHP 框架的基础,非常有用
$users = Db::table('user')
		->field('uid,name,age')
		->where('uid > 1')
		->limit(5)
		->select();
// 遍历查询结果
foreach ($users as $user) {
	print_r($user); echo '<br>';
}
query.php

<?php
// 数据库查询类

class query
{
	// 连接对象
	public $pdo = null;

	// 数据表名
	public $table = '';

	// 字段列表
	public $field = '';

	// 查询条件
	public $where = '';

	// 显示数量
	public $limit = 0;

	// 构造方法,初始化连接对象
	public function __construct($pdo)
	{
		// 连接对象是对象方法的共享属性
		$this->pdo = $pdo;
	}
	// 调用表名
	public function table($tablName)
	{
		$this->table = $tablName;

		// 返回当前对象,便于链式调用该对象的其它方法
		return $this;
	}
	// 设置查询字段
	public function field($fields)
	{
		$this->field = $fields;
		return $this;
	}
	// 设置查询条件
	public function where($where)
	{
		$this->where = $where;
		return $this;
	}
	// 设置显示数量
	public function limit($limit)
	{
		$this->limit = $limit;
		return $this;
	}
	// 创建SQL查询语句对象,并返回查询结果
	public function select()
	{
		// 查询条件分开设置, 可以确保链式方法独立
		$fields = empty($this->field) ? '*' : $this->field;
		$where = empty($this->where) ? '' : ' WHERE '.$this->where;
		$limit = empty($this->limit) ? '' : ' LIMIT '.$this->limit;

		// 接装SQL语句
		$sql = 'SELECT '.$fields.' FROM '.$this->table. $where . $limit;
		// 预处理查询
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);

	}
}
```

### 自动加载

> spl_autoload_register(callback): 通过回调自动加载外部文件

> **DIR**魔术常量// 查看当前脚本所在的目录

```php
echo __DIR__,  '<br>';

include __DIR__ . '/inc/Test1.php';
include __DIR__ . '/inc/Test2.php';
include __DIR__ . '/inc/Test3.php';
//如果当前脚本使用了几十上百这样的类, 上面的方式就很不人性
//使用下面的自动加载机制, 会根据客户端调用的类, 自动进行加载,效率高, 不出错
// php标准函数库中提供了一个自动加载文件的注册函数,可以实现这个功能
// 这个函数,在当前脚本引用一个未加载的文件时, 会自动调用它的回调方法来加载这个文件
spl_autoload_register(function ($class){
	//	include __DIR__ . '/inc/Test1.php';
	//	将include中的类名Test1用变量替换掉,这样就实现了最简单的自动加载
	//	后面我们会使用命名空间来完善这个函数,目前大家先理解到这里即可
	include __DIR__ . '/inc/'.$class.'.php';
});

$test1 = new Test1();
echo $test1->get(), '<br>';

$test1 = new Test2();
echo $test1->get(), '<br>';

$test1 = new Test3();
echo $test1->get(), '<br>';
echo '<hr>';
Test1.php、Test2.php、Test3.php 文件

<?php
namespace inc;
class Test1{
	public static function get(){
		return __CLASS__ . ' 类, 加载成功~~';
	}
}
```

### 抽象类

> abstract: 定义抽象方法/抽象类,类中只要有一个抽象方法, 该类就应该声明为抽象类,抽象类只能被继承,不能实例化,并且抽象方法必须在子类实现,实现抽象方法的子类方法可见性不能低于抽象方法原定义,抽象方法是 public, 子类方法只能是 public,抽象方法是 protected, 子类方法只能是 protected/public,一个抽象类必须被扩展为一个特定的类,我们才能创建类实例,使用类中功能

```php
abstract class a{
	public $name;
	public function __construct($name){
		$this->name = $name;
	}
	// 不管有多少个普通方法，只要有一个抽象方法，就是抽象类
	public function af(){
		echo $this->name;
	}
	// 抽象方法不能有内容，里面不能有代码，{}：不能有
	abstract public function aff();
}
// 抽象类不能实例化，不能new，只能继承
// 我们就用b类，继承 a抽象类
class b extends a{
	// b类 继承 a抽象类后：必须把a抽象类 ，里面的抽象方法，重新写一遍（实现）
	public function aff(){
		echo $this->name;
	}
}
// 实现后，我们可以调用子类，进行实例化，然后调用成员方法和成员变量。
$a = new b('欧阳克');
// 为什么抽象类里的af方法能调用呢，因为它是普通方法。
$a->af();
echo '<br/>';
// 这里的方法为什么能调用呢？ 因为b类，继承了a抽象类的方法后：实现成为普通类。
$a->aff();
```

- 在实际开发过程中, 通常并不会直接使用一个父类/超类,而是在父类中定义一些方法声明并且确信这个方法肯定是会被子类重写的, 父类中没必要实现,只要给一个方法编写规范即可
- 这个规范包括方法的名称, 参数列表等,具体实现就完全交给子类去完成了
- 相当于公司的部门主管, 接受到老板的任务, 只把属于自己的部分做了, 其它部分, 设置一个标准交给下属去完成

```php
abstract class Person{
	protected $name;
	protected function __construct($name='peter zhu'){
		$this->name = $name;
	}
	// 该方法不需要重写, 可以通过子类对象访问,应该设置为public
	public function getName(){
		return $this->name;
	}
	// 修改属性方法,设置为抽象方法,交给子类实现
	abstract protected function setName($value);
}
// 当子类继承 抽象父类，普通的方法，可以直接使用，抽象方法，必须重新实现。
class Stu extends Person{
	// 注意: 构造方法不会自动继承, 必须手动重写
	public function __construct($name='peter zhu'){
		parent::__construct($name);
	}
	// 1，它的父类，有这个抽象方法，这里必须重新写，带着具体的代码。
	// 2，类实例化后，调用这个方法，就是直接调用这个方法，跟抽象方法没关系。
	public function setName($value){
		$this->name = $value;
	}
}
$stu = new Stu('猪哥');
echo 'php中文网创始人: ' . $stu->getName() . '<br>';
// 调用子类的重写的抽象方法setName(),来设置属性
$stu->setName('灭绝师太');
// 3，用setName传值后，值给到父抽象类里的$name,用父抽象类的getName方法可以输出传值
echo 'php中文网前端讲师: ' . $stu->getName() . '<br>';
echo '<hr>';
```

> 类中只要有一个成员设置为抽象,该类就必须设置抽象类,一个类一旦被设置为抽象类,就具备了二个特点:

1. 不能实例化
   类中抽象方法,在子类中必须实现（全部），就是子类必须有父类的抽象方法
   ::: tip 注意
   属性设置为抽象无意义, 抽象仅针对方法，类
   子类的成员可见性必须等于或高于所继承的抽象类成员可见性,例如抽象类是 proteced,子类可以是 protected/pulic
   子类重写的抽象方法可见性,究竟用 protected/pulic, 要看这个子类是最终被客户端访问,如果是就 public,如果不是 protected
   级别：
   public 级别最高： A
   protected 级别中等： B
   private 级别最低： C
   :::

### 接口

> interface: 指定某个类必须实现的方法,但不需要定义方法的具体实现过程

- 接口中仅允许出现: 方法与常量
- 接口的方法可见性必须是: public
- 接口的方法体必须是空的
- 接口是类的代码模板, 可以像类一样有父子继承关系,例如父接口, 子接口
- implements: 类实现接口的关键字
- 如果仅是部分实现接口中的方法, 请用一个抽象类来实现它
- 接口中的方法，必须全是抽象方法
- 抽象和接口区别：抽象可以有普通方法，成员变量。
  接口不可以有普通方法，不可以有成员变量。

```php
interface iVehicle{
	const COUNTRY = '中国';
	// 驱动方式: 汽车, 新能源
	public function setFuel($fuel);
	// 用途
	public function setPurpose($purpose);
}
// Car 类 实现了接口:  iVehicle，关键词：implements
// 抽象类 实现接口:  iVehicle，关键词：implements
// 接口 可以 继承接口：extends
// 类 可以 同时 继承 和实现(先继承，在实现)
// 可以实现多个接口，用逗号隔开
class Car implements iVehicle{
	public $fuel;
	public $purpose;
	// 构造方法
	public function __construct($fuel='汽油', $purpose='家用'){
		$this->fuel = $fuel;
		$this->purpose = $purpose;
	}
	// 必须实现的接口方法
	public function setFuel($fuel){
		$this->fuel = $fuel;
	}
	// 必须实现的接口方法
	public function setPurpose($purpose){
		$this->purpose = $purpose;
	}
	// 类中自定义的对象方法
	public function getInfo(){
		return $this->fuel . $this->purpose . '车 <br>';
	}
}

// 客户端代码
$car = new Car();
echo $car->getInfo();

$car->setFuel('新能源');
$car->setPurpose('公交');
echo $car->getInfo();
echo '<hr>';
```

- 如果暂时只能实现接口中的部分方法, 可以用一个抽象来实现这个接口

```php
interface iVehicle{
	const COUNTRY = '中国';
	// 驱动方式: 汽车, 新能源
	public function setFuel($fuel);
	// 用途
	public function setPurpose($purpose);
}

abstract class Auto implements iVehicle{
	public $fuel;
	// 只实现接口中的setFuel()方法, 另一个方法并未实现
	public function setFuel($fuel){
		$this->fuel = $fuel;
	}
}

// 再创建一个类,来继承扩展这个抽象类  Auto
class Car1 extends Auto{
	public $purpose;

	// 构造方法
	public function __construct($fuel='汽油', $purpose='家用'){
		$this->fuel = $fuel;
		$this->purpose = $purpose;
	}
	// 这个方法原来在接口中声明的,在它继承的抽象类中并没有声明
	public function setPurpose($purpose){
		$this->purpose = $purpose;
	}
	// 自定义的方法
	public function getInfo(){
		return $this->fuel . $this->purpose . '车 <br>';
	}
}

// 客户端代码

$car1 = new Car1();
echo $car1->getInfo();

$car1->setFuel('天然气');
$car1->setPurpose('家用');
echo $car1->getInfo();
总结：
如果不能将接口中方法全部实现就用抽象类来实现它
否则,就必须全部把接口中方法全部实现
```

### 接口实战案例

```php
// 定义一个接口,实现数据库常用操作:增删改查
interface iCurd
{
	// 增加数据
	public function create($data);

	// 读取数据
	public function read();

	// 更新数据
	public function update($data, $where);

	// 删除数据
	public function delete($where);
}

// 创建Db类, 实现iCurd接口,完成基本的数据库操作
class Db implements iCurd{
	//数据库的连接对象
	protected $pdo = null;

	// 数据表名
	protected $table;

	// 构造方法: 连接数据库,并设置默认数据表名称
	public function __construct($dsn, $user, $password, $table='staff'){
		$this->pdo = new PDO($dsn, $user, $password);
		$this->table = $table;
	}

	// 读取
	public function read($fields='*', $where='', $limit='0, 5'){
		// 设置查询条件
		$where = empty($where) ? '' : ' WHERE ' . $where;
		// 设置显示数量
		$limit = ' LIMIT ' . $limit;

		// 预处理查询操作
		$sql = 'SELECT '.$fields.' FROM '.$this->table.$where.$limit;
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();

		// 返回二维数组表示的查询结果集
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	// 新增, 参数是数组: 新记录的键值对
	public function create($data){
		// 字段列表
		$fields = ' (name,age,sex,position,mobile,hiredate)';
		// 值列表
		$values = '(:name,:age,:sex,:position,:mobile,:hiredate)';
		// 创建SQL语句
		$sql = 'INSERT INTO '.$this->table.$fields.' VALUES '.$values;

		// 预处理执行新增操作
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute($data);

		// 返回新增数量, 新增记录的ID组成的数组
		return [
			'count'=>$stmt->rowCount(),
			'id'=>$this->pdo->lastInsertId()
		];
	}

	// 更新, 为了数据安全, 不允许无条件更新
	public function update($data, $where){
		// 难点在于SET 参数的处理上,利用传入的$data数组,进行拆装

		// 获取数组的键名组成的数组
		$keyArr = array_keys($data);
		$set = '';
		// 遍历键名表示的字段列表,拼装预处理需要的sql语句,注意占符符的表示
		foreach ($keyArr as $value) {
			$set .= $value . ' = :' .$value. ', ';
		}
		// 去掉最后一个逗号, 注意每个逗号后有一个空格,去除时也要带上这个空格
		$set = rtrim($set,', ');

		// 预处理执行更新操作
		$sql = 'UPDATE '.$this->table.' SET '.$set .' WHERE ' .$where;
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute($data);

		// 返回被更新的记录数量
		return $stmt->rowCount();
	}

	// 删除: 与更新一样, 这也是危险的写操作, 不允许无条件删除
	public function delete($where){
		// 预处理执行删除操作
		$sql = 'DELETE FROM '.$this->table.' WHERE '.$where;
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->rowCount();
	}
}

// 客户端的测试代码
// 实例化Db类
$dsn = 'mysql:host=localhost;dbname=ouyangke';
$user = 'root';
$password = 'root';
$db = new Db($dsn, $user, $password);


// 遍历读取
foreach ($db->read() as $item) {
	print_r($item); echo '<br>';
}

echo '<hr>';

// 新增数据
$data = [
	'name'=>'郭靖',
	'age'=>30,
	'sex'=>1,
	'position'=>'金刀驸马',
	'mobile'=>'13666668888',
	'hiredate'=>time()
];
$res = $db->create($data);
echo '成功新增'.$res['count'].'条记录,最新记录的主键ID是: '.$res['id'];

echo '<hr>';

// 更新记录
$data = [
	'age' => 5,
	'position'=>'抗金英雄'
];
$where = 'id = 5';
echo '成功更新了: ' .$db->update($data, $where). ' 条记录';

echo '<hr>';

// 删除记录
$where = 'id = 5';
echo '成功更新了: ' .$db->delete($where). ' 条记录';
```

### 后期静态绑定

> 后期静态绑定,也叫"延迟静态绑定",这个技术应用在静态继承的上下文环境中,用于动态调用被重写的方法,调用被重写的静态方法使用关键字: static 加上"范围解析符"::,:: 范围解析符的使用场景,访问类方法与类常量,访问被重写的对象或类方法,static 关键字用来调用重写方法的时候,可以动态的绑定当前调用的类

```php
class A{
	public static function who(){
		echo 111;
	}
	public function test(){
		// self::who();	// 猜一下，是调用它自己的who，还是子类的who呢？

		// 那么如何在这种静态继承的上下文环境中, 静态调用类中方法的时候,正确识别调用者呢?
		// 可以将self 关键字改为: static ,
		// 注意: static 除了可以用在静态方法中, 也可以用在普通对象方法中
		static::who();
	}
}

// B继承了A，重写A类里面的who方法。
class B extends A{
	public static function who(){
		echo 222;
	}
}

$a = new B();
echo $a->test();
```

- 表达类相关的关键词

| **关键词** | **类外声明** | **声明类** | **声明属性** | **声明方法** |            **解释**            |
| :--------: | :----------: | :--------: | :----------: | :----------: | :----------------------------: |
|   const    |      √       |            |      √       |              |           定义类常量           |
|  extends   |              |     √      |              |              | 扩展类，用一个类去扩展它的父类 |
|   public   |              |            |      √       |      √       |         公用属性或方法         |
| protected  |              |            |      √       |      √       |         私有属性或方法         |
|  private   |              |            |      √       |      √       |       受保护的属性或方法       |
|  abstract  |              |     √      |      √       |              |          抽象类或方法          |
|   final    |              |     √      |              |      √       |          类不能被继承          |
| interface  |              |     √      |              |              |            创建接口            |
| implements |              |     √      |              |              |            实现接口            |
|  parent::  |              |            |              |              |            访问父类            |
|  $this->   |              |            |              |              |            访问本类            |
|   self::   |              |            |              |              |            访问静态            |
|  static::  |              |            |              |              |          后期静态绑定          |
| namespace  |      √       |            |              |              |          创建命名空间          |

> 本教程来自 PHP 中文网
