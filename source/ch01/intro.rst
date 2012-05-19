.. include:: ../LINKS.rst

好吧,想 C/C++/PHP/node.js/Python ... 切换到 `node.js`_ ?!

- 其实,真心简单,毕竟, `node.js`_ 实在是非常简单的 `脚本语言` 
- 其实,任何开发语言的乱入,完全可以不管什么设计思想,开发模式之类的高级东西
- 不过,真心对于手工写 JS 有心理抵触吼,,,特别是:


.. code-block:: js
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "text/plain" })
      res.end("Hello world\n");
    });


这种 `()` 中包含多行 `function(){...}` 结构的

- `node.js`_ 更加经常见到多层这种嵌套的情景
- 非常难以说服自个儿不会套错了,,,

所以,好在,万幸,我们有 `CoffeeScript`_

.. warning:: 

    - 走起!


