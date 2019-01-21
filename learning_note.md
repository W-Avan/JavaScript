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
