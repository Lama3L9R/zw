---
title: 更新日志
author: Lama & Nofated
tag: 更新日志
---

[[toc]]

## 2023.03.04 添加新功能，提升编辑体验

经过 lama 的长达三分钟的全局搜索（搜 VSCode 全局搜索快捷键搜了三分钟的 lama 就是逊啦），才找到了添加 sidebar 的地方，仔细一看我的天哪，原来都是手动的。

$$
\huge{\textbf{\textit{这可不行！}}}
$$

> *LaTex 数学插件竟然支持 \textbf 和 \textit*。

于是写了一行代码自动化了这个流程，以后只需要在 `docs/1A 1B 1C 1D` 里面写文章即可，不再需要额外操作了！但是如果需要添加分区，则需要修改 `docs/.vurepress/categories.ts`。

修改方法也很简单，使用下面模板向数组内添加一条就行

```typescript
{ 
    directory: '文件夹名字，不需要完整目录，例如 "docs/1D" 那么你就要写：1D', 
    displayName: '显示名字，例如：祝福篇'
}
```

我还添加了一个 `filter` 支持，默认为排除所有后缀不是 `.md` 的文件，如果你想修改这个，你可以添加一个额外的成员 `filter` 来覆写原有的。下面是一个排除所有不是 `.ts` 文件的示例代码

```typescript
{ 
    directory: '文件夹名字，不需要完整目录，例如 "docs/1D" 那么你就要写：1D', 
    displayName: '显示名字，例如：祝福篇',
    filter: (fileName) => fileName.endsWith('.ts')
}
```

## 2022.12.23 迁移框架 & 增加 Logo & 一些想说的

各位好，我是 [Nofated](https://nofated.win)，~~也是在朱语中频繁出现的「寄」和「柚子厨」~~。我之前是朱语镜像站的提供者。一直以来，我都在吐槽 Lama 用该死的可穿戴科技的那个框架，第一感觉太花哨，而且对文章内容读取、渲染都感觉稀碎，于是我转念一想，打算用 VuePress 和 `vuepress-theme-hope` 来重新排版、用新的框架来造轮子，目前已经部署在了镜像站，而新出的 GitHub 仓库预计几天后开源。

得益于 VuePress 的高自定义性，新的框架对于文章的渲染更好看了，同时 Lama 他没做的中文排版规范我也做了，再次吐槽可穿戴科技的那个架构（

同时感谢赢姐姐为朱语设计了 Logo，窝就是赢姐姐单推第一人喵！

## 2022.11.9 修复 Bug

其实没更新啥，就修了一个蜜汁bug，甚至都不知道哪里来的，为什么会出现，为什么出现了还能正常使用...

```
static/index.html
@@ -137,1 +137,1 @@
-    <a id="menu-control-back" class="back icon button">返回</div>
+    <a id="menu-control-back" class="back icon button">返回</a>
```
---

## 2022.10.27 站点优化

之前开 $\sqrt{400}$大 会议的时候网页用的 Google Fonts 被暂时封了，于是我切了一个国内源，然后我就忘了写更新日志了...

> 别问我为什么不直接写，我服务器是阿里云的（

**奇技淫巧**
全新的上角标标注方法！先来看个例子

> #### 朱$^{\small{①}}$在$^{\small{②}}$课$^{\small{③}}$上$^{\small{❹}}$曰$^{\small{㊄}}$：“小小年纪玩什么废萌$^{\huge{6}}$。”

使用方法也很简单，只需要借助 Latex 数学插件就行了：`$^{\small{①}}$`，如果希望上角标大大大大大大一点，可以删掉 `\small` 或者加一个 `\huge` (例如：废萌$^{\huge{6}}$ 写作 `废萌$^{\huge{6}}$`)

一些常见的数字：（全部都是`Unicode`）
1. 空心的：⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ ㉑ ㉒ ㉓ ㉔ ㉕ ㉖ ㉗ ㉘ ㉙ ㉚ ㉛ ㉜ ㉝ ㉞ ㉟ ㊱ ㊲ ㊳ ㊴ ㊵ ㊶ ㊷ ㊸ ㊹ ㊺ ㊻ ㊼ ㊽ ㊾ ㊿
2. 实心的：⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ⓫ ⓬ ⓭ ⓮ ⓯ ⓰ ⓱ ⓲ ⓳ ⓴
3. 带框框的：㉈ ㉉ ㉊ ㉋ ㉌ ㉍ ㉎ ㉏（？？）
4. 俩圈的：⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾
5. 带点的：🄀 ⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛
6. 带括号的：⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽ ⑾ ⑿ ⒀ ⒁ ⒂ ⒃ ⒄ ⒅ ⒆ ⒇
7. 甚至还有中文的：㊀ ㊁ ㊂ ㊃ ㊄ ㊅ ㊆ ㊇ ㊈ ㊉

以及我的头像没了，这个我暂时修不了，因为头像存储白嫖的80中的hxd（虽说可以存这服务器上就是了（）

**以及征求一个用于替换 `Built with Love` 的字样，在这里先给朱老师道个歉，当时选这个的时候也没想那么多 ~~(如果没看出来含义当我没说)~~

---

## 2022.10.16 添加 LaTex 支持

添加了数学插件支持！现在可以打公式了！
$$
\begin{array}{l}
  \text{Maxwell Equation Group} \\
  \text{Gauss's law:} {\huge \unicode{8751}}_\mathbb{S}  \mathbf{E} \cdot\mathrm{d}s= \cfrac{Q}{\varepsilon_0}  \\
  \text{Gauss's law for magnetism:} {\huge \unicode{8751}}_\mathbb{S}  \mathbf{B} \cdot\mathrm{d}s= 0 \\
  \text{Faraday's law:} {\huge \oint}_{\mathbb{L}}^{} \mathbf{E} \cdot \mathrm{d}l=-\cfrac{\mathrm{d}\Phi _{\mathbf{B}}}{\mathrm{d}t }  \\
  \text{Ampere, Maxwell circuital law:} {\huge \oint}_{\mathbb{L}}^{} \mathbf{B} \cdot \mathrm{d}l=\mu_0I+ \mu_0 \varepsilon_0\cfrac{\mathrm{d}\Phi _{\mathbf{E}}}{\mathrm{d}t }
\end{array}
$$

这个插件好像还支持化学的样子：$\text{湿法炼铜: }\ce{CuSO4 + Fe = Cu + FeSO4}$

使用方法也很简单，数学公式语法使用的是 `Tex` 语法，在任何一篇文章中将公式用 `$` 包围起来（例如：`$1+1=2$`会渲染成$1+1=2$）
像最上面的非行内公式可以在新的一行上写入 `$$` 后下一行输入公式，在最后一行写入 `$$` 截止，比如上方的麦克斯韦方程组应写为：

```
$$
\begin{array}{l}
  \text{Maxwell Equation Group} \\
  \text{Gauss's law:} {\huge \unicode{8751}}_\mathbb{S}  \mathbf{E} \cdot\mathrm{d}s= \cfrac{Q}{\varepsilon_0}  \\
  \text{Gauss's law for magnetism:} {\huge \unicode{8751}}_\mathbb{S}  \mathbf{B} \cdot\mathrm{d}s= 0 \\
  \text{Faraday's law:} {\huge \oint}_{\mathbb{L}}^{} \mathbf{E} \cdot \mathrm{d}l=-\cfrac{\mathrm{d}\Phi _{\mathbf{B}}}{\mathrm{d}t }  \\
  \text{Ampere, Maxwell circuital law:} {\huge \oint}_{\mathbb{L}}^{} \mathbf{B} \cdot \mathrm{d}l=\mu_0I+ \mu_0 \varepsilon_0\cfrac{\mathrm{d}\Phi _{\mathbf{E}}}{\mathrm{d}t }
\end{array}
$$

P.S. 别忘了用 \\ 换行
```

当然中文也是支持的啦
$$
\begin{array}{l}
  \text{麦克斯韦方程组} \\
  \text{高斯电厂定律:} {\huge \unicode{8751}}_\mathbb{S}  \mathbf{E} \cdot\mathrm{d}s= \cfrac{Q}{\varepsilon_0}  \\
  \text{高斯磁场定律:} {\huge \unicode{8751}}_\mathbb{S}  \mathbf{B} \cdot\mathrm{d}s= 0 \\
  \text{法拉日电磁感应定律:} {\huge \oint}_{\mathbb{L}}^{} \mathbf{E} \cdot \mathrm{d}l=-\cfrac{\mathrm{d}\Phi _{\mathbf{B}}}{\mathrm{d}t }  \\
  \text{安培，麦克斯韦环路定律:} {\huge \oint}_{\mathbb{L}}^{} \mathbf{B} \cdot \mathrm{d}l=\mu_0I+ \mu_0 \varepsilon_0\cfrac{\mathrm{d}\Phi _{\mathbf{E}}}{\mathrm{d}t }
\end{array}
$$
> Faraday === 法拉日（确信）

渲染引擎是 `MathJax`，默认插件已启用所有拓展包，大概你能手写出来的数学公式这里都能打

#### 那我不会打怎么办？

> ~~好办，去学就是了（~~

你可以使用知名科普视频创作者[妈咪说](https://www.youtube.com/c/%E5%A6%88%E5%92%AA%E8%AF%B4MommyTalk)制作的工具：[LaTeX公式编辑器](https://www.latexlive.com/home)

~~个人感觉他视频质量感觉大不如以前，好像是和头条合作了之后不能有那些“硬核”视频了（小声~~

> 冷知识，`LaTex` 的发音是 `/ˈlɑːtɛk/ (读起来类似 La'Tech)`，同理 `Tex` 的发音是 `  /ˈtɛk/ (读起来类似 Tech)`
---

## 2022.10.14 站点成立
> 有没有人愿意来投稿呢（小声

好耶！站点成立了！但依旧有很多不完善的地方，于是我决定在这里写 TODO

- [ ] 评论、统计、搜索等依赖后端的功能
- [ ] Favicon （有没有人愿意来投稿（？）
- [ ] 给主页加个版权声明和公告
- [ ] 试图搞懂这个前端（这个前端没有用我会的框架，看起来似乎是个自写框架）

你敢相信吗，我下面的内容如果不放在 `CodeBlock` 里就会消失
```
~~~这个 Markdown 系统到底是什么鬼啦为什么不支持 Checkbox~~~
```

所以，这个 `Markdown parser` 好奇怪（
