#  JavaScript学习笔记  
+ # 基本语法
> + ## 数组  
>>   **slice**  
>>  &emsp; slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array。  
>>  &emsp; 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，可以很容易地复制一个Array，复制的数组与原数组用 === 判断，为false。  
>>    
>>   **unshift 和 shift**  
>>   &emsp; 如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉。  
>>
>>   **splice()**  
>>   &emsp; splice()方法是修改Array的"万能方法"，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素。  
>>
>>  **join**  
>>   &emsp; join()方法是一个非常实用的方法，它把当前Array的每一个元素都用制定的字符串连接起来，然后返回连接后的字符串。   
>
> + ## 对象  
>>    &emsp; 若属性名不是一个有效的变量，就必须用 **' '** 括起来。访问这个属性也无法使用 **.** 操作符，必须用 **['xxx']** 来访问。  
>>    &emsp; 如果要检测具体对象是否拥有某一属性，可以用 **in** 操作符。但是要注意：如果 **in** 判断一个属性存在，这个属性不一定是这个对象的，它可能是该对象继承得到的。  
>>    &emsp; 要判断一个属性是否是本对象自身拥有的，而不是继承得到的，可以用 **hasOwnProperty()** 方法。  
>>    &emsp; 由于 **Array** 也是对象，而他的每个元素的索引被视为对象的属性。
>
> + ## 条件判断  
>>    &emsp; if ... else ...  语句的执行特点是二选一，在多个 if ... else ... 语句中，如果某个条件成立，则后续就不再继续判断了。  
>>    &emsp; JavaScript 把 **null、 undefined、 0、 NaN 和 空字符串 ' '** 视为 **false**， 其他值一概视为 **true**。  
>
> + ## 循环  
>>    &emsp; for循环的一个变体是 **for ... in** 循环。同理于Java中的 Foreach。  
>>    &emsp; 注意， for ... in 对 Array的循环得到的是 String 而不是 Number。  
>
> + ## Map 和 Set
>>    &emsp; Map用set 添加新的key-value， 用 has 判断是否存在该 key 值，get 获得该 key 值对应的 value， delete 删除key。
>>    &emsp; 要创建一个 Set ，需要提供一个 Array 作为输入，或者直接创建一个空 Set , 重复元素在 Set中自动被过滤。 通过 add(key) 方法可以添加元素到 Set中，可以重复添加，但不会有效果， 通过 delete 删除。  
>
> + ## iterable  
>>    &emsp; 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。具有iterable类型的集合可以通过新的for ... of循环来遍历。  
>>    &emsp; **for ... of 和 for ... in 的区别:**  
>>    &emsp; for ... in 遍历的实际上是对象的属性， 一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。当我们手动给Array对象添加了额外的属性后，for ... in 循环会将额外的属性包括在内，而 Array 的 length 属性却不包括在内。  
>>    &emsp; for ... of 则完全修复了这些问题，它只循环集合本身的元素。  
>>      
>>    &emsp; 更好的方式是直接使用 iterable 内置的 forEach 方法，它接受一个函数，每次迭代就自动回调该函数。以数组 a 为例：  
>>    &emsp; a.forEach(function (element, index, array)){ ... }  
    &emsp; &emsp; element: 指向当前元素的值   
    &emsp; &emsp; index: 指向当前索引  
    &emsp; &emsp; array: 指向 Array对象本身  
  
+ # 函数    
> + ## 函数定义和调用  
>> &emsp; 由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没问题，虽然函数内部并不需要这些参数。  
>> + **arguments**  
>> &emsp; arguments关键字只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments 类似 Array 但它不是一个 Array。  
>> + **rest 参数**  
>> &emsp; function foo(a, b, ...rest){...}  
>> &emsp; rest参数只能写在最后，前面用 ... 标识，传入的参数先绑定 a、b，多余的参数以数组形式交给变量 rest。   
>> + **return**  
>> &emsp; 由于JavaScript引擎在行末自动添加分号的机制，若将 return 语句拆分成多行，需要在 return 后加 { }， 否则return后会自动添加分号。  
>
> + ## 变量作用域与解构赋值  
>> &emsp; JavaScript 的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。  
>>
>> **变量提升**  
>> &emsp; JavaScript的函数定义有个特点，他会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部。<font color= #DC143C> 变量的声明会自动提升，但是不会提升变量的赋值。 </font>    
>>  
>> **全局作用域**  
>> &emsp; 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象 window， 全局作用域的变量实际被绑定到 window 的一个属性。因此，直接访问全局变量 course 和访问 window.course 是完全一样的。   
>>  
>> **名字空间**  
>> &emsp; 全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。  
>>  
>> **局部作用域**  
>> &emsp; 由于 JavaScript 的变量作用域实际上是<font color = #DC163C>函数内部</font>，我们在 for 循环等语句块中是无法定义具有局部作用域的变量的。  
>> &emsp; 为了解决块级作用域，ES6引入了新的关键字 **let**, 用 let 代替 var 可以申明一个块级作用域的变量。    
>>  
>> **常量**  
>> &emsp; 关键字 **const** 来定义常量， const 和 let 都具有块级作用域。  
>>
> + ## 方法  
>> &emsp; JavaScript的函数内部如果调用了 this， this 的指向 视情况而定！  
>> &emsp; 如果以对象的方法形式调用，该函数的 this 指向全局对象，也就是 window。   
>> &emsp; 在函数内部的方法指向本对象， 在函数内部定义的函数，this 又指向 undefined。(在非strict模式下，它重新指向全局对象 window)  
>> &emsp; **解决方法：** 在方法内部一开始就用 var that = this; 首先捕获this。  
>>   
>> **apply**  
>> &emsp; 要指定函数的 this 指向哪个对象，可以用函数本身的 apply 方法，它接收两个参数，第一个参数就是需要绑定的 this 变量，第二个参数是 Array，表示函数本身的参数。  
>> &emsp; 另一个与 apply() 类似的方法是 call()， 唯一区别是：  
>> &emsp; 1. apply() 把参数打包成 Array 再传入。   
>> &emsp; 2. call() 把参数按顺序传入。  
>> &emsp; Math.max.apply(null, [3, 4, 5]);  
>> &emsp; Math.max.call(null, 3, 4, 5);  
>> &emsp; 对普通函数调用，我们通常把 this 绑定为 null。  
>>  
> + ## 高阶函数  
>> + ### map / reduce  
>> **map:**  
>> &emsp; 调用 Array 的 map() 方法，传入自己的函数，就得到一个新的 Array 作为结果。  
>>
>> **reduce：**  
>> &emsp; Array 的 reduce() 把一个函数作用在这个 Array 的[x1, x2, x3...]上，这个函数必须接受两个参数，reduce() 把结果继续和序列的下一个元素做累计计算：  
>> &emsp; [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)   
>>  
>> **filter:**  
>> &emsp; 它用于把Array的某些元素过滤掉，然后返回剩下的元素。和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。  
>>  
>> **sort:**  
>> &emsp; Array 的 sort() 方法默认把所有元素先转换为String再排序，它还可以接受一个比较函数来实现自定义的排序。  
>> &emsp; sort() 方法会直接对 Array 进行修改，它返回的结果仍是当前 Array。  
>>  
> + ## 闭包  
>> &emsp; 我们再函数中又定义了函数，并且，内部函数可以引用外部函数的参数和局部变量，当外部函数返回内部函数时，相关参数和变量都保存在返回的函数中，这种称为“闭包(Closure)”的程序结构。  
>> &emsp; 当调用外部函数时，每次调用都会返回一个新的内部函数，即使传入相同的参数。  
>> &emsp; <font color = #DC163C>返回的函数并没有立刻执行，而是直到调用了f()才执行。</font>  
>> &emsp; 返回闭包时牢记的一点就是： 返回函数不要<font color = #DC163C>引用任何循环变量，或者后续会发生变化的变量。</font>  
>> &emsp; 如果一定要引用循环变量，再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变。  
>> &emsp; “创建一个匿名函数并立即执行”的语法：  
>> &emsp; (function (x) { return x * x }) (3);  
>> 
> + ## 箭头函数  
>> &emsp; 箭头函数相当于匿名函数，并且化简了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连 { ... } 和 return 都省略掉了。还有一种可以包含多条语句，这时候就不能省略 { ... } 和 return。  
>> &emsp; 如果要返回一个对象，就要注意，如果是单表达式  
>> &emsp; x => { foo : x }  &emsp; // SyntaxError  
>> &emsp; x => ({ foo : x }) &emsp; // ok  
>> &emsp; 箭头函数看上去时匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的<font color = #DC163C>区别</font> : 箭头函数内部的 this 时词法作用域， 由上下文确定。箭头函数的 this 总是指向词法作用域，也就是外层调用者 obj。  
>> &emsp; 由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略。  
>>  
> + ## generator  
>> &emsp; generator 跟函数很像，定义如下：  
>> &emsp; function* foo(x) {  
>> &emsp; &emsp; yield x + 1;  
>> &emsp; &emsp; yield x + 2;  
>> &emsp; &emsp; return x + 3;  
>> &emsp;}   
>> &emsp; generator 和函数不同的是， generator 由 function* 定义(注意多出的 * 号)， 并且，除了 return 语句，还可以用 yield 返回多次。  
>> &emsp; 直接调用一个 generator 和调用函数不一样， fib(5) 仅仅是创建了一个 generator 对象，还没有去执行它。  
>> &emsp; 调用 generator 对象有两个方法，  
>> &emsp; 一是不断地调用 generator 对象的 next() 方法。 next() 方法会执行 generator 的代码，然后，每次遇到 yield x; 就返回一个对象 { value : x, done : true/false}， 然后“暂停”。 返回的 value 就是 yield 的返回值， done 表示这个 generator 是否已经之行结束了。 如果 done 为 true， 则 value 就是 return 的返回值。当执行到 don e为 true 时，这个 generator 对象就已经全部执行完毕，不要再继续调用 next() 了。  
>> &emsp; 第二个方法是直接用 for ... of 循环迭代 generator 对象， 这种方式不需要我们自己判断 done。  
>
+ # 标准对象  
> 有这么几条规则需要遵守：  
> + 不要使用new Number()、new Boolean()、new String()创建包装对象；    
> + 用parseInt()或parseFloat()来转换任意类型到number；  
> + 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；  
> + 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；  
> + typeof操作符可以判断出number、boolean、string、function和undefined；  
> + 判断Array要使用Array.isArray(arr)；  
> + 判断null请使用myVar === null；  
> + 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；  
> + 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。     
> 
>  &emsp; 如果在使用 Number、Boolean 和 String 时，没有写 new， 此时，Number()、 Boolean 和 String() 被当作普通函数，把任何类型的数据转换为number、boolean和string类型（注意不是其包装类型）。    
> 
>  &emsp; 在转换为 Boolean 时，非空转换结果为 true！    
> 
>  &emsp; number 对象调用 toString() 报 SyntaxError：  
>  &emsp; &emsp;`123.toString(); // SyntaxError`  
>  &emsp; 遇到这种情况，要特殊处理一下：  
>  &emsp; &emsp; `123..toString(); // '123', 注意是两个点！`  
>  &emsp; &emsp; `(123).toString(); // '123'`    
> + ## RegExp  
>> &emsp; 用 \d 可以匹配一个数字，  
>> &emsp; 用 \w 可以匹配一个字母或数字，   
>> &emsp; 用 \s 可以匹配一个空格。  
>> &emsp; 用 * 表示任意个字符，用 + 表示至少一个字符， 用 ? 表示0个或1个字符，用 {n} 表示n个字符，用 {n, m} 表示n-m个字符  
>> + 进阶  
>> &emsp; 要做更精确的匹配，可以用 [] 表示范围。  
>> &emsp; ^ 表示行的开头， ^\d 表示必须以数字开头。$ 表示行的结束， \d$ 表示必须以数字结束。  
>> &emsp; ^js$ 变成整行匹配，就只能匹配 'js'。  
>>  
>> + RegExp  
>> &emsp; 两种方式创建正则表达式，第一种方式是直接通过 **<font color = #CC85422>/正则表达式/ </font>** 写出来，第二种方式是通过 **<font color = #CC85422>new RegExp('正则表达式') </font>** 创建一个RegExp对象。  
>> &emsp; 注意，如果使用第二种写法，因为字符串的转义问题，字符串的两个 \\\ 实际上是一个 \。   
>> &emsp; RegExp 对象的 **test()** 方法用于测试给定的字符串是否符合条件。  
>> + 切分字符串  
>> &emsp; 在split(), 括号中使用 正则表达式。  
>> + 分组  
>> &emsp; 除了简单的判断是否匹配之外，正则表达式还有提取自穿的强大功能。用 () 表示的就是要提取的分组 (Group)。   
>> &emsp; 如果正则表达式中定义了组，就可以在 RegExp 对象上用 exec() 方法提取出子串来。   
>> &emsp; exec() 方法在匹配成功后，会返回一个 Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串； exec() 方法在匹配失败时返回 null。  
>> + 贪婪匹配  
>> &emsp; 正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。  
>> &emsp; &emsp; ` var re = /^(\d+)(0*)$/;`  
>> &emsp; &emsp; `re.exec('102300'); &emsp; &emsp; // ['102300', '102300', '']`    
>> &emsp; 由于 `\d+` 采用贪婪匹配，直接把后面的 0 全部匹配了，结果 `0*` 只能匹配空字符串了。  
>> &emsp; 必须让 `\d+` 采用非贪婪匹配(也就是尽可能少匹配)，才能把后面的 `0` 匹配出来，加个 `?` 就可以让 \d+ 采用非贪婪匹配。   
>> &emsp; &emsp; ` var re = /^(\d+?)(0*)$/;`  
>> &emsp; &emsp; `re.exec('102300'); &emsp; &emsp; // ['102300', '1023', '00']`  
>> + 全局搜索  
>> &emsp; JavaScript 使用 g ，表示全局匹配。  
>>  &emsp; &emsp; ` var r1 = /test/g;`  
>>  &emsp; &emsp; ` // 等价于:`  
>>  &emsp; &emsp; ` var r2 = new RegExp('test', 'g');`      
>> &emsp; 全局匹配可以多次执行 `exec()` 方法来搜索一个匹配的字符串。当我们指定 `g` 标志后，每次运行 `exec()`, 正则表达式本身会更新 `lastIndex` 属性。  
>> &emsp; 全局匹配类似搜索，因此不能使用 `/^...$/`，那样只会最多匹配一次。  
>> &emsp; 正则表达式还可以指定 `i` 标志，表示忽略大小写， `m` 标志，表示执行多行匹配。   
>>
> + ## JSON  
>> &emsp; JSON实际上是JavaScript的一个子集。在JSON中，一共就这么几种数据类型：  
>>> + number：和JavaScript的`number`完全一致；   
>>> + boolean：就是JavaScript的`true`或`false`；  
>>> + string：就是JavaScript的`string`；  
>>> + null：就是JavaScript的`null`；  
>>> + array：就是JavaScript的`Array`表示方式——[]；
>>> + object：就是JavaScript的`{ ... }表示方式。   
>> 
>> &emsp; 以及上面的任意组合。  
>> &emsp; 并且，JSON还定死了字符集必须是UTF-8。为了统一解析，JSON的字符串必须用双引号`""`，Object的建也必须用双引号`""`。  
>> &emsp; 把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。  
>> &emsp; 如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。  
>>   
>> + 序列化   
>> 把对象序列化成JSON格式的字符串(后两个参数可以省略)  
>> &emsp; `JSON.stringify(Object, null, ' ');`  
>> 第二个参数用于控制如何筛选对象的键值，如果只想输出指定的属性，可以传入 `Array`:  
>> &emsp; `JSON.stringify(Object, ['name', 'skills'], ' ');`  
>> 还可以传入一个函数，这样对象的每个键值对都会被函数先处理。  
>>  
>> 如果想要精确控制如何序列化一个对象，可以给该对象定义一个 `toJSON()` 的方法，直接返回JSON应该序列化的数据，然后直接调用 `JSON.stringify(Object);`。 不需要后两个参数来限制。   
>> 
>> + 反序列化  
>> 拿到一个JSON格式的字符串，我们直接用 `JSON.parse()` 把它变成一个JavaScript对象。  
>> `JSON.parse()` 还可以接收一个函数，用来转换解析出的属性。  
>>  
+ # 面向对象编程  
> &emsp; JavaScript 不区分类和实例的概念，而是通过原型 (prototype) 来实现面向对象编程。  
> &emsp; JavaScript 的原型链和 Java 的 Class 区别就在，它没有 "Class" 的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。  
> &emsp; `new Object(Student)` 生成的对象是 Student 本身， `prototype` 是 Student.prototype, `__proto__` 是 Object.prototype。  
> &emsp; `Object.create(Student)` 方法生成的对象 xiaoming 是新的对象，但 `prototype` 还是 Student.prototype,但 `__proto__` 是 Student 对象。  
> + ## 创建对象  
>> &emsp; 当我们用 `Obj.xxx` 访问一个对象的属性时，JavaScript 引擎现在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没找到，就一直上溯到 `Object.prototype` 对象，最后，如果还没有找到，就只能返回 `undefined`。  
>> + 构造函数  
>> &emsp; 首先定义一个构造函数，在调用时，<font color = #DC163C>注意</font>， 如果不写 `new`，这就是一个普通函数，他返回 `undefined`。但是，如果写了 `new` ，它就变成了一个构造函数，它绑定的 `this` 指向新创建的对象，并默认返回 `this`，也就是说，不需要在最后写 `return this;`。  
>> &emsp; 函数 `Student` 恰好有个属性 `prototype`， `Student.prototype` 指向的对象就是 `xiaoming`、 `xiaohong` 的原型对象，这个原型对象自己还有个属性 `constrctor`，指向 `Student` 函数本身。  
>> + 忘记写 new 怎么办  
>> &emsp; 在 strict 模式下， `this.name = name` 将报错，因为 `this` 绑定为 `undefined`，在非 strict 模式下，`this.name = name` 不报错，因为 `this` 绑定为 `window`，于是无意间创建了全局变量 `name`，并且返回 `undefined`。  
>> &emsp; 为了区分普通函数和构造函数，按照约定，构造函数首字母应当大写，而普通函数首字母应当小写。  
>> &emsp; 最后，可以编写一个 `createStudent()` 函数，在内部封装所有的 `new` 操作。  
>>  
> + ## 原型继承  
>> 1、定义新的构造函数，并在内部用 `call()` 调用希望"继承"的构造函数，并绑定 `this`；  
>> 2、借助中间函数 `F`实现原型链继承，最好通过封装的 `inherits` 函数完成；  
>> &emsp;function inherits(Child, Parent) {  
>> &emsp; &emsp; var F = function () {};  
>> &emsp; &emsp; F.prototype =   
>> &emsp; &emsp; Parent.prototype;  
>> &emsp; &emsp; Child.prototype = new F();  
>> &emsp; &emsp; Child.prototype.constructor = Child;  
>> &emsp; }  
>> 3、继续在新的构造函数的原型上定义新方法。    
>>  
> + ## class 继承  
>> &emsp; 同 Java 中， 用 `class` 和 `extends` 关键字，在子类构造函数中要super()调用父类构造函数。  
>>  
+ # 浏览器  
> + ## 浏览器对象  
>> + window  
>> &emsp; `window` 对象不但充当全局作用域，而且表示浏览器窗口。  
>> &emsp; `window` 对象有 `innerWidth` 和 `innerHeight` 属性，可以获取浏览器窗口的内部宽度和高度。内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。  
>> &emsp; 对应的， 还有一个 `outerWidth` 和 `outerHeight` 属性，可以获取浏览器窗口的整个宽高。  
>>
>> + navigator  
>> &emsp; `navigator` 对象表示浏览器的信息，最常用的属性包括：  
>> &emsp; - navigator.appName: 浏览器名称；
>> &emsp; - navigator.appVersion：浏览器版本；  
>> &emsp; - navigator.language：浏览器设置的语言；  
>> &emsp; - navigator.platform：操作系统类型；  
>> &emsp; - navigator.userAgent：浏览器设定的User-Agent字符串。  
>> &emsp; `navigator` 的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的。正确的方法是充分利用JavaScript对不存在属性返回 `undefined` 的特性，直接用短路运算符 `||` 计算。  
>>  
>> + screen  
>> `screen` 对象表示屏幕的信息，常用的属性有：  
>> &emsp; &emsp; - screen.width：屏幕宽度，以像素为单位；    
>> &emsp; &emsp; - screen.height：屏幕高度，以像素为单位；  
>> &emsp; &emsp; - screen.colorDepth：返回颜色位数，如8、16、24。   
>>  
>> + location  
>> `location` 对象表示当前页面的 URL 信息。例如，一个完整的 URL:  
>> &emsp; `http://www.example.com:8080/path/index.html?a=1&b=2#TOP`  
>> 可以用 `location.href` 获取。要获得 URL 各个部分的值：  
>> &emsp; &emsp; - location.protocol; // 'http'    
>> &emsp; &emsp; - location.host; // 'www.example.com'  
>> &emsp; &emsp; - location.port; // '8080'  
>> &emsp; &emsp; - location.pathname; // '/path/index.html'  
>> &emsp; &emsp; - location.search; // '?a=1&b=2'  
>> &emsp; &emsp; - location.hash; // 'TOP'       
>> 要加载一个新页面，可以调用 `location.assign('URL地址')`。如果要重新加载当前页面，调用 `location.reload()` 方法。  
>>  
>> + document  
>> &emsp; `document` 对象表示当前页面.由于 HTML 在浏览器中以 DOM 形式表示为树形结构， `document` 对象就是整个 DOM 树地根节点。  
>> &emsp; `document` 的 `title` 属性是从HTML文档中的 `\<title> xxx \</title>` 读取的，但是可以动态改变。  
>> &emsp; 要查找 DOM 树的某个节点，需要从 `document` 对象开始查找。最常用的查找是根据 ID 和 Tag Name。用 `document` 对象提供的 `getElementById()` 和 `getElementsByTagName()` 可以按 ID 获得一个 DOM 节点和按 Tag 名称获得一组 DOM 节点。  
>> &emsp; `document` 对象还有一个 `cookie` 属性，可以获取当前页面的 Cookie。  
>> &emsp; Cookie 是由服务器发送的 key-value 标识符。用 Cookie 来区分是哪个用户发来的请求。当一个用户成功登录后，服务器发送一个 Cookie 给浏览器，此后，浏览器访问该网站时，会在请求头附上这个 Cookie，服务器根据 Cookie 即可区分出用户。  
>> &emsp; Cookie 还可以存储网站的一些设置，例如，页面显示的语言等等。  
>> &emsp; JavaScript可以通过document.cookie读取到当前页面的Cookie。  
>> &emsp; 由于JavaScript能读取到页面的Cookie，而用户的登录信息通常也存在Cookie中，这就造成了巨大的安全隐患。  
>> &emsp; 为了解决这个问题，服务器在设置 Cookie 时可以使用 `httpOnly`， 设定了 `httpOnly` 的 Cookie 将不能被 JavaScript 读取。  
>> <font color = #DC163C> &emsp; 为了确保安全，服务器端在设置 Cookie 时，应该始终坚持使用 `httpOnly`。</font>  
>>  
>> + history  
>> &emsp;  `history` 对象保存了浏览器的历史记录，JavaScript 可以调用 `history`对象的 `back()` 或 `forward ()`，相当于用户点击了浏览器的“后退”或“前进”按钮。  
>> &emsp; 这个对象属于历史遗留对象，在任何情况下，都不应该使用 `history` 这个对象。
>>  
> + ## 操作 DOM  
>> &emsp; 始终记住 DOM 是一个树形结构。操作一个 DOM 节点实际上就是这么几个操作：  
>> &emsp; &emsp; 1、更新： 更新该 DOM 节点的内容，相当于更新了该 DOM 节点表示的 HTML 的内容；  
>> &emsp; &emsp; 2、遍历： 遍历该 DOM 节点下的子节点，以便进行进一步操作；  
>> &emsp; &emsp; 3、添加： 在该 DOM 节点下新增一个子节点，相当于动态增加了一个 HTML 节点；  
>> &emsp; &emsp; 4、删除： 将该节点从 HTML 中删除，相当于删掉了该 DOM 节点的内容以及它包含的所有子节点。  
>> &emsp; 在操作一个 DOM 节点前，我们需要通过各种方式先拿到这个 DOM 节点。最常用的方法是 `document.getElementById()` 和 `document.getElementsByTagName()`，以及 CSS 选择器 `document.getElementByClassName()`。  
>> &emsp; 由于 ID 在 HTML 文档中是唯一的，所以 `document.getElementById()` 可以直接定位唯一的一个 DOM 节点。 `document.getElementsByTagName()` 和 `document.getElementsByClassName()` 总是返回一组 DOM 节点。要精确的选择 DOM, 可以先定位父节点，再从父节点开始选择，以缩小范围。   
>> ``` 
>> // 返回ID为'test'的节点：  
>> var test = document.getElementById('test');  
>>  
>> // 先定位ID为'test-table'的节点，再返回其内部所有tr节点：  
>> var trs = document.getElementById('test-table').getElementsByTagName('tr');  
>>  
>> // 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：  
>> var reds = document.getElementById('test-div').getElementsByClassName('red');  
>>  
>> // 获取节点test下的所有直属子节点:  
>> var cs = test.children;  
>>
>> // 获取节点test下第一个、最后一个子节点：  
>> var first = test.firstElementChild;  
>> var last = test.lastElementChild;  
>> ```  
>> &emsp; 第二种方法是使用 `querySelector()` 和 `querySelectorAll()`，需要了解 selector 语法，然后使用条件来获取节点，更加方便：   
>> ```  
>>  // 通过 querySelector 获取 ID 为 q1 的节点；  
>>  var q1 = document.querySelector('#q1');  
>>   
>>  // 通过 querySelectorAll 获取 q1 节点内的符合条件的所有节点；  
>>  var ps = q1.querySelectorAll('div.highlighted > p');  
>> ```  
>>  
>> + 更新 DOM  
>> &emsp; 拿到一个 DOM 节点后，我们可以对它进行更新。可以直接修改节点的文本，方法有两种：    
>> &emsp; 一种是修改 `innerHTML` 属性，这个方法非常强大，不但可以修改一个 DOM 节点的文本内容，还可以直接通过 HTML 片段修改 DOM 节点内部的子树：  
>> ```
>> // 获取 <p id = "p-id"> ... </p>  
>> var p = document.getElementById('p-id');  
>> 
>> // 设置文本为 abc:  
>> p.innerHTML = 'ABC'; // <p id = "p- id"> ABC </p>  
>>  
>> //设置 HTML：  
>> p.innerHTML = 'ABC <span style = "color:red"> RED </span> XYZ'; 
>> // <p> ... </p> 的内部结构已修改  
>> ```  
>> &emsp; 用 `innerHTML` 时要注意，是否需要写入 HTML。如果写入的字符串时通过网络拿到的，要注意对字符串编码来避免 XSS 攻击。  
>>  
>> &emsp; 第二种是修改 `innerText` 或 `textContent` 属性，这样可以自动对字符串进行 HTML 编码，保证无法设置任何 HTML 标签：  
>> ```  
>> // 获取 <p id = "p-id"> ... </p>  
>> var p = document.getElementById('p-id');  
>>  
>> 设置文本：  
>> p.innerText = '<script> alert("Hi") </script>';  
>>  
>> // HTML 被自动编码，无法设置一个 <script> 节点：  
>> // <p id = "p-id"> &lt;script&gt; alert("Hi") &lt;/script&gt; </p>  
>> ```  
>> &emsp; 两者的区别在于读取属性时，`innerText` 不返回隐藏元素的文本，而 `textContent` 返回所有文本。  
>> &emsp; 修改 CSS 也是经常需要的操作。DOM 节点的 `style` 属性对应所有的 CSS, 可以直接获取或设置。因为 CSS 允许 'font-size' 这样的名称，但它并非 JavaScript 有效的属性名，所以需要在 JavaScript 中改写为驼峰式命名 `fontSize`：  
>> ```  
>> // 获取 <p id = "p-id"> ... </p>  
>> var p = document.getElementById('p-id');  
>> // 设置 CSS：  
>> p.style.color = '#ff0000';  
>> p.style.fontSize = '20px';  
>> p.style.paddingTop = '2em';  
>> ```  
>>  
>> + 插入 DOM  
>> &emsp; 如果这个 DOM 节点时空的，那么，直接使用 `innerHTML = '<span> child </span>'` 就可以修改 DOM 节点的内容，相当于“插入”了新的 DOM 节点。  
>> &emsp; 如果这个 DOM 节点不是空的，那就不能这么做，因为 `innerHTML` 会直接替换掉原来的所有子节点。  
>> &emsp; 有两个办法可以插入新的节点。一个是使用 `appendChild`，把一个子节点添加到父节点的最后一个子节点。*如果我们插入的 `js` 节点已经存在于当前的文档树，这个节点首先会从原先的位置删除，再插入到新的位置。*更多时候我们会从零创建一个新的节点，然后插入到指定位置，这样我们就动态添加了一个新的节点。  
>> &emsp; **insertBefore**   
>> &emsp; 使用 `parentElement.insertBefore(newElement, referenceElement);`，子节点会插入到 `referenceElement` 之前。  
>>  
>> + 删除 DOM  
>> &emsp; 要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的 `removeChild` 把自己删掉。  
>> &emsp; 注意，删除后的节点虽然不在文档书中，但其实它还在内存中，可以随时再次被添加到别的位置。  
>> &emsp; 当你遍历一个父节点的子节点并进行删除操作时，要注意， `children` 属性是一个*只读属性* ，并且它再子节点变化时会实时更新。  
>>  
> + ## 操作表单  
>>  HTML 表单的输入控件主要有以下几种：  
>> + 文本框，对应的 `<input type="text">`，用于输入文本；  
>> + 口令框，对应的 `<input type="password">`，用于输入口令；  
>> + 单选框，对应的 `<input type="radio">`，用于选择一项；  
>> + 复选框，对应的 `<input type="checkbox">`，用于选择多项;  
>> + 下拉框，对应的 `<select>`，用于选择一项；  
>> + 隐藏文本，对应的 `<input type="hidden">`，用户不可见，但表单提交时会把隐藏文本发送到服务器。  
>>  
>> **获取值**  
>> &emsp; 如果我们获得了一个 `<input>` 节点的引用，就可以直接调用 `value` 获得对应的用户输入值。  
>> &emsp; 这种方式可以应用于 `text`、 `password`、 `hidden`以及 `select`。但是，对于单选框和复选框，`vaule` 属性返回的永远是 HTML 预设值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用 `checked` 判断。  
>>  
>> **设置值**  
>> &emsp; 设置值和获取值类似，对于 `text`、 `password`、 `hidden` 以及 `select`，直接设置 `value` 就可以。对于单选框和复选框，设置 `checked` 为 `true` 或 `false` 即可。   
>>  
>> **HTML5 控件**  
>> &emsp; HTML5 新增了大量标准控件，常用的包括 `date`、 `datetime`、 `datetime-local`、 `color` 等，它们都使用 `<input>` 标签。不支持 HTML5 的浏览器无法识别新的控件，会把它们当作 `type="text"` 来显示。支持 HTML5 的浏览器将获得格式化的字符串。  
>>  
>> **提交表单**  
>> &emsp; 方式一是通过 `<form>` 元素的 `submit()` 方法提交一个表单。  
>> &emsp; 这种方法的缺点是扰乱了浏览器对 form 的正常提交。浏览器默认点击 `<button type="submit">` 时提交表单，或者用户在最后一个输入框按回车键。   
>> &emsp; 因此，第二种方式是响应 `<form>` 本身的 `<onsubmit>` 事件，再提交 form 时作修改。  
>> ```  
>> <!-- HTML -->  
>>  <form id="test-form" onsubmit="return checkForm()">  
>>     <input type="text" name="test">  
>>     <button type="submit">Submit</button>  
>> </form>
>>  
>> <script>
>> function checkForm() {
>>     var form = document.getElementById('test-form');  
>>     // 可以在此修改form的input...  
>>     // 继续下一步:  
>>     return true;  
>> }  
>> </script>  
>> ```  
>> &emsp; 注意要 `return true` 来告诉浏览器继续提交，如果 `return false`，浏览器将不会继续提交 form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交 form。  
>>  
>> &emsp; 在检查和修改 `<input>` 时，要充分利用 `<input type="hidden">` 来传递数据。  
>> &emsp; 例如，很多登录表单希望用户输入用户名和口令，但是，安全考虑，提交表单时不传输明文口令，而是口令的 MD5。普通 JavaScript 开发人员会直接修改 `<input>`。  
>> &emsp; 但用户输入了口令提交时，口令框的显示会突然从几个 `*` 变成 32 个 `*` (因为 MD5 有 32 个字符)。  
>> &emsp; 要想不改变用户的输入，可以利用 `<input type="hidden">` 实现：  
>> ```  
>> <!-- HTML -->  
>> <form id="login-form" method="post" onsubmit="return checkForm()">  
>>    <input type="text" id="username" name="username">  
>>    <input type="password" id="input-password">  
>>    <input type="hidden" id="md5-password" name="password">  
>>    <button type="submit">Submit</button>  
>> </form>  
>>  
>> <script>  
>> function checkForm() {  
>>    var input_pwd = document.getElementById('input-password');  
>>    var md5_pwd = document.getElementById('md5-password');  
>>    // 把用户输入的明文变为MD5:  
>>    md5_pwd.value = toMD5(input_pwd.value);  
>>    // 继续下一步:  
>>    return true;  
>> }  
>> </script>  
>> ```  
>> &emsp; 注意到 `id` 为 `md5-password` 的 `<input>` 标记了 `name="password"`，而用户输入的 `id` 为 `input-password` 的 `<input>` 没有 `name` 属性。没有 `name` 属性的 `<input>` 的数据不会被提交。  
> + ## 操作文件  
>> &emsp; 在 HTML 表单中，可以上传文件的唯一控件就是 `<input type="file">`。  
>> &emsp; <font color=#dc321c>注意：</font> 当一个表单包含 `<input type="file">` 时，表单的 `enctype` 必须指定为 `multipart/form-data`， `method` 必须指定为 `post`，浏览器才能正确编码并以 `multipart/form-data` 格式发送表单的数据。  
>> &emsp; 出于安全考虑，浏览器只允许用户点击 `<input type="file">` 来选择本地文件，用 JavaScript 对 `<input type="file">` 的 `value` 赋值是没有任何效果的。当用户选择了上传某个文件后， JavaScript 也无法获得该文件的真实路径。  
>>  
>> **File API**  
>> &emsp; 由于 JavaScript 对用户上传的文件操作非常有限，尤其是无法读取文件内容，使得很多需要操作文件的网页不得不用 Flash 这样的第三方插件来实现。  
>> &emsp; HTML5 的 File API 提供了 `File` 和 `FileReader` 两个主要对象，可以获得文件信息并读取文件。  
>>  
>> **回调**  
>> &emsp; JavaScript 的一个重要的特性就是*单线程执行模式*。在 JavaScript 中，执行多任务实际上都是异步调用：  
>> &emsp; `reader.readAsDataURL(file);`  
>> &emsp; 就会发起一个异步操作来读取文件内容。因为是异步操作，所以在 JavaScript 代码中就不知道什么时候操作结束，因此需要先设置一个回调函数：  
>> ```  
>> reader.onload = function(e) {   
>>      // 当文件读取完成后，自动调用此函数；  
>> };  
>> ```  
>> &emsp; 当文件读取完成后，JavaScript 引擎将自动调用我们设置的回调函数。执行回调函数时，文件已经读取完毕，所以可以在回调函数内部安全的获得文件内容。  
> + ## AJAX 
>> &emsp; AJAX 不是 JavaScript 的规范，它是 *Asynchronous JavaScript and XML* 的缩写，意思就是用 JavaScript 执行异步网络请求。  
>> &emsp; Web 的运作原理：一次 HTTP 请求对应一个页面。  
>> &emsp; 如果要让用户留在当前页面中，同时发出新的 HTTP 请求，就必须用 JavaScript 发送这个新请求，接收到数据后，再用 JavaScript 更新页面，这样用户就感觉自己仍然停留在当前页面，但是数据却可以不断地更新。   
>> &emsp; AJAX 请求时异步执行的，要通过回调函数获得响应。  
>> &emsp; 现代浏览器上写 AJAX 注意依靠 `XMLHttpRequest` 对象：  
>> &emsp; &emsp; `var request = new XMLHttpRequest();`   
>> &emsp; 对于低版本的 IE，需要换一个 `ActiveXObject` 对象：  
>> &emsp; &emsp; `var request = new ActiveXObject('Microsoft.XMLHTTP');`    
>> &emsp; 把标准写法和 IE 写法混在一起：  
>> ```  
>> var request;  
>> if (window.XMLHttpRequest){
>>    request = new XMLHttpRequest();    
>> } else {
>>    request = new ActiveXObject('Microsoft.XMLHTTP');  
>> }
>> ```  
>> &emsp; `XMLHttpRequest` 对象的 `open()` 方法有 3 个参数，第一个参数指定是 `GET` 还是 `POST`，第二个参数指定 URL 地址，第三个参数指定是否使用异步，默认是 `true`，所以不用写。千万不要把第三个参数指定为 `false`，否则浏览器将停止响应，直到 AJAX 请求完成。在这个过程中浏览器处于“假死”状态。  
>> &emsp; 最后调用 `send()` 方法才真正发送请求。`GET` 请求不需要参数，`post` 请求需要把 body 部分以字符串或者 `FormData` 对象传进去。  
>>  
>> ### **安全限制:**  
>> &emsp; 浏览器的同源策略导致，在默认情况下，JavaScript 在发送 AJAX 请求时，URL 的域名必须和当前页面完全一致。  
>> &emsp; 用 JavaScript 请求外域(其他网站)的 URL 的方法：  
>> &emsp; &emsp; 1、是通过 Flash 插件发送 HTTP 请求，这种方式可以绕过浏览器的安全限制，但必须安装 Flash，并且跟 Flash 交互。  
>> &emsp; &emsp; 2、是通过同源域名下假设一个代理服务器来转发，JavaScript 负责把请求发送到代理服务器：  
>> &emsp; &emsp; `'/proxy?url=http://www.sina.com.cn' `  
>> &emsp; &emsp; 3、第三种方法称为 JSONP，它有个限制，只能用 GET 请求，并且要求返回 JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用 JavaScript 资源。  
>> &emsp; &emsp; &emsp; 要求在页面中先准备好回调函数，然后给页面动态加一个 `<script>` 节点，相当于动态读取外域的 JavaScript 资源，最后就等着接受回调了。  
>>  
>> ### **CORS**  
>> &emsp; CORS 全称 Cross-Origin Resource Sharing，是 HTML5 规范定义的如何跨区访问资源。  
>> &emsp; Origin 表示本域，也就是浏览器当前页面的域。当 JavaScript 向外域 (如sina.com) 发起请求后，浏览器收到响应后，首先检查 `Access-Control-Allow-Origin` 是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript 将无法获取到相应的任何数据。  
> + ## Promise   
>> &emsp; 把上节中的回调函数 `success(request.responseText)` 和 `fail(request.status)` 写到一个 AJAX 操作里很正常，但是不利于代码复用，可以这样写：  
>> ```  
>> var ajax = ajaxGet('http://...');
>> ajax.ifSuccess(success)
>>     .ifFail(fail);  
>> ```  
>> &emsp; “承诺将来会执行”的对象在 JavaScript 中称为 Promise 对象。  
>> &emsp; 看一个最简单的Promise例子：生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：  
>> ```  
>> function test(resolve, reject) {
>>    var timeOut = Math.random() * 2;
>>    log('set timeout to: ' + timeOut + ' seconds.');
>>    setTimeout(function () {
>>        if (timeOut < 1) {
>>            log('call resolve()...');
>>            resolve('200 OK');
>>        }
>>        else {
>>            log('call reject()...');
>>            reject('timeout in ' + timeOut + ' seconds.');
>>        }
>>    }, timeOut * 1000);
>>}  
>> ```  
>> &emsp; 这个 `test()` 函数有两个参数，这两个参数都是函数，如果执行成功，我们将调用 `resolve('200 OK')`，如果执行失败，我们将调用 `reject('timeout in ' + timeOut + ' seconds.')`。可以看出，`test()` 函数只关心自身逻辑，并不关心具体的 `resolve` 和 `reject` 将如何处理结果。  
>> &emsp; 有了执行函数，我们就可以用一个 Promise 对象来执行它，并在将来某个时刻获得成功或失败的结果：  
>> ```  
>> var p1 = new Promise(test);
>> var p2 = p1.then(function (result) {
>>     console.log('成功：' + result);
>> });
>> var p3 = p2.catch(function (reason) {
>>     console.log('失败：' + reason);
>> });  
>> ```  
>> &emsp; 如果成功，执行 **then** ；如果失败，执行 **catch**。  
>> &emsp; Promise对象可以串联起来，所以上述代码可以简化为：  
>> ```  
>> new Promise(test).then(function (result) {
>>     console.log('成功：' + result);
>> }).catch(function (reason) {
>>     console.log('失败：' + reason);
>> });  
>> ```  
>> &emsp; 可见 Promise 最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了：  
>>
>> &emsp; &emsp; &emsp; ![](https://cdn.liaoxuefeng.com/cdn/files/attachments/001436512391628944d5da9a5654a35b0ace38246f30b9c000/l)  
>>  
>> &emsp; Promise 还可以做更多的事情，比如，由若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。  
>> `job1.then(job2).then(job3).catch(handleError);`  
>> &emsp; 其中， `job1`、 `job2` 和 `job3` 都是 Promise 对象。  
>>  
>> &emsp; 除了串行执行若干异步任务外，Promise 还可以并行执行异步任务，用 `Promise.all()` 实现：   
>> ```
>> var p1 = new Promise(function (resolve, reject) {
>>     setTimeout(resolve, 500, 'P1');
>> });  
>> 
>> var p2 = new Promise(function (resolve, reject) {
>>     setTimeout(resolve, 600, 'P2');
>> });  
>>
>> // 同时执行p1和p2，并在它们都完成后执行then:
>> Promise.all([p1, p2]).then(function (results) {
>>     console.log(results); // 获得一个Array: ['P1', 'P2']
>> });  
>> ```  
>>  
>> &emsp; 有时候，多个异步任务是为了容错。比如，同时向两个 URL 读取用户的个人信息，只需要获得先返回的结果即可。这种情况，用 `Promise.race()` 实现：  
>> ```  
>> var p1 = new Promise(function (resolve, reject) {
>>     setTimeout(resolve, 500, 'P1');
>> });
>> var p2 = new Promise(function (resolve, reject) {
>>     setTimeout(resolve, 600, 'P2');
>> });
>> Promise.race([p1, p2]).then(function (result) {
>>     console.log(result); // 'P1'
>> });  
>> ```  
>> &emsp; 由于 `p1` 执行较快，Promise 的 `then()` 将获得结果 `P1`。`P2` 仍在继续执行，但执行结果将被丢弃。  
>> &emsp; 如果我们组合使用 Promise，就可以把很多异步任务以并行和串行的方式组合起来执行。   
>>  
> + ## Canvas  
>> &emsp; Canvas 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。  
>> &emsp; 一个 Canvas 定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制：  
>> `<canvas id="test-canvas" width="300" height="200"></canvas>`  
>> &emsp; 在 `<canvas>` 内部添加一些说明性 HTML 代码，如果浏览器支持 Canvas，它将忽略 `<canvas>` 内部的 HTML ，如果浏览器不支持 Canvas，它将显示 `<canvas>` 内部的 HTML。  
>> &emsp; `getContext('2d')` 方法让我们拿到一个`CanvasRenderingContext2D` 对象，所有的绘图操作都需要通过这个对象完成。  
>>  
>> ### **绘制形状**  
>> &emsp; 我们可以在 Canvas 上绘制各种形状。在绘制前，我们需要先了解一个 Canvas 的坐标系统：  
>>  
>> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ![](https://cdn.liaoxuefeng.com/cdn/files/attachments/001436926614788af8f274570d54736bddbbf7b2b03a9eb000/l)    
>>  
>> &emsp; Canvas的坐标以左上角为原点，水平向右为X轴，垂直向下为Y轴，以像素为单位，所以每个点都是非负整数。  
>> &emsp; Canvas除了能绘制基本的形状和文本，还可以实现动画、缩放、各种滤镜和像素转换等高级操作。如果要实现非常复杂的操作，考虑以下优化方案：  
>> + 通过创建一个不可见的Canvas来绘图，然后将最终绘制结果复制到页面的可见Canvas中;  
>> + 尽量使用整数坐标而不是浮点数;  
>> + 可以创建多个重叠的Canvas绘制不同的层，而不是在一个Canvas中绘制非常复杂的图;    
>> + 背景图片如果不变可以直接用 `<img>` 标签并放到最底层。
