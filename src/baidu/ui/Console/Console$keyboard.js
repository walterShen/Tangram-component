/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */


///import baidu.ui.Console;

baidu.extend(baidu.ui.Console.prototype,{
    enableKeyboard : true
});

baidu.ui.Console.register(function(me){
    if(me.enableKeyboard){
        //对Console window 提供快捷键支持
    }
});
