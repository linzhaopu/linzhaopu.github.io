# 第一部分

### 文件系统分层结构： LBS Linux Standard Base

### Linux 系统结构

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807153039.png)

/boot：引导文件存放目录，内核文件(vmlinuz)、引导加载器(bootloader,grub)都存放于此目录

/bin：供所有用户使用的基本命令；不能关联至独立分区， OS 启动即会用到的程序

/sbin：管理类的基本命令；不能关联至独立分区， OS 启动即会用到的程序

/lib：启动时程序依赖的基本共享库文件以及内核模块文件(/lib/modules)

/lib64：专用于 x86_64 系统上的辅助共享库文件存放位置

/etc：配置文件目录

/home/USERNAME：普通用户家目录

/root：管理员的家目录

/media：便携式移动设备挂载点

注意：

文件名称区分大小写

以.开头的文件为隐藏文件

字符设备是顺序访问的，块设备是随机访问的

dev/zero 是字符设备 c

sda 是块设备 b block

块设备有缓存，字符设备没有缓存

设置文件设备颜色 /etc/DIR_COLORS

bin 实际是个软连接 快捷方式

所以 ll /bin/ ll /bin 有区别 因为 bin 目录是个软链接

### ls 命令

`ls -a` 包含隐藏文件

`ls -l` 就是 ll 显示额外的信息

`ls -R` 目录递归情况

`ls -1 `文件分行显示

`ls -S` 按大到小排序

`ls /data -lt` 按照数据修改时间排序从新到旧（mtime）

`ls /data -ltu` 按照访问时间排序从新到旧（atime）

`ls /data -ltc` 按照元数据修改时间排序从新到旧（ctime）

`ls -U /data` 按照排放次序排序，即创建次序 旧的文件排在前面 新的排后

`ls -X` 按文件后缀排序

`ls -r` 倒序排列文件

`ls -d` 只在本目录不进入文件夹

`ls -d */` 只显示当前目录文件夹

`ls -i` 查看文件 inode 节点编号

例如在/data 下有/dir1 和/dir2 两个目录

那么只显示目录的方法是：

`ls -d /data/*/`

`ls -d .\* `显示当前目录下的隐藏文件以及文件夹

`ls -R `递归目录

`ls -R .*` 显示当前目录和子目录的包含../父目录文件

`ls -R .^.* `显示递归隐藏文件

`ls -Rd .^.* `显示本目录而不进入子目录递归的隐藏文件

`ls -ad .^.*` 不显示.和.的显示本目录的隐藏文件

### wc 命令

统计指定文件中的字节数、字数、行数，并将统计结果显示输出。

-c 统计字节数。

-l 统计行数。

-m 统计字符数。这个标志不能与 -c 标志一起使用。

### stat 命令

查看单个文件 3 个时间

文件数据分为：metadata（元数据）, data

三个时间戳：

access time：访问时间，atime，读取文件内容

modify time: 修改时间, mtime，改变文件内容（数据）

change time: 改变时间, ctime，元数据发生改变

文件名优先级排列顺序 数字 小写字母 大写字母

atime 读取时间（access time） ctime 元数据修改时间 meta data 例如 拥有者名字。。。

不修改数据则会变化读时间

`ll –time=atime /data/1` 查看/data/1 的读时间

`ll –time-ctime /data/1` 查看/data/1 元数据（状态）修改时间

`stat /data/file6` 看 file6 的所有时间

### glob 通配符

ls /etc/\*.conf

- 一个或多个字符

? 一个字符

注：汉字是 2 个字节一个字符

`ls ~-/data` 列出上一个进入目录下的/data

`ls file1..20`表示 1 或者 2 或者.或者 0 4 个文件

`ls file1-20` 表示 1 到 20

`ls file{1..20}` 表示 1 到 20

`touch {A..D}` 则创建 A B C D 四个文件

`touch fA-D` 则创建 fA-D 这一个文件

`ls fa-d` 则列出 fa fA fb fB fc fC fd 不会列出 fD

`ls fA-D `则列出 fA fb fB fc fC fd fD 不会列出 fa

如果有 a b c abc 四个文件`ls /data/abc`会显示 a，b，c 这三个文件但不会显示 abc 这个文件

如果有 a b c d 四个文件 `ls /data/^abc` 则会显示 d 就是排除的意思

[]代表选择中间的任意一个字符而不是全部字符

:digit: 任意数字 0-9

:lower: 任意小写字母

:upper: 任意大写字母

:alpha:任意大小写字母

:alnum:任意数字或字母

`ls f[:upper:]` 列出所有包含单个大写字母的文件

帮助文件` man 7 glob`

### 练习

1. 显示/var 目录下所有以 l 开头，以一个小写字母结尾，且中间出现至少一位数字的文件或目录

```
ls /var/l[:digit:][:lower:]
```

2. 显示/etc 目录下以任意一位数字开头，且以非数字结尾的文件或目录

```
 ls /etc/[:digit:]*[^:digit:]
```

3. 显示/etc/目录下以非字母开头，后面跟了一个字母及其它任意长度任意字符的文件或目录

```
 ls /etc/[^:alpha:][:alpha:]*
```

4. 显示/etc/目录下所有以 rc 开头，并后面是 0-6 之间的数字，其它为任意字符的文件或目录

```
ls -d /etc/rc0-6*
```

5. 显示/etc 目录下，所有以.d 结尾的文件或目录

```
ls -d /etc/*.d
```

6. 显示/etc 目录下，所有.conf 结尾，且以 m,n,r,p 开头的文件或目录

```
ls -d /etc/mnrp*.conf
```

7. 只显示/root 下的隐藏文件和目录

```
ls -d /root/.*
```

8. 只显示/etc 下的非隐藏目录

```
ls -d /etc/^.*/
```

### touch 命令

生成文件名为前一天时间的日志文件：

`touch date -d “-1 day” +%F.log`

注：

`/etc/motd` 是设置用户登陆后的提示信息

`/etc/issue` 是设置用户登陆前的提示信息

例：如果本来已经存在`/etc/motd`

`touch /etc/motd`

则不会改变文件，但是会刷新文件的 3 个时间

如果使用> `/etc/motd `则会改变原文件变成空文件而且改变 mtime 和 ctime（利用此特性可以删除大文件）

例如创建大文件 bigfile

`dd if=/dev/zero of=/data/bigfile bs=1M count=1024``

有一个 bigfile 大文件，则删除大文件，释放磁盘空间安全的方法为：

> bigfile

`rm -f bigfile`

**原理就是利用> bigfile 创建同名文件会覆盖原大文件变成一个小文件，然后删除**

`touch -a` 仅改变 atime 和 ctime

`touch -m` 仅改变 mtime 和 ctime

`touch -t` 指定 atime 和 mtime 的时间戳

`touch -t` 201910200830.50 /etc/hosts

`touch -c` 如果文件不存在则不予创建

### cp 命令

`cp -r` 才能复制目录

`cp -d` 保留原始链接属性，例如原文件是软链接 则复制后还是原软链接

`cp -p `默认保留模式 拥有者 时间戳等如果可能还保留上下文 链接还有额外信息等没有-r 功能

`cp -a /etc/ /data/etcbackup` 保留属性的备份 -a 保留所有属性（最全）

复制`/dev/sda /dev/zero` 之类的必须用`cp -a` 才能成功因为能保留所有属性

`cp -u` 只复制源比目标更新的文件

`cp -av /usr /data/` v 可以看到过程一般复制大文件用，可以看到过程防止死机

`cp –backup=numbered f1 /data/f1` 复制同时建立原文件的备份，生产环境中建议加入原 cp 别名

`alias cp='cp -i –backup=numbered'` 写入 .bashrc 内

1. 定义别名命令 baketc，每天将/etc/目录下所有文件，备份到/app 独立的子目录下，并要求子目录格式为

backupYYYY-mm-dd，备份过程可见

2. 创建 /app/rootdir 目录，并复制/root 下所有文件到该目录内，要求保留原有权限

### 练习

`cp -r` 才能复制目录

`cp -d `保留原始链接属性，例如原文件是软链接 则复制后还是原软链接

`cp -p` 默认保留模式 拥有者 时间戳等如果可能还保留上下文 链接还有额外信息等没有-r 功能

`cp -a /etc/ /data/etcbackup` 保留属性的备份 -a 保留所有属性（最全）

复制/dev/sda /dev/zero 之类的必须用 cp -a 才能成功因为能保留所有属性

`cp -u `只复制源比目标更新的文件

`cp -av /usr /data/` v 可以看到过程一般复制大文件用，可以看到过程防止死机

`cp –backup=numbered f1 /data/f1` 复制同时建立原文件的备份，生产环境中建议加入原 cp 别名

`alias cp='cp -i –backup=numbered'` 写入 .bashrc 内

1、定义别名命令 baketc，每天将/etc/目录下所有文件，备份到/app 独立的子目录下，并要求子目录格式为

backupYYYY-mm-dd，备份过程可见

2、创建/app/rootdir 目录，并复制/root 下所有文件到该目录内，要求保留原有权限
