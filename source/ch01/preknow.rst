.. include:: ../LINKS.rst


Coffee整备
==============

只要明确一些 `CoffeeScript`_ 的`基本形式` 80% 的实际编程就可以混进去了 `!-)` :

严正推荐: 

- `图灵社区 : 阅读 : CoffeeScript语言参考 <http://www.ituring.com.cn/article/559>`_
  
  - 未尽的好书内容

- `3本免费CoffeeScript电子书 <http://heikezhi.com/2011/07/03/3-free-coffeescript-ebooks/>`_


中文的推荐:

- `为什么CoffeeScript这么美? - CNode <http://club.cnodejs.org/topic/4f16442ccae1f4aa270010cb>`_
- `10个让朋友对你刮目相看的CoffeeScript单行代码绝技 <http://heikezhi.com/2011/06/08/10-coffeescript-one-liners-to-impress-your-friends/>`_



基本语法
---------------


::

    # 单行注释
    ###
        多行
        注释
    ###
    a="hollo"
    b= 1
    # 多行字串变量
    mobyDick = """       
      <strong>
        cup of coffeescript
      </strong>
      """
    # 函式声明
    func = -> "bar"
    # 有参数函式
    func = (a, b) -> 
        # 不用 return() 最后一行就是自动返回的
        a * b
    alert b+a //省去函式的参数括号

    kids =    // 字典变量使用缩进完成声明,大爱!
      brother:
        name: "Max"
        age:  11
      sister:
        name: "Ida"
        age:  9
    
    if 1 isnt c   # 不等于
        console.log "Yes"
        # 不论前台还是后台开发,都不建议使用 alert() 进行调试输出了,,
    else
        console.log "No"
    # 省去原先的各种多余 {}
    # 可以条件后置
    console.log "It's cold!" if heat < 5
    for i in [1..10] by 2  # 伟大的列表推导式 ;-)
        console.log "hollo:"+i
    # 跨行内置过程
    alert(
      try
        nonexistent / undefined
      catch error
        "And the error is ... #{error}"
    )
    # JS嵌入
    hi = `function() {
      return [document.title, "Hello JavaScript"].join(": ");
    }`
    # 分类判定
    switch day
      when "Mon" then go work
      when "Tue" then go relax
      when "Thu" then go iceFishing
      when "Fri", "Sat"
        if day is bingoDay
          go bingo
          go dancing
      when "Sun" then go church
      else go work
    # 区间判定
    cholesterol = 127
    healthy = 200 > cholesterol > 60    




- 基本数据
- 全局方法
- 基本对象
都同正常的 `node.js`_ ,但是,都可以更加简洁的表述!




.. warning:: (#_#)

    - 大规模使用 `CoffeeScript`_ 时,是有潜在杯具的:
    - `A Case Against Using CoffeeScript ☃ Ryan Florence Online <http://ryanflorence.com/2011/2012/case-against-coffeescript/>`_


