(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{434:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("1、进程和线程的区别")])]),t._v(" "),s("p",[t._v("​\t\t**进程：**是资源分配的最小单位，是程序的执行过程，一个进程可以有多个线程，多个线程共享进程的堆和方法区资源，但每个线程又有属于自己的本地方法栈、虚拟机栈、程序计数器")]),t._v(" "),s("p",[t._v("​\t\t**线程：**是任务调度和执行的最小单位，线程间可能存在相互影响，执行开销较小，不利于资源的管理和保护，线程间是共享进程中的资源的")]),t._v(" "),s("p",[s("strong",[t._v("2、协程？")])]),t._v(" "),s("p",[t._v("​\t\t是一种比线程更加轻量级的存在，正如一个进程可以拥有多个线程一样，一个线程可以拥有多个协程。")]),t._v(" "),s("p",[s("strong",[t._v("3、进程间通信方式IPC")])]),t._v(" "),s("p",[t._v("参考：https://www.jianshu.com/p/c1015f5ffa74")]),t._v(" "),s("p",[s("strong",[t._v("匿名管道pipe：")])]),t._v(" "),s("p",[t._v("​\t\t匿名管道是半双工的，数据只能单向通信；需要双方通信时，需要建立起两个管道；只能用于父子进程或者兄弟进程之间（具有亲缘关系的进程）。")]),t._v(" "),s("p",[s("strong",[t._v("命名管道FIFO：")])]),t._v(" "),s("p",[t._v("​\t\t不同于匿名管道之处在于它提供一个路径名与之关联，以FIFO的文件形式存在于文件系统中。这样，即使与FIFO的创建进程不存在亲缘关系的进程，只要可以访问该路径，就能够彼此通过FIFO相互通信（能够访问该路径的进程以及FIFO的创建进程之间），因此，通过FIFO不相关的进程也能交换数据。值得注意的是，FIFO严格遵循先进先出（first in first out），对管道及FIFO的读总是从开始处返回数据，对它们的写则把数据添加到末尾。")]),t._v(" "),s("p",[s("strong",[t._v("信号：")])]),t._v(" "),s("p",[t._v("​\t\t信号是一种比较复杂的通信方式，信号产生的条件：按键、硬件异常、进程调用kill函数将信号发送给另一个进程、用户调用kill命令将信号发送给其他进程，信号传递的消息比较少，主要用于通知接收进程某个时间已经发生。")]),t._v(" "),s("p",[s("strong",[t._v("消息队列：")])]),t._v(" "),s("p",[t._v("​\t\t消息队列是消息的链表，存放在内核中并由消息队列标识符标识，消息队列克服了信号传递信息少，管道只能承载无格式字节流以及缓冲区大小受限等特点。消息队列起信箱作用，到了就挂在那里，需要的时候去取。消息队列提供了一种在两个不相关进程间传递数据的简单有效的方法。与命名管道相比：消息队列的优势在于，它独立于发送和接收进程而存在，这消除了在同步命名管道的打开和关闭时可能产生的一些困难。消息队列提供了一种从一个进程向另一个进程发送一个数据块的方法。而且，每个数据块被认为含有一个类型，接收进程可以独立地接收含有不同类型值的数据块。")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("优点：")])]),t._v(" "),s("p",[t._v("​\t\tA. 我们可以通过发送消息来几乎完全避免命名管道的同步和阻塞问题。")]),t._v(" "),s("p",[t._v("​\t\tB. 我们可以用一些方法来提前查看紧急消息。")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("缺点：")])]),t._v(" "),s("p",[t._v("​\t\tA. 与管道一样，每个数据块有一个最大长度的限制。")]),t._v(" "),s("p",[t._v("​\t\tB. 系统中所有队列所包含的全部数据块的总长度也有一个上限。")]),t._v(" "),s("p",[s("strong",[t._v("共享内存(share memory)：")])]),t._v(" "),s("ul",[s("li",[t._v("使得多个进程可以可以直接读写同一块内存空间，是最快的可用IPC形式。是针对其他通信机制运行效率较低而设计的。")]),t._v(" "),s("li",[t._v("为了在多个进程间交换信息，内核专门留出了一块内存区，可以由需要访问的进程将其映射到自己的私有地址空间。进程就可以直接读写这一块内存而不需要进行数据的拷贝，从而大大提高效率。")]),t._v(" "),s("li",[t._v("由于多个进程共享一段内存，因此需要依靠某种同步机制（如信号量）来达到进程间的同步及互斥。")])]),t._v(" "),s("p",[s("strong",[t._v("信号量(Semaphores) ：")])]),t._v(" "),s("p",[t._v("​\t\t信号量是⼀个计数器，⽤于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信⽅式主要⽤于解决与同步相关的问题并避免竞争条件。")]),t._v(" "),s("p",[s("strong",[t._v("套接字(Sockets) :")])]),t._v(" "),s("p",[t._v("​\t\t此⽅法主要⽤于在客户端和服务器之间通过⽹络进⾏通信。套接字是⽀持TCP/IP 的⽹络通信的基本操作单元，可以看做是不同主机之间的进程进⾏双向通信的端点，简单的说就是通信的两⽅的⼀种约定，⽤套接字中的相关函数来完成通信过程。")]),t._v(" "),s("p",[s("strong",[t._v("4、用户态和核心态")])]),t._v(" "),s("p",[t._v("​\t在计算机系统中，分两种程序：系统程序和应用程序，为了保证系统程序不被应用程序有意或无意地破坏，为计算机设置了两种状态——用户态、核心态")]),t._v(" "),s("p",[t._v("**用户态：**只能受限的访问内存，运行所有的应用程序")]),t._v(" "),s("p",[t._v("**核心态：**运行操作系统程序，cpu可以访问内存的所有数据，包括外围设备")]),t._v(" "),s("p",[s("strong",[t._v("为什么要有用户态和内核态：")])]),t._v(" "),s("p",[t._v("​\t\t由于需要限制不同的程序之间的访问能力, 防止他们获取别的程序的内存数据, 或者获取外围设备的数据, 并发送到网络")]),t._v(" "),s("p",[s("strong",[t._v("用户态切换到内核态的3种方式：")])]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("a. 系统调用")])]),t._v(" "),s("p",[t._v("​\t\t这是用户态进程主动要求切换到内核态的一种方式，用户态进程通过系统调用申请使用操作系统提供的服务程序完成工作，比如前例中fork()实际上就是执行了一个创建新进程的系统调用。而系统调用的机制其核心还是使用了操作系统为用户特别开放的一个中断来实现，例如Linux的int 80h中断。")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("b. 异常")])]),t._v(" "),s("p",[t._v("​\t\t当CPU在执行运行在用户态下的程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，比如缺页异常。")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("c. 外围设备的中断")])]),t._v(" "),s("p",[t._v("​\t\t当外围设备完成用户请求的操作后，会向CPU发出相应的中断信号，这时CPU会暂停执行下一条即将要执行的指令转而去执行与中断信号对应的处理程序，如果先前执行的指令是用户态下的程序，那么这个转换的过程自然也就发生了由用户态到内核态的切换。比如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续操作等。")]),t._v(" "),s("p",[t._v("​\t\t这3种方式是系统在运行时由用户态转到内核态的最主要方式，其中系统调用可以认为是用户进程主动发起的，异常和外围设备中断则是被动的。")]),t._v(" "),s("p",[t._v("​")]),t._v(" "),s("p",[s("strong",[t._v("5、操作系统分配的进程空间是怎样的？线程能共享哪些？")])]),t._v(" "),s("p",[t._v("​\t栈区（stack）— 由编译器自动分配释放 ，存放函数的参数值，局部变量的值等。")]),t._v(" "),s("p",[t._v("​\t堆区（heap）— 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收 。")]),t._v(" "),s("p",[t._v("​\t静态区（static）—存放全局变量和静态变量的存储")]),t._v(" "),s("p",[t._v("​\t代码区(text)—存放函数体的二进制代码。")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("线程共享堆区、静态区")])]),t._v(" "),s("p",[s("strong",[t._v("6、操作系统内存管理方式，分页分段以及段页式的优缺点")])]),t._v(" "),s("p",[t._v("参考地址：https://blog.csdn.net/qq_37189082/article/details/97963763")]),t._v(" "),s("p",[t._v("**存管理方式：**块式管理、页式管理、段式管理、段页式管理")]),t._v(" "),s("p",[s("strong",[t._v("分段管理：")])]),t._v(" "),s("p",[t._v("​\t\t在段式存储管理中，将程序的地址空间划分为若干段（segment），如代码段，数据段，堆栈段；这样每个进程有一个二维地址空间，相互独立，互不干扰。段式管理的优点是：没有内碎片（因为段大小可变，改变段大小来消除内碎片）。但段换入换出时，会产生外碎片（比如4k的段换5k的段，会产生1k的外碎片）")]),t._v(" "),s("p",[s("strong",[t._v("分页管理：")])]),t._v(" "),s("p",[t._v("​\t\t在页式存储管理中，将程序的逻辑地址划分为固定大小的页（page），而物理内存划分为同样大小的页框，程序加载时，可以将任意一页放入内存中任意一个页框，这些页框不必连续，从而实现了离散分离。页式存储管理的优点是：没有外碎片（因为页的大小固定），但会产生内碎片（一个页可能填充不满）")]),t._v(" "),s("p",[s("strong",[t._v("段页式管理：")])]),t._v(" "),s("p",[t._v("​\t\t段⻚式管理机制结合了段式管理和⻚式管理的优点。简单来说段⻚式管理机制就是把主存先分成若⼲\t段，每个段⼜分成若⼲⻚，也就是说 段⻚式管理机制 中段与段之间以及段的内部的都是离散的。")]),t._v(" "),s("p",[s("strong",[t._v("7、页面置换算法有哪些，FIFO为什么不好？如何改进?LRU思想，手写LRU")])]),t._v(" "),s("p",[t._v("**置换算法：**先进先出FIFO、最近最久未使用LRU、最佳置换算法OPT")]),t._v(" "),s("p",[s("strong",[t._v("先进先出FIFO:")])]),t._v(" "),s("p",[t._v("​\t\t原理：把内存中驻留时间最久的页面置换算法予以淘汰")]),t._v(" "),s("p",[t._v("​\t\t优点：实现简单、直观")]),t._v(" "),s("p",[t._v("​\t\t缺点：没有考虑到实际的页面使用频率，性能差、与通常页面使用的规则不符合，实际应用较少")]),t._v(" "),s("p",[t._v("​\t\t改进：给每个页面增加一个R位，每次先从链表头开始查找，如果R置位，清除R位并且把该页面节点放\t到链表结尾；如果R是0，那么就是又老又没用到，替换掉。")]),t._v(" "),s("p",[s("strong",[t._v("最近最久未使用LRU:")])]),t._v(" "),s("p",[t._v("​\t\t原理：选择最近且最久未使用的页面进行淘汰")]),t._v(" "),s("p",[t._v("​\t\t优点：考虑到了程序访问的时间局部性，有较好的性能，实际应用也比较多")]),t._v(" "),s("p",[t._v("​\t\t缺点：实现需要比较多的硬件支持，会增加一些硬件成本")]),t._v(" "),s("p",[t._v("​\t\t手写LRU: 参考 https://www.jianshu.com/p/ec1952b9d84a")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @program: Java\n * @description: LRU最近最久未使用置换算法，通过LinkedHashMap实现\n * @author: Mr.Li\n * @create: 2020-07-17 10:29\n **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//容量大小")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     *初始化构造函数\n     * @param capacity\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cache "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("capacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓存中不存在此key，直接返回")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先从链表中删除")]),t._v("\n        cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//再把该节点放到链表末尾处")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已经存在，在当前链表移除")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cache已满，删除链表头位置")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" keySet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keySet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" iterator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keySet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插入到链表末尾")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br")])]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @program: Java\n * @description: LRU最近最久未使用置换算法，通过LinkedHashMap内部removeEldestEntry方法实现\n * @author: Mr.Li\n * @create: 2020-07-17 10:59\n **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     *初始化构造函数\n     * @param capacity\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("capacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEldestEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),t._v(" eldest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" capacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 容量大于capacity 时就删除")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回key对应的value值，若不存在，返回-1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br")])]),s("p",[s("strong",[t._v("最佳置换算法OPT:")])]),t._v(" "),s("p",[t._v("​\t\t原理：每次选择当前物理块中的页面在未来长时间不被访问的或未来不再使用的页面进行淘汰")]),t._v(" "),s("p",[t._v("​\t\t优点：具有较好的性能，可以保证获得最低的缺页率")]),t._v(" "),s("p",[t._v("​\t\t缺点：过于理想化，但是实际上无法实现（没办法预知未来的页面）")]),t._v(" "),s("p",[s("strong",[t._v("8、死锁条件，解决方式。")])]),t._v(" "),s("p",[t._v("​\t死锁是指两个或两个以上进程在执行过程中，因争夺资源而造成的相互等待的现象；")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("死锁的条件：")])]),t._v(" "),s("p",[t._v("​\t\t互斥条件：进程对所分配到的资源不允许其他进程访问，若其他进程访问该资源，只能等待，直至占有该资源的进程使用完成后释放该资源；")]),t._v(" "),s("p",[t._v("​\t\t请求与保持条件：进程获得一定的资源后，又对其他资源发出请求，但是该资源可能被其他进程占有，此时请求阻塞，但该进程不会释放自己已经占有的资源")]),t._v(" "),s("p",[t._v("​\t\t非剥夺条件：进程已获得的资源，在未完成使用之前，不可被剥夺，只能在使用后自己释放")]),t._v(" "),s("p",[t._v("​\t\t循环等待条件：系统中若干进程组成环路，环路中每个进程都在等待相邻进程占用的资源")]),t._v(" "),s("p",[t._v("​\t**解决方法：**破坏死锁的任意一条件")]),t._v(" "),s("p",[t._v("​\t\t资源一次性分配，从而剥夺请求和保持条件")]),t._v(" "),s("p",[t._v("​\t\t可剥夺资源：即当进程新的资源未得到满足时，释放已占有的资源，从而破坏不可剥夺的条件")]),t._v(" "),s("p",[t._v("​\t\t资源有序分配法：系统给每类资源赋予一个序号，每个进程按编号递增的请求资源，释放则相反，从而破坏环路等待的条件")]),t._v(" "),s("p",[s("strong",[t._v("10、有哪些磁盘调度算法？")])]),t._v(" "),s("p",[s("strong",[t._v("先来先服务")])]),t._v(" "),s("ul",[s("li",[t._v("按照磁盘请求的顺序进行调度。")]),t._v(" "),s("li",[t._v("优点是公平和简单。缺点也很明显，因为未对寻道做任何优化，使平均寻道时间可能较长。")])]),t._v(" "),s("p",[s("strong",[t._v("最短寻道时间优先")])]),t._v(" "),s("ul",[s("li",[t._v("优先调度与当前磁头所在磁道距离最近的磁道。")]),t._v(" "),s("li",[t._v("虽然平均寻道时间比较低，但是不够公平。如果新到达的磁道请求总是比一个在等待的磁道请求近，那么在等待的磁道请求会一直等待下去，也就是出现饥饿现象。一般来说，两端的磁道请求更容易出现饥饿现象。")])]),t._v(" "),s("p",[s("strong",[t._v("电梯算法")])]),t._v(" "),s("ul",[s("li",[t._v("也叫"),s("code",[t._v("SCAN")]),t._v("扫描算法。电梯算法就是说读写磁头总是保持一个方向运行，直到该方向没有请求为止，然后改变运行方向。")]),t._v(" "),s("li",[t._v("因为考虑了移动方向，因此所有的磁盘请求都会被满足，解决了最短寻道时间优先的饥饿问题。")])]),t._v(" "),s("p",[s("strong",[t._v("11、什么是虚拟内存？")])]),t._v(" "),s("p",[t._v("​\t\t虚拟内存就是说，让物理内存扩充成更大的逻辑内存，从而让程序获得更多的可用内存。虚拟内存使用部分加载的技术，让一个进程或者资源的某些页面加载进内存，从而能够加载更多的进程，甚至能加载比内存大的进程，这样看起来好像内存变大了，这部分内存其实包含了磁盘或者硬盘，并且就叫做虚拟内存。")]),t._v(" "),s("p",[s("strong",[t._v("12、什么是分页系统？")])]),t._v(" "),s("p",[t._v("​\t\t分页就是说，将磁盘或者硬盘分为大小固定的数据块，叫做页，然后内存也分为同样大小的块，叫做页框。当进程执行的时候，会将磁盘的页载入内存的某些页框中，并且正在执行的进程如果发生缺页中断也会发生这个过程。")]),t._v(" "),s("p",[t._v("​\t\t页和页框都是由两个部分组成的，一个是页号或者页框号，一个是偏移量。分页一般是有硬件来完成的，每个页都对应一个页框，它们的对应关系存放在一个叫做页表的数据结构中，页号作为这个页表的索引，页框号作为页表的值。操作系统负责维护这个页表。")]),t._v(" "),s("p",[s("strong",[t._v("13、分页和分段有什区别？")])]),t._v(" "),s("ul",[s("li",[t._v("分页对程序员是透明的，但是分段需要程序员显式划分每个段。")]),t._v(" "),s("li",[t._v("分页的地址空间是一维地址空间，分段是二维的。")]),t._v(" "),s("li",[t._v("页的大小不可变，段的大小可以动态改变。")]),t._v(" "),s("li",[t._v("分页主要用于实现虚拟内存，从而获得更大的地址空间；分段主要是为了使程序和数据可以被划分为逻辑上独立的地址空间并且有助于共享和保护。")])]),t._v(" "),s("p",[s("strong",[t._v("14、页面替换算法有哪些？")])]),t._v(" "),s("p",[t._v("​\t\t"),s("strong",[t._v("在程序运行过程")]),t._v("中，如果要访问的页面不在内存中，就发生缺页中断从而将该页调入内存中。此时如果内存已无空闲空间，系统必须从内存中调出一个页面到磁盘对换区中来腾出空间。")]),t._v(" "),s("p",[s("strong",[t._v("最佳算法")])]),t._v(" "),s("p",[t._v("​\t\t所选择的被换出的页面将是最长时间内不再被访问，通常可以保证获得最低的缺页率。这是一种理论上的算法，因为无法知道一个页面多长时间不再被访问。")]),t._v(" "),s("p",[s("strong",[t._v("先进先出")])]),t._v(" "),s("p",[t._v("​\t\t选择换出的页面是最先进入的页面。该算法将那些经常被访问的页面也被换出，从而使缺页率升高。")]),t._v(" "),s("p",[s("strong",[t._v("LRU")])]),t._v(" "),s("p",[t._v("​\t\t虽然无法知道将来要使用的页面情况，但是可以知道过去使用页面的情况。"),s("code",[t._v("LRU")]),t._v(" 将最近最久未使用的页面换出。为了实现 LRU，需要在内存中维护一个所有页面的链表。当一个页面被访问时，将这个页面移到链表表头。这样就能保证链表表尾的页面是最近最久未访问的。因为每次访问都需要更新链表，因此这种方式实现的 "),s("code",[t._v("LRU")]),t._v(" 代价很高。")]),t._v(" "),s("p",[s("strong",[t._v("时钟算法")])]),t._v(" "),s("p",[t._v("​\t\t时钟算法使用环形链表将页面连接起来，再使用一个指针指向最老的页面。它将整个环形链表的每一个页面做一个标记，如果标记是"),s("code",[t._v("0")]),t._v("，那么暂时就不会被替换，然后时钟算法遍历整个环，遇到标记为"),s("code",[t._v("1")]),t._v("的就替换，否则将标记为"),s("code",[t._v("0")]),t._v("的标记为"),s("code",[t._v("1")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);