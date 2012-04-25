.. include:: ../LINKS.rst


好了,已经完成了预期的 :

- 使用 `node.js` 包装 `金山网址云安全开放API <http://code.ijinshan.com/api/devmore4.html#md1>`_ 为接口服务
- 只要 `curl -d "uri=http://sina.com" localhost:9090/=/chk` 即可返回,金山云的数据!


.. sidebar:: 推荐
    :subtitle: `agentzh <http://agentzh.org/>`_ 妙吼

    - `命名的艺术 <http://agentzh.org/misc/slides/naming/#2>`_
    - `“命名”课回顾 <http://agentzh.org/misc/slides/naming/naming_recap.html#2>`_

**但是** :

- 到哪儿将这一简单服务快速可简便维护的发布出来?
- 直接給出的那一堆代码是怎么一点点写出来的?
- 变量名设计的都很挫,需要重构...

...

所以,继续折腾以及反思...

