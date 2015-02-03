TypeScript ExtJS Emitter
======================

A fork of Typescript 1.0.3 that emits classes in a way that ExtJS understands.

##Why?

The Javascript emitted by the Typescript compiler is not compatible with the ExtJS class system. ExtJS requires classes to be defined using syntax like `Ext.define(CLASSNAME, MEMBERS);` but Typescript emits code based around prototypes.

This forked compiler emits code that looks just like the ExtJS classes you would write in regular Javascript.

##ExtJS API Type Declarations

To get the most use out of this compiler you will also need some type declarations (*.d.ts files) for the ExtJS API. There is a companion project to provide these: https://github.com/Dretch/typescript-declarations-for-ext

##Screenshot
![ScreenShot](https://raw.github.com/fabioparra/TypeScriptExtJSEmitter/master/TypeScriptExtJSEmitter/images/screenshot.jpg)

##Demo

https://rawgithub.com/fabioparra/TypeScriptExtJSEmitter/master/TypeScriptExtJSEmitter/index.html

##Compatability

This project is compatible with Typescript 1.0.3 and ExtJS 4 and 5. The emitted classes can be processed by Sencha CMD. Typescript 1.4 support is planned.

##Usage with Visual Studio

####Update tsc.js and lib.d.ts files (eg: visual studio build task)

visual studio folder C:\Program Files (x86)\Microsoft SDKs\TypeScript\1.0

https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/tsc.js
https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/lib.d.ts

####Update typescriptServices.js and lib.d.ts files (eg: visual studio plugin)

visual studio folder (vary by version) C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\IDE\CommonExtensions\Microsoft\TypeScript

https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/typescriptServices.js
https://github.com/fabioparra/TypeScriptExtJSEmitter/blob/master/TypeScriptExtJSEmitter/js/compiler/lib.d.ts

##Usage with IntelliJ IDEA

IntelliJ IDEA 14 (Ultimate Edition only) has Typescript support. The ExtJS emitter can be used instead of the regular compiler.

Follow the instructions for setting up regular Typescript support (https://www.jetbrains.com/idea/help/typescript-support.html) but ensure that you do the following:

1.  Install the regular Typescript transpiler, __version 1.0.1__ (i.e. `npm install typescript@1.0.1`), at the project level rather than globally, and don't add it to the `PATH` variable. This means you can still use the regular Typescript emitter for other projects.

2.  Edit the file watcher that IntelliJ creates for Typescript so that it uses the project `tsc` (`node_modules/typescript/bin/tsc`) rather than the global one.

3.  Replace these files inside the project's Typescript installation (`node_modules/typescript/bin`):

    *    `tsc.js` with https://raw.githubusercontent.com/fabioparra/TypeScriptExtJSEmitter/master/TypeScriptExtJSEmitter/js/compiler/tsc.js

    *    `lib.d.ts` with https://github.com/fabioparra/TypeScriptExtJSEmitter/raw/master/TypeScriptExtJSEmitter/js/compiler/lib.d.ts

##Source Code

https://typescript.codeplex.com/SourceControl/network/forks/fabioparra/ExtJSEmitter

obs: Changes made only in TypeScript.Emitter class
