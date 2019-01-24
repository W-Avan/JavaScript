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
>  &emsp; &emsp;`123.toString(); &emsp; &emsp; // SyntaxError`  
>  &emsp; 遇到这种情况，要特殊处理一下：  
>  &emsp; &emsp; `123..toString(); &emsp; &emsp;// '123', 注意是两个点！`  
>  &emsp; &emsp; `(123).toString(); &emsp; &emsp; // '123'`    
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
>> &emsp; RegExp 对象的 test() 方法用于测试给定的字符串是否符合条件。  
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