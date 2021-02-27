`vue`默认的指令有
1. v-if
2. v-show
3. v-model
4. v-on=
5. v-bind=


其中真正的指令，只有v-model和v-show

在createElm之后，所有的vnode都会走invokeCreateHooks这个方法。
这个方法里面有个updateDirective方法

bind的话就会直接执行其注册的方法
insert的话 就会给当前vnode的hook中加入一个insert的hook。

最后到patch结束后，统一走insertHook的时候，在执行insert的hook，v-model就是这样。

值得注意的是，v-model会在compositionStart的时候阻止input的事件，并在compositionEnd的时候自定义一个input的事件并且，Dispatch出去