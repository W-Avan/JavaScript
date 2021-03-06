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
>>  
+ # jQuery  
> &emsp; jQuery 是 JavaScript 世界中使用最广泛的一个库， jQuery 能帮我们干这些事情：   
> + 消除浏览器差异：不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 AJAX 等代码；  
> + 简洁的操作 DOM 的方法：写 `$('#test')` 肯定比 `document.getElementById('test')` 来得简洁；  
> + 轻松实现动画、修改 CSS 等各种操作。  
> &emsp; jQuery的理念：*Write Less, Do More*  
> ### **使用jQuery**  
> &emsp; 使用 jQuery 只需要在页面的 `<head>` 引入 jQuery 文件即可：  
> `<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>`  
>  
> ### **$符号**  
> &emsp; `$` 是著名的 jQuery 符号。实际上，jQuery 把所有功能全部封装在一个全局变量 `jQuery` 中，而 `$` 也是一个合法的变量名，它是变量 `jQuery` 的别名：  
> &emsp; <font color=#dc172c>注意</font>，你看到的 `$` 函数名可能不是 `jQuery(selector, context)`，因为很多 JavaScript 压缩工具可以对函数名和参数改名，所以压缩过的 jQuery 源码 `$` 函数可能变成 `a(b, c)`。  
> &emsp; 绝大多时候，我们都直接用 `$` （因为写起来更方便）。但是，如果 `$` 这个变量不幸地被占用了，而且还不能改，那我们就只能让 `jQuery` 把 `$` 变量交出来，然后就只能使用 `jQuery` 这个变量：  
> ```
> $; // jQuery(selector, context)
> jQuery.noConflict();
> $; // undefined
> jQuery; // jQuery(selector, context)    
> ```  
> &emsp; 原理是 jQuery 在占用 `$` 之前，现在内部保存了原来的 `$`，调用 `jQuery.noConflict()` 时会把原来保存的变量还原。  
> + ## 选择器  
>> ### **按 ID 查找**  
>> ```  
>> // 查找 <div id="abc">:
>> var div = $('#abc');  
>> ```
>> &emsp; 通常情况下你不需要获取 DOM 对象，直接使用 jQuery 对象更加方便。如果你拿到了一个 DOM 对象，那可以简单的调用 `$(aDomObject)` 把它变成 jQuery 对象，这样就可以方便地使用 jQuery 的 API 了。  
>>  
>> ### **按 tag 查找**  
>> ```  
>> var ps = $('p');  //返回所有<p>节点 
>> ps.length;        //数一数页面有多少个<p>节点  
>> ```  
>>  
>> ### **按 class 查找**   
>> ```  
>> var a = $('.red');  // 所有节点包含 'class="red"' 都将返回  
>> // 例如：  
>> // <div class="red"> ... </div>
>> // <p class="green red"> ... </p>  
>>  
>> var b = $('.red.green');  // 注意没有空格！  
>> // 符合条件的有： 
>> // <div class="red green"> ... </div>
>> // <div class="blue green red"> ... </div> 
>> ```  
>>  
>> ### **按属性查找**  
>> ```  
>> var email = $('[name=email]');  // 找出 <??? name="email">  
>> var a = $('[items="A B"]');  // 找出 <??? items="A B"> , 当属性的值包含空格等特殊字符时，需要用双引号括起来。  
>>  
>> // 按属性查找还可以使用前缀查找或者后缀查找：  
>> var icons = $('[name^=icon]');  // 找出所有name属性值以 icon 开头的 DOM  
>> var names = $('[name$=with]');  // 找出所有name属性值以 with 结尾的 DOM 
>>  
>> var icons = $('[class^="icon-"]');  //找出所有 class 包含至少一个以 'icon-' 开头的 DOM  
>> // 例如： class="icon-clock", class="abc icon-home"  
>> ```  
>>  
>> ### **组合查找**  
>> ```  
>> var emailInput = $('input[name=email]');  // 不会找出 <div name="email">  
>>  
>> // 根据 tag 和 class 来组合查找：  
>> var tr = $('tr.red");  // 找出 <tr class="red"> ... </tr>  
>> ```  
>>  
>> ### **多项选择器**  
>> ```  
>> $('p.div');    // 把 <p> 和 <div> 都选出来   
>> $('p.red, p.green');    // 把 <p class="red"> 和 <p class="green"> 都选出来  
>> ``` 
>> &emsp; 要注意的是，选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素。例如，`<p class="red green">` 不会被上面的 `$('p.red,p.green')` 选择两次。  
>>   
>> + ### 层级选择器  
>>> **层级选择器（Descendant Selector）**  
>>> &emsp; 如果两个 DOM 元素具有层级关系，就可以用 `$('ancestor descendant')` 来选择，层级之间用空格隔开：  
>>> ```  
>>> $('ul.lang li.lang-javascript');  // [<li class="lang-javascript">JavaScript</li>]  
>>> $('div.testing li.lang-javascript');  // [<li class="lang-javascript">JavaScript</li>]  
>>> ```  
>>> &emsp; 因为 `<div>` 和 `<ul>` 都是 `<li>` 的祖先节点，所以上面两种方式都可以选出相应的 `<li>` 节点。多层选择也是被允许的。  
>>>  
>>> **子选择器 （Child Selector）**   
>>> &emsp; 子选择器 `$('parent>child')` 类似层级选择器，但是限定了层级关系必须是父子关系，就是 `<child>` 节点必须是 `<parent>` 节点的直属子节点：  
>>> ```  
>>>  $('ul.lang>li.lang-javascript'); // 可以选出[<li class="lang-javascript">JavaScript</li>]  
>>>
>>> $('div.testing>li.lang-javascript'); // [], 无法选出，因为<div>和<li>不构成父子关系  
>>> ```
>>>  
>>> **过滤器 （Filter）**  
>>> ```  
>>> $('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
>>>
>>> $('ul.lang li:first-child'); // 仅选出JavaScript
>>> $('ul.lang li:last-child'); // 仅选出Lua
>>> $('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
>>> $('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
>>> $('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素  
>>> ```  
>>>  
>>> **表单相关**  
>>> &emsp; 针对表单元素，jQuery 还有一组特殊的选择器：  
>>> + `:input`：可以选择 `<input>`，`<textarea>`，`<select>` 和 `<button>`；
>>>   
>>> + `:file`：可以选择 `<input type="file">`，和 `input[type=file]` 一样；
>>>   
>>> + `:checkbox`：可以选择复选框，和 `input[type=checkbox]` 一样；
>>>   
>>> + `:radio`：可以选择单选框，和 `input[type=radio]` 一样；
>>>   
>>> + `:focus`：可以选择当前输入焦点的元素，例如把光标放到一个 `<input>` 上，用 $('input:focus')` 就可以选出；
>>>   
>>> + `:checked`：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如 `$('input[type=radio]:checked')`；
>>>   
>>> + `:enabled`：可以选择可以正常输入的 `<input>`、`<select>` 等，也就是没有灰掉的输入；
>>>   
>>> + `:disabled`：和: `enabled` 正好相反，选择那些不能输入的。  
>> + ### 查找和过滤  
>>> &emsp; 最常见的查找是在某个节点的所有子节点中查找，使用 `find()` 方法。  
>>> &emsp; 如果要从当前节点开始向上查找，使用 `parent()` 方法。  
>>> &emsp; 对于位于同一层级的节点，可以通过 `next()` 和 `prev()` 方法。  
>>> &emsp; 如果传入的过滤条件不符合实际 html ，返回空 jQuery 对象。  
>>>  
>>> **过滤**  
>>> &emsp; `filter()` 方法可以过滤掉不符合选择器条件的节点，或传入一个函数，<font color='dc172c'>要特别注意函数内部的 `this` 被绑定为 DOM 对象，不是 jQuery 对象：</font>  
>>> ```  
>>> var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell  
>>>   
>>> langs.filter(function () {
>>>      return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
>>> }); // 拿到Swift, Scheme
>>> ```  
>>> &emsp; `map()` 方法把一个 jQuery 对象包含的若干 DOM 节点转化为其他对象。  
>>> &emsp; 此外，一个 jQuery 对象如果包含了不止一个 DOM 节点，`first()`、`last()` 和 `slice()` 方法可以返回一个新的 jQuery 对象，把不需要的 DOM 节点去掉：  
>>> ```  
>>> var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
>>> var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
>>> var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
>>> var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致  
>>> ```  
> + ## 操作 DOM  
>> ### **修改 Text 和 HTML**  
>> &emsp; jQuery 对象的 `text()` 和 `html()` 方法分别获取节点的文本和原始 HTML 文本，无参数调用 `text()` 是获取文本， 传入参数就变成设置文本，HTML 也是类似操作。  
>>  
>> ### **修改 CSS**  
>> &emsp; 要高亮显示动态语言，调用 jQuery 对象的 `css('name', 'value')` 方法。  
>> &emsp; jQuery 对象的 `css()` 方法可以这样用:  
>> ```
>> var div = $('#test-div');
>> div.css('color');   // '#000033', 获取 CSS 属性  
>> div.css('color', '#336699');  // 设置 CSS 属性  
>> div.css('color', '');  // 清除 CSS 属性 
>> ```  
>> &emsp; 为了和 JavaScript 保持一致，CSS 属性可以用 `'background-color'` 和 `'backgroundColor'` 两种格式。  
>> &emsp; `css()` 方法将作用于 DOM 节点的 `style` 属性，具有最高优先级。如果要修改 `class` 属性，可以用 jQuery 提供的下列方法：  
>> ```  
>> var div = $('#test-div'); 
>> div.hasClass('highlight');  // false, class是否包含 highlight  
>> div.addClass('highlight');  // 添加 highlight 这个 class  
>> div.removeClass('highlight'); // 删除 highlight 这个 class  
>> ```  
>>  
>> ### **显示和隐藏 DOM**  
>> &emsp; 要隐藏一个 DOM，我们可以设置 CSS 的 `display` 属性为 `none`，利用 `css()` 方法就可以实现。不过，要显示这个 DOM 就需要恢复原有的 `display` 属性，这就得先记下来原有的 `display` 属性到底是 `block` 还是 `inline` 还是别的值。   
>> &emsp; jQuery 直接提供 `show()` 和 `hide()` 方法，我们不用关心它是如何修改 `display` 属性的。  
>> &emsp; <font color='red'>注意</font>，隐藏DOM节点并未改变DOM树的结构，它只影响DOM节点的显示。这和删除DOM节点是不同的。  
>>  
>> ### **获取 DOM 信息**  
>> &emsp; jQuery.width()、 jQuery.height() 可以直接获取 DOM 的高宽。  
>> &emsp; `attr()` 和 `removeAttr()` 方法用于操作 DOM 节点的属性：  
>> ```
>> // <div id="test-div" name="Test" start="1">...</div>
>> var div = $('#test-div');
>> div.attr('data'); // undefined, 属性不存在
>> div.attr('name'); // 'Test'
>> div.attr('name', 'Hello'); // div的name属性变为'Hello'
>> div.removeAttr('name'); // 删除name属性
>> div.attr('name'); // undefined  
>> ```  
>> &emsp; `prop()` 方法和 `attr()` 类似，但是 HTML5 规定有一种属性在 DOM 节点中可以没有值，只有出现与不出现两种，例如：  
>> ``` 
>> <input id="test-radio" type="radio" name="test" checked value="1">
>> //等价于： 
>> <input id="test-radio" type="radio" name="test" checked="checked" value="1">  
>>  
>> var radio = $('#test-radio');
>> radio.attr('checked'); // 'checked'
>> radio.prop('checked'); // true  
>> ```  
>> &emsp; `prop()` 返回值更合理一些。不过，用 `is()` 方法判断更好： 
>> ```  
>> var radio = $('#test-radio');
>> radio.is(':checked'); // true  
>> ``` 
>> &emsp; 类似的属性还有 `selected`，处理时最好用 `is(':selected')`。  
>>  
>> ### **操作表单**  
>> &emsp; 对于表单元素，jQuery对象统一提供val()方法获取和设置对应的value属性。  
>> + ### 修改 DOM 结构   
>>> **添加 DOM**  
>>> &emsp; 要添加新的 DOM 节点，除了通过 jQuery 的 `html()` 这种暴力方法外，还可以用 `append()` 方法。  
>>> &emsp; 除了接收字符串，`append()` 还可以传入原始的 DOM 对象，jQuery 对象和函数对象。  
>>> &emsp; `append()` 把 DOM 添加到最后，`prepend()` 则把 DOM 添加到最前。  
>>> &emsp; 另外注意，如果要添加的 DOM 节点已经存在于 HTML 文档中，它会首先从文档移除，然后再添加，也就是说，用 `append()`，你可以移动一个 DOM 节点。  
>>> &emsp; 如果要把新节点插入到指定位置，例如，JavaScript 和 Python 之间，那么，可以先定位到 JavaScript，然后用 `after()` 方法。也就是说，同级节点可以用 `after()` 或者 `before()` 方法。  
>>>  
>>> **删除节点**  
>>> &emsp; 要删除 DOM 节点，拿到jQuery对象后直接调用 `remove()` 方法就可以了。  
> + ## 事件  
>> &emsp; 用 jQuery 绑定一个 `click` 事件：  
>> ``` 
>> var a = $('#test-link');
>> a.on('click', function () {
>>    alert('Hello!');    
>> });
>>  
>> // -----------------
>> a.click(function () {
>>    alert('Hello!');    
>> });
>> ```  
>> &emsp; `on` 方法用来绑定一个事件，另一种更简化的写法是直接调用 `click()` 方法。  
>>   
>> ### **鼠标事件**  
>> &emsp; click: 鼠标单击时触发；  
>> &emsp; dblclick：鼠标双击时触发；  
>> &emsp; mouseenter：鼠标进入时触发；  
>> &emsp; mouseleave：鼠标移出时触发；  
>> &emsp; mousemove：鼠标在 DOM 内部移动时触发；  
>> &emsp;  hover：鼠标进入和退出时触发两个函数，相当于 mouseenter 加上 mouseleave。    
>>  
>> ### **键盘事件**
>> &emsp; 键盘事件仅作用在当前焦点的DOM上，通常是 `<input>` 和 `<textarea>`。  
>> &emsp; keydown：键盘按下时触发；  
>> &emsp; keyup：键盘松开时触发；  
>> &emsp; keypress：按一次键后触发。  
>>  
>> ### **其他事件**  
>> &emsp; focus：当 DOM 获得焦点时触发；  
>> &emsp; blur：当 DOM 失去焦点时触发；  
>> &emsp; change：当 `<input>`、`<select>` 或 `<textarea>` 的内容改变时触发；  
>> &emsp; submit：当 `<form>` 提交时触发；  
>> &emsp; ready：当页面被载入并且 DOM 树完成初始化后触发。<font color='red'> 根据例子理解一下。 </font>  
>>  
>> ### **事件参数**  
>> &emsp; 有些事件，如 `mousemove` 和 `keypress`，我们需要获取鼠标位置和按键的值，否则监听这些事件就没什么意义了。所有事件都会传入 `Event` 对象作为参数，可以从` Event` 对象上获取到更多的信息(function(e) 中要填e)  
>>  
>> ### **取消绑定**  
>> &emsp; 一个已被绑定的事件可以解除绑定，通过 `off('click', function)` 实现。  
>> &emsp; <font color='red'>注意</font>，参数 function 必须是之前已绑定的 function，若重写一个一模一样的函数，但它们仍是两个不同的函数对象，因而无法移除。  
>> &emsp; 为了实现移除效果，可以使用 `off('click')` 一次性移除已绑定的click事件的所有处理函数。  
>> &emsp; 同理，无参数调用 `off()` 一次性移除已绑定的所有类型的事件处理函数。  
>>  
>> ### **事件触发条件**  
>> &emsp; 事件的触发总是由用户操作引发的。当用户在文本框中输入时，就会触发 `change` 事件。但是，如果 `JavaScript` 代码去改动文本框的值，将不会触发 `change` 事件。有些时候，我们希望用代码触发 `change` 事件，可以直接调用无参数的 `change()` 方法来触发该事件。 
>> ``` 
>> var input = $('#test-input');
>> input.val('change it!'); // 无法触发change事件  
>> 
>> input.val('change it');
>> input.change();  // 触发 change 事件
>> ```  
>> &emsp; `input.change()` 相当于 `input.trigger('change')`，它是 `trigger()` 方法的简写。  
>>   
>> ### **浏览器安全限制**  
>> &emsp; 在浏览器中，有些 JavaScript 代码只有在用户触发下才能执行，例如，`window.open()` 函数，若不经过用户触发，则无法弹出新窗口，将被浏览器屏蔽。   
>> + ## 动画  
>> &emsp; jQuery 内置的几种动画样式：  
>> ### **show / hide**  
>> &emsp; 直接以无参数形式调用 `show()` 和 `hide()`，会显示和隐藏 DOM 元素。但是，只要传递一个时间参数进去，就变成了动画。时间以毫秒为单位，但也可以是 `slow`，`fast`这些字符串。  
>> &emsp; `toggle()`方法则根据当前状态决定是 `show()` 还是 `hide()`。  
>>  
>> ### **slideUp / slideDown**  
>> &emsp; `show()` 和 `hide()` 是从左上角逐渐展开或收缩的，而 `slideUp()` 和 `slideDown()` 则是在垂直方向逐渐展开或收缩的。  
>> &emsp; `slideUp()` 把一个可见的 DOM 元素收起来，效果跟拉上窗帘似的，`slideDown()` 相反，而 `slideToggle()` 则根据元素是否可见来决定下一步动作。  
>>   
>> ### **fadeIn / fadeOut**  
>> &emsp; `fadeIn()` 和 `fadeOut()` 的动画效果是淡入淡出，也就是通过不断设置 DOM 元素的 `opacity` 属性来实现，而 `fadeToggle()` 则根据元素是否可见来决定下一步动作。  
>>   
>> ### **自定义动画**  
>> &emsp; `animate()` 可以实现任意动画效果，我们需要传入的参数就是 DOM 元素最终的 CSS 状态和时间，jQuery 在时间段内不断调整 CSS 直到达到我们设定的值。  
>> ``` 
>> var div = $('#test-animate');
>> div.animate({
>>     opacity: 0.25,
>>     width: '256px',
>>     height: '256px'
>> }, 3000); // 在3秒钟内CSS过渡到设定值  
>> ```  
>> &emsp; `animate()` 还可以再传入一个函数，当动画结束时，该函数将被调用。实际上这个回调函数参数对于基本动画也是适用的。  
>>  
>> ### **串行动画**  
>> &emsp; jQuery 的动画效果还可以串行执行，通过 `delay()` 方法还可以实现暂停。因为动画需要执行一段时间，所以 jQuery 必须不断返回新的 Promise 对象才能后续执行操作。简单地把动画封装在函数中是不够的。  
>>   
>> ### **为什么有的动画没有效果**  
>> &emsp; 你可能会遇到，有的动画如 `slideUp()` 根本没有效果。这是因为 jQuery 动画的原理是逐渐改变 CSS 的值，如 `height` 从 `100px` 逐渐变为 `0`。但是很多不是 block 性质的 DOM 元素，对它们设置 `height` 根本就不起作用，所以动画也就没有效果。  
>> &emsp; 此外，jQuery 也没有实现对 `background-color` 的动画效果，用 `animate()` 设置 `background-color` 也没有效果。这种情况下可以使用 CSS3 的 `transition` 实现动画效果。  
> + ## AJAX   
>> ### **ajax**  
>> &emsp; jQuery 在全局对象 `jQuery` （也就是 `$` ）绑定了 `ajax()` 函数，可以处理 AJAX 请求。`ajax(url, settings)` 函数需要接收一个 URL 和一个可选的 `settings` 对象，常用的选项如下：  
>> + async：是否异步执行 AJAX 请求，默认为 `true`，千万不要指定为 `false`；  
>> + method：发送的 Method，缺省为 `'GET'` ，可指定为 `'POST'`、`'PUT'` 等；  
>> + contentType：发送 POST 请求的格式，默认值为 `'application/x-www-form-urlencoded; charset=UTF-8'`，也可以指定为 `text/plain`、`application/json`；   
>> + data：发送的数据，可以是字符串、数组或 object。如果是 GET 请求，data 将被转换成 query 附加到 URL 上，如果是 POST 请求，根据 contentType 把 data 序列化成合适的格式；  
>> + headers：发送的额外的 HTTP 头，必须是一个 object；   
>> + dataType：接收的数据格式，可以指定为 `'html'`、`'xml'`、`'json'`、`'text'` 等，缺省情况下根据响应的 `Content-Type` 猜测。  
>> &emsp; 下面的例子发送一个 GET 请求，并返回一个 JSON 格式的数据：  
>> ```  
>> var jqxhr = $.ajax('/api/categories', {
>>     dataType: 'json'    
>> });  
>> // 请求已经发送了
>> ```    
>> &emsp; jQuery 的 jqXHR 对象类似一个 Promise 对象，我们可以用链式写法来处理各种回调。  
>> ### **get**  
>> &emsp; GET 请求，第二个参数如果是 object，jQuery 自动把它变成 query string 然后加到 URL 后面，
>> ``` 
>> var jqxhr = $.get('/path/to/resource', {
>>     name: 'Bob Lee',
>>     check: 1
>> });  
>>  
>>  // 实际的 URL 是：  
>> /path/to/resource?name=Bob%20Lee&check=1
>> ```  
>> ### **post**  
>> &emsp; `post()` 和 `get()` 类似，但是传入的第二个参数默认被序列化为 `application/x-www-form-urlencoded`：  
>> ```
>> var jqxhr = $.post('/path/to/resource', {
>>     name: 'Bob Lee',
>>     check: 1
>> });  
>> ```  
>> &emsp; 实际构造的数据 `name=Bob%20Lee&check=1` 作为 POST 的 body 被发送。  
>> ### **getJSON**  
>> &emsp; 由于 JSON 用得越来越普遍，所以jQuery也提供了 `getJSON()` 方法来快速通过 GET 获取一个 JSON 对象：  
>> ```
>> var jqxhr = $.getJSON('/path/to/resource', {
>>     name: 'Bob Lee',
>>     check: 1
>> }).done(function (data) {
>>     // data已经被解析为JSON对象了
>> });  
>> ```  
>> ### **安全限制**  
>> &emsp; jQuery 的 AJAX 完全封装的是 JavaScript 的 AJAX 操作，所以它的安全限制和前面讲的用 JavaScript 写 AJAX 完全一样。  
>> &emsp; 如果需要使用 JSONP，可以在 `ajax()` 中设置 `jsonp: 'callback'`，让 jQuery 实现 JSONP 跨域加载数据。  
> + ## 扩展    
>> &emsp; 可以扩展 jQuery 来实现自定义方法。这种方式也称为编写 jQuery 插件。  
>> ### **编写 jQuery 插件**   
>> &emsp; 给 jQuery 对象绑定一个新方法是通过扩展 `$.fn` 对象实现的。让我们来编写第一个扩展—— `highlight1()`：  
>> ```  
>> $.fn.highlight1 = function () {
>>     // this已绑定为当前jQuery对象:
>>    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
>>     return this;
>> }
>> ```  
>> &emsp; 注意到函数内部的 `this` 在调用时被绑定为 jQuery 对象，所以函数内部代码可以正常调用所有 jQuery 对象的方法。`return this` 是因为 jQuery 对象支持链式操作。  
>> &emsp; 我们可以给方法加个参数，让用户自己把参数用对象传进去。于是我们有了第二个版本的 `highlight2()`：  
>> ```  
>> $.fn.highlight2 = function (options) {
>>     // 要考虑到各种情况:
>>     // options为undefined
>>     // options只有部分key
>>     var bgcolor = options && options.backgroundColor || '#fffceb';
>>     var color = options && options.color || '#d85030';
>>     this.css('backgroundColor', bgcolor).css('color', color);
>>     return this;
>> }  
>> ```  
>> &emsp; 对于默认值的处理，我们用了一个简单的 `&&` 和 `||` 短路操作符，总能得到一个有效的值。  
>> &emsp; 另一种方法是使用 jQuery 提供的辅助方法 `$.extend(target, obj1, obj2, ...)`，它把多个 object 对象的属性合并到第一个 target 对象中，遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高：  
>> ```  
>> // 把默认值和用户传入的options合并到对象{}中并返回:
>> var opts = $.extend({}, {
>>     backgroundColor: '#00a8e6',
>>     color: '#ffffff'
>> }, options);  
>> ```  
>> &emsp; 对于如何设定的默认值应该能允许用户修改，最佳地点是 `$.fn.highlight2`这个函数对象本身。  
>> &emsp; 于是最终版的 `highlight()` 终于诞生了：  
>> ```
>> $.fn.highlight = function (options) {
>>     // 合并默认值和用户设定值:
>>     var opts = $.extend({}, $.fn.highlight.defaults, options);
>>     this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
>>     return this;
>> }
>>  
>> // 设定默认值:
>> $.fn.highlight.defaults = {
>>     color: '#d85030',
>>     backgroundColor: '#fff8de'
>> }
>> ```  
>> &emsp; 最终，我们得出编写一个 jQuery 插件的原则：  
>> + 给$.fn绑定函数，实现插件的代码逻辑；  
>> + 插件函数最后要 `return this`;以支持链式调用；  
>> + 插件函数要有默认值，绑定在 `$.fn.<pluginName>.defaults` 上；  
>> + 用户在调用时可传入设定值以便覆盖默认值。  
>> ### **针对特定元素的扩展**  
>> &emsp; 我们知道 jQuery 对象的有些方法只能作用在特定 DOM 元素上，比如 `submit()` 方法只能针对 `form`。如果我们编写的扩展只能针对某些类型的 DOM 元素，应该怎么写？  
>> &emsp; 还记得 jQuery 的选择器支持 `filter()` 方法来过滤吗？我们可以借助这个方法来实现针对特定元素的扩展。  
 + # 错误处理  
> ### **try ... catch ... finally**  
> &emsp; 有错误发生时，执行流程：  
> + 先执行 `try { ... }` 的代码；  
> + 执行到出错的语句时，后续语句不再继续执行，转而执行 `catch (e) { ... }` 代码；  
> + 最后执行 `finally { ... }` 代码。   
>  
>    
> &emsp; 而没有错误发生时，执行流程：  
> + 先执行 `try { ... }` 的代码；  
> + 因为没有出错，`catch (e) { ... }` 代码不会被执行；  
> + 最后执行 `finally { ... }` 代码。    
>  
> &emsp; 最后请注意，`catch` 和 `finally` 可以不必都出现。也就是说，`try` 语句一共有三种形式:  
> 1、完整的 try ... catch ... finally  
> 2、只有 try ... catch,没有 finally  
> 3、只有 try ... finally,没有catch  
>   
> ### **错误类型**  
> &emsp; JavaScript 有一个标准的 `Error` 对象表示错误，还有从 `Error` 派生的 `TypeError`、`ReferenceError` 等错误对象。我们在处理错误时，可以通过 `catch(e)` 捕获的变量 `e` 访问错误对象。  
> &emsp; 使用变量 `e` 是一个习惯用法，也可以以其他变量名命名，如 `catch(ex)`。  
>  
> ### **抛出错误**  
> &emsp; 程序也可以主动抛出一个错误，让执行流程直接跳转到 `catch` 块。抛出错误使用 `throw` 语句。  
> &emsp; 处理错误时，请不要简单粗暴地用 `alert()` 把错误显示给用户。教程的代码使用 `alert()` 是为了便于演示。  
> 
> + ## 错误传播  
>> &emsp; 如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，如果外层函数也没有捕获，该错误会一直沿着函数调用链向上抛出，直到被JavaScript引擎捕获，代码终止执行。  
> + ## 异步错误处理  
>> &emsp;  编写 JavaScript 代码时，我们要时刻牢记，JavaScript 引擎是一个事件驱动的执行引擎，代码总是以单线程执行，而回调函数的执行需要等到下一个满足条件的事件出现后，才会被执行。  
>> &emsp; 例如，`setTimeout()` 函数可以传入回调函数，并在指定若干毫秒后执行：  
>> ```  
>> function printTime() {
>>     console.log('It is time!');
>> }
>> 
>> setTimeout(printTime, 1000);
>> console.log('done');  
>> ```  
>> &emsp; 上面的代码会先打印`done`，1秒后才会打印 `It is time!` 。  
>> &emsp; 如果 `printTime()` 函数内部发生了错误，我们试图用 try 包裹 `setTimeout()` 是无效的。  
>> &emsp; 原因就在于调用 `setTimeout()` 函数时，传入的 `printTime` 函数并未立刻执行！紧接着，JavaScript 引擎会继续执行 `console.log('done')`;语句，而此时并没有错误发生。直到1秒钟后，执行 `printTime` 函数时才发生错误，但此时除了在 `printTime` 函数内部捕获错误外，外层代码并无法捕获。  
>> &emsp; 所以，涉及到异步代码，无法在调用时捕获，原因就是在捕获的当时，回调函数并未执行。  
>> &emsp; 类似的，当我们处理一个事件时，在绑定事件的代码处，无法捕获事件处理函数的错误。  
+ # underscore  
> &emsp; `Array` 有 `map()` 和 `filter()` 方法，可是 Object 没有这些方法。此外，低版本的浏览器例如 IE6～8 也没有这些方法，怎么办？  
> &emsp; 方法一，自己把这些方法添加到 `Array.prototype` 中，然后给 `Object.prototype` 也加上 `mapObject()` 等类似的方法。  
> &emsp; 方法二，直接找一个成熟可靠的第三方开源库，使用统一的函数来实现 `map()`、`filter()` 这些操作。  
> &emsp; 正如 jQuery 统一了不同浏览器之间的 DOM 操作的差异，让我们可以简单地对 DOM 进行操作， underscore 则提供了一套完善的函数式编程的接口，让我们更方便地在 JavaScript 中实现函数式编程。  
> &emsp; jQuery 在加载时，会把自身绑定到唯一的全局变量 `$` 上， underscore 与其类似，会把自身绑定到唯一的全局变量_上，这也是为啥它的名字叫 underscore 的原因。  
> &emsp; 用 underscore 实现 `map()` 操作如下：  
> ```  
> 'use strict';
> _.map([1, 2, 3], (x) => x * x); // [1, 4, 9]
> ```  
> &emsp; 咋一看比直接用 `Array.map()` 要麻烦一点，可是 underscore 的 `map()` 还可以作用于 Object：  
> ```
> 'use strict';
> _.map({ a: 1, b: 2, c: 3 }, (v, k) => k + '=' + v); // ['a=1', 'b=2', 'c=3']  
> ```  
> + ## Collections  
>> &emsp; underscore 为集合类对象提供了一致的接口。集合类是指 Array 和 Object，暂不支持 Map 和 Set。  
>> ### **map / filter**  
>> 和 `Array` 的 `map()` 与 `filter()` 类似，但是 underscore 的 `map()` 和 `filter()` 可以作用于 Object。当作用于 Object 时，传入的函数为 `function (value, key)` ，第一个参数接收 value，第二个参数接收 key:  
>> ``` 
>> 'use strict';
>> 
>> var obj = {
>>     name: 'bob',
>>     school: 'No.1 middle school',
>>     address: 'xueyuan road'
>> };    
>> 
>> var upper = _.mapObject(obj, function (value, key) {
>>     return key + '=' + value;
>> });    
>> 
>> console.log(JSON.stringify(upper));
>> ```  
>> &emsp; 对 Object 做 `map()` 操作的返回结果是 `Array`，把 `_.map` 换成 `_.mapObject` 即可返回 Object。  
>>  
>> ### **every / some**  
>> &emsp; 当集合的所有元素都满足条件时，`_.every()` 函数返回 `true`，当集合的至少一个元素满足条件时，`_.some()` 函数返回 `true`：  
>> ``` 
>> 'use strict';
>> // 所有元素都大于0？
>> _.every([1, 4, 7, -3, -9], (x) => x > 0); // false  
>>  
>> // 至少一个元素大于0？
>> _.some([1, 4, 7, -3, -9], (x) => x > 0); // true  
>> ```  
>>  
>> ### **max / min**  
>> &emsp; 这两个函数直接返回集合中最大和最小的数:  
>> ```  
>> 'use strict';
>> var arr = [3, 5, 7, 9];
>> _.max(arr); // 9
>> _.min(arr); // 3
>> 
>> // 空集合会返回-Infinity和Infinity，所以要先判断集合不为空：
>> _.max([])
>> -Infinity
>> _.min([])
>> Infinity  
>> ```  
>> &emsp; 注意，如果集合是 Object ，`max()` 和 `min()` 只作用于 value，忽略掉 key：  
>> ```  
>> 'use strict';
>> _.max({a:1, b:2, c:3});  // 3  
>> ```
>>  
>> ### **groupBy**  
>> &emsp; `groupBy()` 把集合的元素按照 key 归类，key 由传入的函数返回：  
>> ```  
>> 'use strict';
>> 
>> var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
>> var groups = _.groupBy(scores, function (x) {
>>     if (x < 60) {
>>         return 'C';
>>     } else if (x < 80) {
>>         return 'B';
>>     } else {
>>         return 'A';
>>     }
>> });  
>>
>> // 结果:
>> // {
>> //   A: [81, 91, 88, 99],
>> //   B: [75, 77, 66, 72],
>> //   C: [20, 40, 59]
>> // }  
>> ```  
>> ### **shuffle / sample**  
>> &emsp; `shuffle()` 用洗牌算法随机打乱一个集合：  
>> ```
>> 'use strict';
>> // 注意每次结果都不一样  
>> _.shuffle([1, 2, 3, 4, 5]);  //[3, 5, 4, 6, 2, 1]  
>> ```  
>> &emsp; `sample()` 则是随机选择一个或多个元素：  
>> ```  
>> 'use strict';  
>> // 注意每次结果都不一样； 
>>   
>> // 随机选 1 个：  
>> _.sample([1, 2, 3, 4, 5]);  // 2  
>> 
>> // 随机选 3 个： 
>> _.sample([1, 2, 3, 4, 5], 3);  // [6, 1, 4]  
>> ```  
>> &emsp; 更多完整的函数请参考underscore 的文档：http://underscorejs.org/#collections  
> + ## Arrays  
>> ### **first / last**  
>> &emsp; 这两个函数分别取第一个和最后一个元素。  
>> ### **flatten**  
>> &emsp; `flatten()` 接收一个 `Array`，无论这个 `Array` 里面嵌套了多少个 `Array`，`flatten()` 最后都把它们变成一个一维数组:  
>> ``` 
>> 'use strict;'
>>  
>> _.flatten([1, [2], [3, [[4], [5]]]]); // [1, 2, 3, 4, 5]  
>> ``` 
>>  
>> ### **zip / unzip**  
>> &emsp; `zip()` 把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组。例如，你有一个 `Array` 保存了名字，另一个 `Array` 保存了分数，现在，要把名字和分数给对上，用 `zip()` 轻松实现:  
>> ```  
>> 'use strict';
>> 
>> var names = ['Adam', 'Lisa', 'Bart'];
>> var scores = [85, 92, 59];
>> _.zip(names, scores);
>> // [['Adam', 85], ['Lisa', 92], ['Bart', 59]]    
>>  
>> // unzip() 则是反过来：  
>> 'use strict;'
>> var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];  
>> _.unzip(namesAndScores);  
>> // [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]  
>> ```  
>>   
>> ### **object**  
>> &emsp; `object()` 函数与 `zip()` 不同在于可以把名字和分数直接对应成 Object。  
>> ```  
>> 'use strict;'
>>
>> var names = ['Adam', 'Lisa', 'Bart'];  
>> var scores = [85, 92, 59];  
>> _.object(names, scores);  
>> // {'Adam:85, Lisa:92, BBart:59'}  
>> ```  
>> &emsp; <font color='red'>注意</font>, `_.object()` 是一个函数，不是 JavaScript 的 'Object' 对象。  
>>  
>> ### **range**  
>> &emsp; `range()` 让你快速生成一个序列，不再需要用 `for` 循环实现了：  
>> ```  
>> 'use strict';
>> 
>> // 从0开始小于10:
>> _.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>> 
>> // 从1开始小于11：
>> _.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>> 
>> // 从0开始小于30，步长5:
>> _.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]
>> 
>> // 从0开始大于-10，步长-1:
>> _.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]  
>> ```  
>>  
> + ## Functions  
>> ### **bind**  
>> &emsp; `bind()` 有什么用？我们西安看一个常见的错误用法：  
>> ```  
>> 'use strict;'  
>>  
>> var s = ' Hello '; 
>> s.trim();  
>> // 输出 'Hello'
>>  
>> var fn = s.trim;
>> fn();  
>> // Uncaught TypeError: String.prototype.trim called on null or undefined  
>> ```  
>> &emsp; 如果你想用 `fn()` 取代 `s.trim()`，按照上面的做法是不行的，因为直接调用 `fn()` 传入的 `this` 指针是 `undefined`，必须这么用：  
>> ```  
>> 'use strict;'
>>  
>> var s = ' Hello ';
>> var fn = s.trim();
>>
>> // 调用 call 并传入 s 对象作为 this：
>> fn(s);  
>> // 输出 Hello  
>> ```  
>> &emsp; 这样做太麻烦，可以用 `bind()` 帮我们把 `s` 对象直接绑定在 `fn()` 的 `this` 指针上，以后调用 `fn()` 就可以直接正常调用了：  
>> ```
>> 'use strict;'
>> 
>> var s = ' Hello ';
>> var fn = _.bing(s.trim, s);
>> fn();
>> // 输出 Hello
>> ```  
>> &emsp; 结论：当用一个变量 `fn` 指向一个对象的方法时，直接调用 `fn()` 是不行的，因为丢失了 `this` 对象的引用。用 `bind` 可以修复这个问题。  
>>  
>> ### **partial**  
>> &emsp; `partial()` 就是为一个函数创建偏函数。创建偏函数的目的是将原函数的某些参数固定住，可以降低新函数调用的难度。  
>> &emsp; 假设我们要计算 x^y，这时只需要调用 `Math.pow(x, y)` 就可以了。  
>> &emsp; 假设我们经常计算 2^y，每次都写 `Math.pow(2, y)` 就比较麻烦，如果创建一个新的函数能直接这样写 `pow2N(y)` 就好了，这个新函数 `pow2N(y)` 就是根据 `Math.pow(x, y)` 创建出来的偏函数，它固定住了原函数的第一个参数（始终为2）:  
>> ```  
>> 'use strict';
>> 
>> var pow2N = _.partial(Math.pow, 2);
>> pow2N(3); // 8
>> pow2N(5); // 32
>> pow2N(10); // 1024
>> ```  
>> &emsp; 如果我们不想固定第一个参数，想固定第二个参数怎么办？比如，希望创建一个偏函数 `cube(x)`，计算 x^3，可以用 `_` 作占位符，固定住第二个参数：   
>> ```
>> 'use strict';
>> 
>> var cube = _.partial(Math.pow, _, 3);
>> cube(3); // 27
>> cube(5); // 125
>> cube(10); // 1000  
>> ```  
>>  
>> ### **memoize**  
>> &emsp; 如果一个函数调用开销很大，我们就可能希望能把结果缓存下来，以便后续调用时直接获得结果。举个例子，计算阶乘就比较耗时:  
>> ```
>> 'use strict';
>> 
>> var factorial = _.memoize(function(n) {
>>     console.log('start calculate ' + n + '!...');
>>     var s = 1, i = n;
>>     while (i > 1) {
>>         s = s * i;
>>         i --;
>>     }
>>     console.log(n + '! = ' + s);
>>     return s;
>> }
>> 
>> // 第一次调用:
>> factorial(10); // 3628800
>> // 注意控制台输出:
>> // start calculate 10!...
>> // 10! = 3628800
>> 
>> // 第二次调用:
>> factorial(10); // 3628800
>> // 控制台没有输出
>> ```  
>> &emsp; 对于相同的调用，比如连续两次调用 `factorial(10)`，第二次调用并没有计算，而是直接返回上次计算后缓存的结果。不过，当你计算 `factorial(9)` 的时候，仍然会重新计算。  
>>  
>> ### **once**  
>> &emsp; 顾名思义，`once()` 保证某个函数执行且仅执行一次。如果你有一个方法叫 `register()`，用户在页面上点两个按钮的任何一个都可以执行的话，就可以用 `once()` 保证函数仅调用一次，无论用户点击多少次。  
>>  
>> ### **delay**  
>> &emsp; `delay()` 可以让一个函数延迟执行，效果和 `setTimeout()` 是一样的，但是代码明显简单了:  
>> ``` 
>> 'use strict';
>> 
>> // 2秒后调用alert():
>> _.delay(alert, 2000);
>> ```  
>> &emsp; 如果要延迟调用的函数有参数，把参数也传进去：  
>> ```  
>> 'use strict';
>> 
>> var log = _.bind(console.log, console);
>> _.delay(log, 2000, 'Hello,', 'world!');
>> // 2秒后打印'Hello, world!':  
>> ```   
> + ## Objects  
>> ### **keys / allKeys**  
>> &emsp; `keys()` 可以非常方便地返回一个 object 自身所有的 key ，但不包含从原型链继承下来的:  
>> ```  
>> 'use strict';
>> 
>> function Student(name, age) {
>>    this.name = name;
>>     this.age = age;
>> }
>> 
>> var xiaoming = new Student('小明', 20);
>> _.keys(xiaoming); // ['name', 'age']   
>> ```  
>> &emsp; `allKey()` 除了 object 自身的 key， 还包含从原型链继承下来的：  
>> ```  
>> 'use strict';
>> 
>> function Student(name, age) {
>>     this.name = name;
>>     this.age = age;
>> }
>> Student.prototype.school = 'No.1 Middle School';
>> var xiaoming = new Student('小明', 20);
>> _.allKeys(xiaoming); // ['name', 'age', 'school']  
>> ```  
>>  
>> ### **values**  
>> &emsp; 和 `key()` 类似，`values()` 返回 object 自身但不包含原型链继承的所有值：  
>> &emsp; 注意，没有 `allValues()`。  
>>  
>> ### **mapObject**  
>> &emsp; `mapObject()` 就是针对 object 的 map 版本：  
>> ```  
>> 'use strict';
>> 
>> var obj = { a: 1, b: 2, c: 3 };
>> // 注意传入的函数签名，value在前，key在后:
>> _.mapObject(obj, (v, k) => 100 + v); // { a: 101, b: 102, c: 103 }  
>> ```  
>>  
>> ### **invert**  
>> &emsp; `invert()` 把 object 的每个 key-value 来个交换，key 变成 value，value 变成 key。  
>>  
>> ### **extend / extendOwn**  
>> &emsp; `extend()`把多个 object 的 key-value 合并到第一个 object 并返回：  
>> ```  
>> 'use strict';
>> 
>> var a = {name: 'Bob', age: 20};
>> _.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); // {name: 'Bob', age: 88, city: 'Beijing'}
>> // 变量a的内容也改变了：
>> a; // {name: 'Bob', age: 88, city: 'Beijing'}  
>> ```  
>> &emsp; 注意：如果有相同的 key，后面的 object 的 value 将覆盖前面的 object 的 value。  
>> &emsp; `extendOwn()` 和 `extend()` 类似，但获取属性时忽略从原型链继承下来的属性。  
>>  
>> ### **clone**  
>> &emsp; 如果我们要复制一个 object 对象，就可以用 `clone()` 方法，它会把原有对象的所有属性都复制到新的对象中。  
>> &emsp; 注意，`clone()` 是“浅复制”，两个对象相同的 key 所引用的 value 其实是同一对象：  
>> ` source.skills === copied.skills;  // true`  
>> &emsp; 也就是说，修改 `source.skills` 会影响 `copied.skills`。  
>>  
>> ### **isEqual**  
>> &emsp; `isEqual()` 对两个 object 进行深度比较，如果内容完全相同，则返回 `true`:  
>> ``` 
>> 'use strict';
>> 
>> var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
>> var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};
>> 
>> o1 === o2; // false
>> _.isEqual(o1, o2); // true  
>> ```  
>> &emsp; `isEqual()` 其实对 `Array` 也可以比较：  
>> ```  
>> 'use strict';
>> 
>> var o1 = ['Bob', { skills: ['Java', 'JavaScript'] }];
>> var o2 = ['Bob', { skills: ['Java', 'JavaScript'] }];
>> 
>> o1 === o2; // false
>> _.isEqual(o1, o2); // true  
>> ```  
> + ## Chaining  
>> &emsp; 类似 jQuery 支持链式调用，用 underscore 提供的函数，如：  
>> ` _.filter(_.map([1, 4, 9, 16, 25], Math.sqrt), x => x % 2 === 1);  // [1, 3, 5]`  
>> &emsp; 也可以写成链式调用。  
>> &emsp; underscore 提供了把对象包装成能进行链式调用的方法，就是 `chain()` 函数:  
>> ```  
>> var r = _.chain([1, 4, 9, 16, 25])
>>          .map(Math.sqrt)
>>          .filter(x => x % 2 === 1)  
>>          .value();  
>> console.log(r);  // [1, 3, 5]  
>> ```  
>> &emsp; 因为每一步返回的都是包装对象，所以最后一步的结果需要调用 `value()` 获得最终结果。  
+ # Node.js  
> + ## 基本模块  
>> ### **global**  
>> &emsp; JavaScript 有且仅有一个全局对象，在浏览器中，叫 `window` 对象。而在 Node.js 环境中，也有唯一的全局对象，但不叫 `window`，而叫 `global`，这个对象的属性和方法也和浏览器环境的 `window` 不同。  
>>  
>> ### **process**  
>> &emsp; `process` 也是 Node.js 提供的一个对象，它代表当前 Node.js 进程。通过 `process` 对象可以拿到许多有用信息。  
>> &emsp; JavaScript 程序是由事件驱动执行的单线程模型，Node.js 也不例外。Node.js 不断执行响应事件的 JavaScript 函数，直到没有任何响应事件的函数可以执行时， Node.js 就退出了。  
>> &emsp; 如果我们想要在下一次事件响应中执行代码，可以调用 `process.nextTick()`。传入 `process.nextTick()` 的函数不是立刻执行，而是要等到下一次事件循环。  
>> &emsp; Node.js 进程本身的事件就由 `process` 对象来处理。如果我们响应 `exit` 事件，就可以在程序即将退出时执行某个回调函数：  
>> ```  
>> // 程序即将退出时的回调函数:
>> process.on('exit', function (code) {
>>     console.log('about to exit with code: ' + code);
>> });  
>> ```
>> + ### fs  
>>> &emsp; Node.js 内置的 `fs` 模块就是文件系统模块，负责读写文件。`fs` 模块同时提供了异步和同步的方法。  
>>> ### **异步读文件**  
>>> ```
>>> 'use strict';
>>> 
>>> var fs = require('fs');
>>> 
>>> fs.readFile('sample.txt', 'utf-8', function (err, data) {
>>>     if (err) {
>>>         console.log(err);
>>>     } else {
>>>         console.log(data);
>>>     }
>>> }); 
>>> ```  
>>> &emsp; 当读取二进制文件时，不传入文件编码时，回调函数的 `data` 参数将返回一个 `Buffer` 对象。在 Node.js 中， `Buffer` 对象就是一个包含零个或任意个字节的数组（注意和 Array 不同）。  
>>> &emsp; `Buffer` 对象可以和 String 做转换：  
>>> ```
>>> // Buffer -> String
>>> var text = data.toString('utf-8');
>>>
>>> // String -> Buffer
>>> var buf = Buffer.from(text, 'utf-8');
>>> ```  
>>> ### **同步读文件**  
>>> &emsp; 除了标准的异步读取模式外， `fs` 也提供相应的同步读取函数。同步读取的函数和异步函数相比，多了一个 `Sync` 后缀，并且不接收回调函数，函数直接返回结果。  
>>> &emsp; 如果同步读取文件发生错误，则需要用 `try ... catch` 捕获该错误。  
>>> ### **写文件**  
>>> ```
>>> 'use strict';
>>> 
>>> var fs = require('fs');
>>> 
>>> var data = 'Hello, Node.js';
>>> fs.writeFile('output.txt', data, function (err) {
>>>     if (err) {
>>>         console.log(err);
>>>     } else {
>>>         console.log('ok.');
>>>     }
>>> });
>>> ```  
>>> &emsp; `writeFile()` 的参数依次为文件名、数据和回调函数。如果传入的数据是 String，默认按 UTF-8 编码写入文本文件，如果传入的参数是 `Buffer`，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个 `err` 参数。  
>>> &emsp; 和 `readFile()` 类似，`writeFile()` 也有一个同步方法，叫 `writeFileSync()`：  
>>> ### **stat**  
>>> &emsp; 如果我们要获取文件大小，创建时间等信息，可以使用 `fs.stat()`，它返回一个 `Stat` 对象，能告诉我们文件或目录的详细信息。  
>>> `fs.stat('sample.txt', function(err, stat) { ... });`  
>>> + stat.isFile()  &emsp; // 是否文件  
>>> + stat.isDirectory();  &emsp; // 是否目录  
>>> + stat.size  &emsp; // 文件大小   
>>> + stat.birthtime  &emsp; // 创建时间， Date 对象  
>>> + stat.mtime  &emsp; // 修改时间， Date 对象  




    

 







