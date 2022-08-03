# python 开胃菜

如果你要用计算机做很多工作，最后你会发现有一些任务你更希望用自动化的方式进行处理。比如，你想要在大量的文本文件中执行查找/替换，或者以复杂的方式对大量的图片进行重命名和整理。也许你想要编写一个小型的自定义数据库、一个特殊的 GUI 应用程序或一个简单的小游戏。

如果你是一名专业的软件开发者，可能你必须使用几种 C/C++/JAVA 类库，并且发现通常编写/编译/测试/重新编译的周期是如此漫长。也许你正在为这些类库编写测试用例，但是发现这是一个让人烦躁的工作。又或者你已经完成了一个可以使用扩展语言的程序，但你并不想为此重新设计并实现一套全新的语言。

那么 Python 正是你所需要的语言。

虽然你能够通过编写 Unix shell 脚本或 Windows 批处理文件来处理其中的某些任务，但 Shell 脚本更适合移动文件或修改文本数据，并不适合编写 GUI 应用程序或游戏；虽然你能够使用 C/C++/JAVA 编写程序，但即使编写一个简单的 first-draft 程序也有可能耗费大量的开发时间。相比之下，Python 更易于使用，无论在 Windows、Mac OS X 或 Unix 操作系统上它都会帮助你更快地完成任务。

虽然 Python 易于使用，但它却是一门完整的编程语言；与 Shell 脚本或批处理文件相比，它为编写大型程序提供了更多的结构和支持。另一方面，Python 提供了比 C 更多的错误检查，并且作为一门 高级语言，它内置支持高级的数据结构类型，例如：灵活的数组和字典。因其更多的通用数据类型，Python 比 Awk 甚至 Perl 都适用于更多问题领域，至少大多数事情在 Python 中与其他语言同样简单。

Python 允许你将程序分割为不同的模块，以便在其他的 Python 程序中重用。Python 内置提供了大量的标准模块，你可以将其用作程序的基础，或者作为学习 Python 编程的示例。这些模块提供了诸如文件 I/O、系统调用、Socket 支持，甚至类似 Tk 的用户图形界面（GUI）工具包接口。

Python 是一门解释型语言，因为无需编译和链接，你可以在程序开发中节省宝贵的时间。Python 解释器可以交互的使用，这使得试验语言的特性、编写临时程序或在自底向上的程序开发中测试方法非常容易。你甚至还可以把它当做一个桌面计算器。

Python 让程序编写的紧凑和可读。用 Python 编写的程序通常比同样的 C、C++ 或 Java 程序更短小，这是因为以下几个原因:

- 高级数据结构使你可以在一条语句中表达复杂的操作；

- 语句组使用缩进代替开始和结束大括号来组织；

- 变量或参数无需声明。
  Python 是 可扩展 的：如果你会 C 语言编程便可以轻易地为解释器添加内置函数或模块，或者为了对性能瓶颈作优化，或者将 Python 程序与只有二进制形式的库（比如某个专业的商业图形库）连接起来。一旦你真正掌握了它，你可以将 Python 解释器集成进某个 C 应用程序，并把它当作那个程序的扩展或命令行语言。

顺便说一句，这个语言的名字来自于 BBC 的 “Monty Python’s Flying Cirecus” 节目，和爬行类动物没有任何关系。在文档中引用 Monty Python 的典故不仅可行，而且值得鼓励！

现在你已经为 Python 兴奋不已了吧，大概想要领略一些更多的细节！学习一门语言最好的方法就是使用它，本指南推荐你边读边使用 Python 解释器练习。

下一节中，我们将解释 Python 解释器的用法。这是很简单的一件事情，但它有助于试验后面的例子。

本手册剩下的部分将通过示例介绍 Python 语言及系统的诸多特性，开始是简单的语法、数据类型和表达式，接着介绍函数与模块，最后涉及异常和自定义类这样的高级内容。

## 使用 Python 解释器

1. 调用 Python 解释器
   Python 解释器通常被安装在目标机器的 `/usr/local/bin/python3.5` 目录下。将 `/usr/local/bin `目录包含进 Unix shell 的搜索路径里，以确保可以通过输入:

```python
python3.5
```

命令来启动他。[1] 由于 Python 解释器的安装路径是可选的，这也可能是其它路径，你可以联系安装 Python 的用户或系统管理员确认（例如，`/usr/local/python` 就是一个常见的选择）。

在 Windows 机器上，Python 通常安装在 `C:\Python35` 位置，当然你可以在运行安装向导时修改此值。要想把此目录添加到你的 PATH 环境变量中，你可以在 DOS 窗口中输入以下命令:

```js
set path=%path%;C:\python35
```

通常你可以在主窗口输入一个文件结束符（Unix 系统是 Control-D，Windows 系统是 Control-Z）让解释器以 0 状态码退出。如果那没有作用，你可以通过输入 quit() 命令退出解释器。

Python 解释器具有简单的行编辑功能。在 Unix 系统上，任何 Python 解释器都可能已经添加了 GNU readline 库支持，这样就具备了精巧的交互编辑和历史记录等功能。在 Python 主窗口中输入 Control-P 可能是检查是否支持命令行编辑的最简单的方法。如果发出嘟嘟声（计算机扬声器），则说明你可以使用命令行编辑功能；更多快捷键的介绍请参考 交互式输入行编辑历史回溯。如果没有任何声音，或者显示 ^P 字符，则说明命令行编辑功能不可用；你只能通过退格键从当前行删除已键入的字符并重新输入。

Python 解释器有些操作类似 Unix shell：当使用终端设备（tty）作为标准输入调用时，它交互的解释并执行命令；当使用文件名参数或以文件作为标准输入调用时，它读取文件并将文件作为 脚本 执行。

第二种启动 Python 解释器的方法是 `python -c command [arg] ...`，这种方法可以在 命令行 执行 Python 语句，类似于 shell 中的 -c 选项。由于 Python 语句通常会包含空格或其他特殊 shell 字符，一般建议将 命令 用单引号包裹起来。

有一些 Python 模块也可以当作脚本使用。你可以使用 `python -m module [arg] ...` 命令调用它们，这类似在命令行中键入完整的路径名执行 模块 源文件一样。

使用脚本文件时，经常会运行脚本然后进入交互模式。这也可以通过在脚本之前加上 `-i` 参数来实现。

> 参数传递

调用解释器时，脚本名和附加参数传入一个名为 sys.argv 的字符串列表。你能够获取这个列表通过执行 `import sys`，列表的长度大于等于 1；没有给定脚本和参数时，它至少也有一个元素：`sys.argv[0]` 此时为空字符串。脚本名指定为 '-' （表示标准输入）时， `sys.argv[0]` 被设定为 '-'，使用 -c 指令 时，`sys.argv[0] `被设定为 '-c'。使用 -m 模块 参数时，`sys.argv[0]` 被设定为指定模块的全名。-c 指令 或者 -m 模块 之后的参数不会被 Python 解释器的选项处理机制所截获，而是留在 sys.argv 中，供脚本命令操作。

> 交互模式
> 从 tty 读取命令时，我们称解释器工作于 交互模式。这种模式下它根据主提示符来执行，主提示符通常标识为三个大于号(>>>)；继续的部分被称为 从属提示符，由三个点标识(...)。在第一行之前，解释器打印欢迎信息、版本号和授权提示:

```python
$ python3.5
Python 3.5.2 (default, Mar 16 2014, 09:25:04)
[GCC 4.8.2] on linux
Type "help", "copyright", "credits" or "license" for more information.

> > > 输入多行结构时需要从属提示符了，例如，下面这个 if 语句:

> > > the_world_is_flat = 1
> > > if the_world_is_flat:
> > > ... print("Be careful not to fall off!")
> > > ...
> > > Be careful not to fall off!
> > > 关于交互模式更多的内容，请参见 交互模式。
```

2. 解释器及其环境

   > 源程序编码

默认情况下，Python 源文件是 UTF-8 编码。在此编码下，全世界大多数语言的字符可以同时用在字符串、标识符和注释中 — 尽管 Python 标准库仅使用 ASCII 字符做为标识符，这只是任何可移植代码应该遵守的约定。如果要正确的显示所有的字符，你的编辑器必须能识别出文件是 UTF-8 编码，并且它使用的字体能支持文件中所有的字符。

你也可以为源文件指定不同的字符编码。为此，在 #! 行（首行）后插入至少一行特殊的注释行来定义源文件的编码:

```python
# -_- coding: encoding -_-
```

通过此声明，源文件中所有的东西都会被当做用 encoding 指代的 UTF-8 编码对待。在 Python 库参考手册 codecs 一节中你可以找到一张可用的编码列表。

例如，如果你的编辑器不支持 UTF-8 编码的文件，但支持像 Windows-1252 的其他一些编码，你可以定义:

```python
# -_- coding: cp-1252 -_-
```

这样就可以在源文件中使用 Windows-1252 字符集中的所有字符了。这个特殊的编码注释必须在文件中的 第一或第二 行定义。

`Footnotes`

[1] 在 Unix 系统上，Python 3.X 解释器默认未被安装成名为 python 的命令，所以它不会与同时安装在系统中的 Python 2.x 命令冲突。

## python 简介

下面的例子中，输入和输出分别由大于号和句号提示符（ >>> 和 ... ）标注：如果想重现这些例子，就要在解释器的提示符后，输入（提示符后面的）那些不包含提示符的代码行。需要注意的是在练习中遇到的从属提示符表示你需要在最后多输入一个空行，解释器才能知道这是一个多行命令的结束。

本手册中的很多示例——包括那些带有交互提示符的——都含有注释。Python 中的注释以` #` 字符起始，直至实际的行尾（译注——这里原作者用了 physical line 以表示实际的换行而非编辑器的自动换行）。注释可以从行首开始，也可以在空白或代码之后，但是不出现在字符串中。文本字符串中的 # 字符仅仅表示 # 。代码中的注释不会被 Python 解释，录入示例的时候可以忽略它们。

如下示例:

```python
# this is the first comment
spam = 1  # and this is the second comment
          # ... and now a third!
text = "# This is not a comment because it's inside quotes."
```

### 将 Python 当做计算器

我们来尝试一些简单的 Python 命令。启动解释器然后等待主提示符 >>> 出现（不需要很久）。

- 数字

解释器表现得就像一个简单的计算器：可以向其录入一些表达式，它会给出返回值。表达式语法很直白：运算符` +`，`-`，`*` 和` /` 与其它语言一样(例如：Pascal 或 C)；括号 (`()`) 用于分组。例如:

```python
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
>>> 8 / 5  # division always returns a floating point number
1.6
```

整数(例如，`2`， `4`， `20` )的类型是 `int`，带有小数部分的数字(例如，`5.0`， `1.6`)的类型是 `float`。在本教程的后面我们会看到更多关于数字类型的内容。

除法( `/`)永远返回一个浮点数。如要使用 `floor` 除法 并且得到整数结果（丢掉任何小数部分），你可以使用` //` 运算符；要计算余数你可以使用` %`

```python
>>> 17 / 3  # classic division returns a float
5.666666666666667
>>>
>>> 17 // 3  # floor division discards the fractional part
5
>>> 17 % 3  # the % operator returns the remainder of the division
2
>>> 5 * 3 + 2  # result * divisor + remainder
17
```

通过 Python，还可以使用 \*\* 运算符计算幂乘方 [1]:

```python
>>> 5 ** 2  # 5 squared
25
>>> 2 ** 7  # 2 to the power of 7
128
```

等号( '=' )用于给变量赋值。赋值之后，在下一个提示符之前不会有任何结果显示:

```python
> > > width = 20
> > > height = 5*9
> > > width * height
 900
> > > 变量在使用前必须 “定义”(赋值)，否则会出错:

> > > # try to access an undefined variable
 ... n
 Traceback (most recent call last):
File "<stdin>", line 1, in <module>
 NameError: name 'n' is not defined
```

浮点数有完整的支持；整数和浮点数的混合计算中，整数会被转换为浮点数:

```python
> > > 3 \* 3.75 / 1.5
7.5
> > > 7.0 / 2
 3.5
```

交互模式中，最近一个表达式的值赋给变量 \_。这样我们就可以把它当作一个桌面计算器，很方便的用于连续计算，例如:

```python
> > > tax = 12.5 / 100
> > > price = 100.50
> > > price \* tax
 12.5625
> > > price + _
113.0625
> > > round(_, 2)
113.06
```

此变量对于用户是只读的。不要尝试给它赋值 —— 你只会创建一个独立的同名局部变量，它屏蔽了系统内置变量的魔术效果。

除了 `int` 和 `float`，Python 还支持其它数字类型，例如 Decimal 和 Fraction。Python 还内建支持 复数 ，使用后缀 `j` 或 `J` 表示虚数部分（例如，`3+5j`）。

- 字符串

相比数值，Python 也提供了可以通过几种不同方式表示的字符串。它们可以用单引号 (`'...'`) 或双引号 (`"..."`) 标识 [2]。\ 可以用来转义引号:

```python
> > > 'spam eggs' # single quotes
'spam eggs'
> > > 'doesn\'t' # use \' to escape the single quote...
"doesn't"
> > > "doesn't" # ...or use double quotes instead
 "doesn't"
> > > '"Yes," he said.'
'"Yes," he said.'
> > > "\"Yes,\" he said."
 '"Yes," he said.'
> > > '"Isn\'t," she said.'
 '"Isn\'t," she said.'
```

在交互式解释器中，输出的字符串会用引号引起来，特殊字符会用反斜杠转义。虽然可能和输入看上去不太一样，但是两个字符串是相等的。如果字符串中只有单引号而没有双引号，就用双引号引用，否则用单引号引用。print() 函数生成可读性更好的输出, 它会省去引号并且打印出转义后的特殊字符：

```python
> > > '"Isn\'t," she said.'
 '"Isn\'t," she said.'
> > > print('"Isn\'t," she said.')
 "Isn't," she said.
> > > s = 'First line.\nSecond line.' # \n means newline
> > >s # without print(), \n is included in the output
'First line.\nSecond line.'
> > >print(s) # with print(), \n produces a new line
First line.
Second line.
```

如果你前面带有 ` \` 的字符被当作特殊字符，你可以使用 原始字符串，方法是在第一个引号前面加上一个` r`:

````python
> > > print('C:\some\name') # here \n means newline!
 C:\some
ame
> > > print(r'C:\some\name') # note the r before the quote
C:\some\name

 字符串文本能够分成多行。一种方法是使用三引号：`"""..."""` 或者` '''...'''`。行尾换行符会被自动包含到字符串中，但是可以在行尾加上` \ `来避免这个行为。下面的示例： 可以使用反斜杠为行结尾的连续字符串，它表示下一行在逻辑上是本行的后续内容:
```python
print("""\
Usage: thingy [OPTIONS]
-h Display this usage message
-H hostname Hostname to connect to
""")
````

将生成以下输出（注意，没有开始的第一行）:

```python
Usage: thingy [OPTIONS]
-h Display this usage message
-H hostname Hostname to connect to
```

字符串可以由 `+ `操作符连接(粘到一起)，可以由 `* `表示重复:

```python
> > > # 3 times 'un', followed by 'ium'
> > > 3 \* 'un' + 'ium'
'unununium'
```

相邻的两个字符串文本自动连接在一起。:

```pyton
> > > 'Py' 'thon'
'Python'
```

它只用于两个字符串文本，不能用于字符串表达式:

```python
> > > prefix = 'Py'
> > > prefix 'thon' # can't concatenate a variable and a string literal
...
> > > SyntaxError: invalid syntax
> > > ('un' \* 3) 'ium'
 ...
 SyntaxError: invalid syntax
```

如果你想连接多个变量或者连接一个变量和一个字符串文本，使用 +:

````python
> > > prefix + 'thon'
'Python'
``
这个功能在你想切分很长的字符串的时候特别有用:
```python
> > > text = ('Put several strings within parentheses '

            'to have them joined together.')

> > > text
'Put several strings within parentheses to have them joined together.'
````

字符串也可以被截取(检索)。类似于 C ，字符串的第一个字符索引为 0 。Python 没有单独的字符类型；一个字符就是一个简单的长度为 1 的字符串。:

````python
> > > word = 'Python'
> > > word[0] # character in position 0
 'P'
> > > word[5] # character in position 5
'n'

索引也可以是负数，这将导致从右边开始计算。例如:
```python
> > > word[-1] # last character
'n'
> > > word[-2] # second-last character
'o'
> > > word[-6]
 'P'
````

请注意 `-0` 实际上就是` 0`，所以它不会导致从右边开始计算。

除了索引，还支持 切片。索引用于获得单个字符，切片 让你获得一个子字符串:

```python
> > > word[0:2] # characters from position 0 (included) to 2 (excluded)
 'Py'
> > > word[2:5] # characters from position 2 (included) to 5 (excluded)
 'tho'
```

注意，包含起始的字符，不包含末尾的字符。这使得 s[:i] + s[i:] 永远等于 s:

````python
> > > word[:2] + word[2:]
'Python'
> > > word[:4] + word[4:]
 'Python'

切片的索引有非常有用的默认值；省略的第一个索引默认为零，省略的第二个索引默认为切片的字符串的大小。:
```python
> > > word[:2] # character from the beginning to position 2 (excluded)
 'Py'
> > > word[4:] # characters from position 4 (included) to the end
'on'
> > > word[-2:] # characters from the second-last (included) to the end
 'on'
````

有个办法可以很容易地记住切片的工作方式：切片时的索引是在两个字符 之间 。左边第一个字符的索引为 0，而长度为 n 的字符串其最后一个字符的右界索引为 n。例如:

```python
+---+---+---+---+---+---+
| P | y | t | h | o | n |
+---+---+---+---+---+---+
0 1 2 3 4 5 6
-6 -5 -4 -3 -2 -1
```

文本中的第一行数字给出字符串中的索引点 0…6。第二行给出相应的负索引。切片是从 i 到 j 两个数值标示的边界之间的所有字符。

对于非负索引，如果上下都在边界内，切片长度就是两个索引之差。例如，word[1:3] 是 2 。

试图使用太大的索引会导致错误:

```python
> > > word[42] # the word only has 6 characters
 Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
 IndexError: string index out of range
```

Python 能够优雅地处理那些没有意义的切片索引：一个过大的索引值(即下标值大于字符串实际长度)将被字符串实际长度所代替，当上边界比下边界大时(即切片左值大于右值)就返回空字符串:

```python
> > > word[4:42]
> > > 'on'
> > > word[42:]
> > > ''
```

Python 字符串不可以被更改 — 它们是 不可变的 。因此，赋值给字符串索引的位置会导致错误:

```python
> > > word[0] = 'J'
...
TypeError: 'str' object does not support item assignment
> > > word[2:] = 'py'
...
TypeError: 'str' object does not support item assignment
```

如果你需要一个不同的字符串，你应该创建一个新的:

```pyton
> > > 'J' + word[1:]
 'Jython'
> > > word[:2] + 'py'
'Pypy'
```

内置函数 len() 返回字符串长度:

```python
> > > s = 'supercalifragilisticexpialidocious'
> > > len(s)
> > > 34
```

::: tip See also

**Text Sequence Type — str**

- 字符串是 序列类型 的例子，它们支持这种类型共同的操作。

**String Methods**

- 字符串和 Unicode 字符串都支持大量的方法用于基本的转换和查找。

**String Formatting**

- 这里描述了使用 str.format() 进行字符串格式化的信息。
  **String Formatting Operations**

- 这里描述了旧式的字符串格式化操作，它们在字符串和 Unicode 字符串是 % 操作符的左操作数时调用。
  :::

- 列表

Python 有几个 复合 数据类型，用于表示其它的值。最通用的是 list (列表) ，它可以写作中括号之间的一列逗号分隔的值。列表的元素不必是同一类型:

```python
> > > squares = [1, 4, 9, 16, 25]
> > > squares
 [1, 4, 9, 16, 25]
```

就像字符串(以及其它所有内建的 序列 类型)一样，列表可以被索引和切片:

```python
> > > squares[0] # indexing returns the item
1
> > > squares[-1]
25
> > > squares[-3:] # slicing returns a new list
 [9, 16, 25]
```

所有的切片操作都会返回一个包含请求的元素的新列表。这意味着下面的切片操作返回列表一个新的（浅）拷贝副本:

```python
> > > squares[:] > > > [1, 4, 9, 16, 25]
```

列表也支持连接这样的操作:

```python
> > > squares + [36, 49, 64, 81, 100]
 [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

不像 `不可变的` 字符串，列表是 `可变的`，它允许修改元素:

```python
> > > cubes = [1, 8, 27, 65, 125] # something's wrong here
> > > 4 \*\* 3 # the cube of 4 is 64, not 65!
 64
> > > cubes[3] = 64 # replace the wrong value
> > > cubes
 [1, 8, 27, 64, 125]
```

你还可以使用 append() 方法 （后面我们会看到更多关于列表的方法的内容）在列表的末尾添加新的元素:

```python
> > > cubes.append(216) # add the cube of 6
> > > cubes.append(7 \*\* 3) # and the cube of 7
> > > cubes
 [1, 8, 27, 64, 125, 216, 343]
```

也可以对切片赋值，此操作可以改变列表的尺寸，或清空它:

```python
> > > letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
> > >letters
 ['a', 'b', 'c', 'd', 'e', 'f', 'g']
> > >
# replace some values
> > >
> > > letters[2:5] = ['C', 'D', 'E']
> > > letters
 ['a', 'b', 'C', 'D', 'E', 'f', 'g']
> > >
 # now remove them
> > >
> > > letters[2:5] = []
> > > letters
['a', 'b', 'f', 'g']
> > >
 # clear the list by replacing all the elements with an empty list
> > >
> > > letters[:] = []
> > > letters
 []
```

内置函数 len() 同样适用于列表:

```python
> > > letters = ['a', 'b', 'c', 'd']
> > > len(letters)
 4
```

允许嵌套列表(创建一个包含其它列表的列表)，例如:

```python
> > > a = ['a', 'b', 'c']
> > > n = [1, 2, 3]
> > > x = [a, n]
> > > x
 [['a', 'b', 'c'], [1, 2, 3]]
> > > x[0] > > > ['a', 'b', 'c']
> > > x[0][1]
'b'
```

### 编程的第一步

当然，我们可以使用 Python 完成比二加二更复杂的任务。例如，我们可以写一个生成 菲波那契 子序列的程序，如下所示:

```python
> > > # Fibonacci series:
> > >
> > > ... # the sum of two elements defines the next
> > > ... a, b = 0, 1
> > > while b < 10:
> > > ... print(b)
> > > ... a, b = b, a+b
> > > ...
 1
 1
 2
 3
 5
 8
```

这个例子介绍了几个新功能。

第一行包括了一个 多重赋值：变量`a`和` b` 同时获得了新的值` 0` 和 `1` 最后一行又使用了一次。

在这个演示中，变量赋值前，右边首先完成计算。右边的表达式从左到右计算。

条件（这里是 `b < 10` ）为`true`时， `while` 循环执行。在 Python 中，类似于 C，任何非零整数都是 `true；0` 是 `false`。条件也可以是字符串或列表，实际上可以是任何序列；

所有长度不为零的是 `true`，空序列是` false`。示例中的测试是一个简单的比较。标准比较操作符与 C 相同： `<` ，` >` ，` ==` ， `<=`，` >=` 和 `!=`。

循环 体 是 缩进 的：缩进是 Python 组织语句的方法。Python (还)不提供集成的行编辑功能，所以你要为每一个缩进行输入 TAB 或空格。

实践中建议你找个文本编辑来录入复杂的 Python 程序，大多数文本编辑器提供自动缩进。交互式录入复合语句时，必须在最后输入一个空行来标识结束（因为解释器没办法猜测你输入的哪一行是最后一行），需要 注意的是同一个语句块中的每一行必须缩进同样数量的空白。

关键字 `print()` 语句输出给定表达式的值。它控制多个表达式和字符串输出为你想要字符串（就像我们在前面计算器的例子中那样）。

字符串打印时不用引号包围，每两个子项之间插入空间，所以你可以把格式弄得很漂亮，像这样:

```python
> > > i = 256\*256
> > > print('The value of i is', i)
The value of i is 65536
```

用一个逗号结尾就可以禁止输出换行:

```python
> > > a, b = 0, 1
> > > while b < 1000:
> > > ... print(b, end=',')
> > > ... a, b = b, a+b
> > > ...
 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
> > > Footnotes
```

[1] 因为`**`的优先级高于 -，所以` -3**2` 将解释为` -(3**2)` 且结果为` -9`。为了避免这点并得到` 9`，你可以使用` (-3)**2`。
[2] 与其它语言不同，特殊字符例如 \n 在单引号(`'...'`)和双引号(`"..."`)中具有相同的含义。两者唯一的区别是在单引号中，你不需要转义`"`（但你必须转义 `\'` )，反之亦然。
