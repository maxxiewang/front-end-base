# Algorithm

## 0-Introduction

**什么是复杂度**

1. 程序执行时需要的计算量（时间复杂度）和内存空间（空间复杂度）。
2. 复杂度是数量级，不是具体的数字

横轴是原始数据输入的量，纵轴是时间复杂度的结果（计算量 or 空间）

#### 时间复杂度-==程序执行时需要的计算量==（CPU）

logn 数据量的对数

<img src="E:\Vue-project\Blogmas\public\img\image-20220313220306083.png" alt="image-20220313220306083" style="zoom:50%;" />

O(log n) 和这个二分思想有点像

#### 空间复杂度==-程序执行时需要的内存空间==

前端领域，重时间轻空间

- O(1) 有限的、可数的空间（数量级）
- O(n) 和输入量相同的空间（数量级）

  https://cloud.tencent.com/developer/news/841465
  https://blog.csdn.net/ted_cs/article/details/82881831

单元测试的一些好处，首先测试用例里面很多是复制粘贴，并不是那么复杂。再者如果有人改动了代码，单测要保证通过才可以，直接用之前的单测例子跑一下即可，一次书写，终身受益。

#### 重点

- 注意算法时间复杂度（前端重时间，轻空间）
- 识破内置API的时间复杂度（如unshift）
- 单元测试，考虑参数非法情况，提升代码健壮性

#### 队列 Queue

<img src="E:\Vue-project\Blogmas\public\img\image-20220316192909861.png" alt="image-20220316192909861" style="zoom: 50%;" />