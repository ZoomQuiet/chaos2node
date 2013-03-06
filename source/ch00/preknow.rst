.. include:: ../LINKS.rst

JS预备
==============

- 什么是 JavaScript ?
- 什么是 `node.js`_ ?

一切开始前,先必须 `相信` !


相信
-------------

- `Nirvana Studio » Blog Archive » JavaScript：世界上最被误解的语言 <http://skm.zoomquiet.org/data/20060622200239/index.html>`_

    - `Javascript的10个设计缺陷 - 阮一峰的网络日志 <http://www.ruanyifeng.com/blog/2011/06/10_design_defects_in_javascript.html>`_
    -  `我为什么向后端工程师推荐NodeJS - CNode <http://club.cnodejs.org/topic/4f16442ccae1f4aa27001111>`_
    - `什么是Node? <http://jayli.github.com/whatisnode/index.html>`_
    - `Nodejs, 脱离了浏览器的Javascript <http://fengmk2.github.com/ppt/qcon2011/index.html#slide-0>`_


...


仅仅是因为以前的 DHTML 体验,就认定 JS 是前端的命! 基本很难相信了
- 不相信,那么任何乱入行为,都会被自个儿否决
- 那真心没招了,,, 说明, `node.js`_ 不是你的那份儿菜,甭忙了,继续 C++/JAVA/.NET 吧,,,


.. warning:: 但是

    - 你选择了相信 `node.js`_ 的可能性,愿意体验这种前后合体式的业务开发形式 ?!
    - ~~~ 那么, **go!**


只要明确一些 `JavaScript`_ 的`基本形式` 80% 的实际编程就可以混进去了 `!-)` :

严正推荐: `JavaScript - MDN <https://developer.mozilla.org/en/JavaScript>`_

- 组织良好的所有相关资料!

中文的推荐:

- `JavaScript 教程 <http://www.w3school.com.cn/js/index.asp>`_
- `JavaScript 参考教程 <http://www.jb51.net/shouce/javascript/>`_




基本语法
--------------

.. code-block:: js

    // 单行注释
    /*
        多行
        注释
    */
    var a="hollo"
    var b= 1
    b++   //  自增运算,此时 b 为2
    b--   //  自减运算,此时 b 为1
    var c = b+a //字串连接,连接数字会自动转换类型

    if (1 != c){}   // 不等于
        console.log("Yes")
        // 不论前台还是后台开发,都不建议使用 alert() 进行调试输出了,,
    }else{
        console.log("No")
    }

    for (i = 1; i < 10; i++){
        console.log("hollo:"+i)
    }
    // 分类判定
    switch (parseInt(score / 10)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        result = '不及格';
        break;
      case 6:
      case 7:
        result = '通过';
        break;
      case 8:
        result = '良好';
        break;
      case 9:
        result = '优秀';
        break;
      default:
        if (score == 100)
          result = '非常优秀';
        else
          result = '囧';
    }

    function d(e,f){
        return e*f
    }
    


- 基本数据

    - 数字,字串,布尔 基本和其它脚本语言类同
    - `NaN`, `null` ~ 空值

- 全局方法

    - `eval()` ~ 将给入的字串,尝试执行
    - `isFinite()`,`isNaN()` 是否有限和空
    - `parseInt()`,`parseFloat()`,`toString()` 进行类型转换
    - `escape()`, `unescape()` 对 url 进行编码和相反,,


- 基本对象

 - Number  数字
 - String   字串
 - Array    数组
 - Math     数学
 - Date     日期

各自包含一堆内置的各种常用处理操作.

然后,一般教程,会进行复杂的文档对象(Dom) 的说明,,,
- 这是特指 html 文档对象的操作
- 当前 `node.js`_ 先关注单纯的服务端应用,不涉及 `AJAX`_ 的前后端配合,所以,不用着急学习,,


.. warning:: (#_#)

    - `12种不宜使用的Javascript语法 - 阮一峰的网络日志 <http://www.ruanyifeng.com/blog/2010/01/12_javascript_syntax_structures_you_should_not_use.html?utm_source=feedburner&utm_medium=email>`_

