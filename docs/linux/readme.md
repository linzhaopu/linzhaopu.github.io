# Linux 基本运维管理操作

## 管理 Linux 服务器上的文档

### 查看目录内容及目录属性

查看根目录下内容：

`ls` 命令可以用于显示指定工作目录下的内容，比如后跟参数 `/`，可以查看根目录下的内容

```javascript
ls /
```

显示根目录本身详细属性：

`-ld`选项分别代表查看详细属性和查看目录本身

```javascript
ls -ld /
```

### 切换工作目录

切换工作目录到`/boot`目录：

`cd`命令用于切换到指定的工作目录

```javascript
cd / boot;
```

### 查看目录内容的属性和隐藏文档

显示当前目录内容的详细属性，并加上易读的容量单位：

`-h`选项配合`-l`选项可以使得属性中的文件大小以易读的容量单位显示

```javascript
ls - lh;
```

显示`/root`的全部内容，包括隐藏文档：

`-A`选项可以显示出目录中包含的隐藏文档

```javascript
ls - A / root;
```

显示`/bin/bash`程序，详细属性：

```javascript
ls - l / bin / bash;
```

### 创建文档

在目录`/opt`下创建一个子目录`test`：

`mkdir`命令用于在指定路径下创建空目录

```javascript
mkdir / opt / test;
```

在目录`/opt/test`创建文件`readme.txt`和`testfile`：

`touch`命令用于在指定路径下创建空文件

```javascript
touch / opt / test / readme.txt && touch / opt / test / testfile;
```

### 复制文件

将文件`/etc/passwd`和`/etc/resolv.conf`同时复制到`/opt/test`目录下：

`cp`命令用于复制文档，当复制多个文档时，逐一列出源文档的路径，并将目标路径作为最后一个参数即可

```javascript
cp / etc / passwd / etc / resolv.conf / opt / test;
```

将文件`/etc/redhat-release`复制到`/root`下，同时改名为`version.txt`：

`cp`命令在目标路径中额外指定一个新的文档名称可以为复制过来的“复制品”进行重命名

```javascript
cp / etc / redhat - release / root / version.txt;
```

### 复制目录

将`/home`目录复制到`/opt/test`目录下 ：

`cp`命令复制目录时必须加上`-r`选项

```javascript
cp - r / home / opt / test;
```

#### 移动文档

将文件`/root/version.txt`移动到`/opt/test`目录下：

`mv`命令用于移动（剪切）文档

```javascript
mv / root / version.txt / opt / test;
```

#### 删除文档

删除文件`/etc/samba/smb.conf.example`：

`rm`命令用于删除文档，一般搭配`-rf`两个选项一起使用，Linux 中删除后的文档一般无法找回，执行删除操作需要更加谨慎

```javascript
rm - rf / etc / samba / smb.conf.example;
```

### 目录基本权限设置

设置`/opt/test`目录的权限为禁止其它用户访问：

`chmod`命令用于修改文档权限，`o=---`则是指定其它用户的读、写、执行权限均为无

```javascript
chmod o=--- /opt/test
```

### 文件基本权限设置

设置`/opt/test/resolv.conf`文件为所有用户只读文件：

`ugo=r--`代表将文件的所有身份对应的权限修改为只读

```javascript
chmod ugo=r-- /opt/test/resolv.conf
```

### 创建与编辑文件

在目录`/opt/test`创建文件`linux.txt`，写入内容 StudyLinux：

创建文件：

```javascript
touch / opt / test / linux.txt;
```

编辑文件添加以下内容，然后保存并退出：

编辑 `linux.txt`文件，并在文件中添加以下内容：

```javascript
StudyLinux;
```

完成编辑后，记得保存文件

### 修改配置文件

修改文件`/etc/hostname`将其原有内容全部删除，写入新的内容为 server0.example.com：

Linux 中通常没有图形化操作界面，所以各种系统属性、软件设置都通过修改文件的形式实现

编辑配置文件 `hostname` 删除原有内容、写入以下内容，然后保存并退出：

```javascript
server0.example.com;
```

完成编辑后，记得保存文件

## 管理 Linux 服务器上的软件包

### 使用 rpm 安装

利用 wget 从腾讯云仓库源下载软件包`vsftpd`：

`wget`命令是 Linux 命令行的下载工具，`-O`选项用于指定下载的保存路径

```javascript
wget -O /root/vsftpd-3.0.3-34.el8.x86_64.rpm http://mirrors.tencentyun.com/centos/8/AppStream/x86_64/os/Packages/vsftpd-3.0.3-34.el8.x86_64.rpm
```

使用 rpm 本地安装软件包`vsftpd`：

`rpm`命令用于安装软件包（默认不显示安装过程），`-ivh`选项用于指定以进度条的形式显示将安装过程

```javascript
rpm -ivh /root/vsftpd-3.0.3-34.el8.x86_64.rpm
```

### 使用 yum 安装

使用 yum 安装软件包`httpd`：

`yum`命令可以自动解决 Linux 软件包之间的依赖关系，帮助快速安装软件包，一般搭配`-y`选项一起使用代表取消安装之前的询问

```javascript
yum -y install httpd
```

### 管理 Linux 服务器存储
