TypeScript ExtJS Code Emitter
======================

A fork of typescript to emit code in Ext JS class style

#Why?

TypeScript emit code in a particular style and get really ugly when you have deep module names and class inheritance.
ExtJS, on other hand, has a nice class system style, so why not mix both?

#Screenshot
![ScreenShot](https://raw2.github.com/fabioparra/TypeScriptExtJSEmitter/master/TypeScriptExtJSEmitter/images/screenshot.jpg)


#Demo

https://rawgithub.com/fabioparra/TypeScriptExtJSEmitter/master/TypeScriptExtJSEmitter/index.html

#Usage

####Update tsc.js and lib.d.ts files (eg: visual studio build task)

visual studio folder C:\Program Files (x86)\Microsoft SDKs\TypeScript\0.9

https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/tsc.js
https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/lib.d.ts


####Update typescriptServices.js and lib.d.ts files (eg: visual studio plugin)


visual studio folder (vary by version) C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\IDE\CommonExtensions\Microsoft\TypeScript\0.9

https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/typescriptServices.js
https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/lib.d.ts

#Source Code

https://typescript.codeplex.com/SourceControl/network/forks/fabioparra/ExtJSEmitter

obs: Changes made only in TypeScript.Emitter class
