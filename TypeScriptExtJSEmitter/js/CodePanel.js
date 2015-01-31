/// <reference path="ExtJS-4.2.0.663.d.ts"/>

Ext.define('Demo.ts.emitter.CodePanel', {
    extend : 'Ext.panel.Panel', 
    xtype : 'ts.emitter.codepanel',
    layout : { type: 'hbox', align: 'stretch' },
    defaults : {
        xtype: 'codemirror',
        flex: 0.5,
        pathModes: 'js/lib/codemirror/mode',
        pathExtensions: 'js/lib/codemirror/lib/util',
        mode: 'application/typescript',
        showModes: false
    },
    initComponent : function () {
        this.tbar = this.builTbar();
        this.items = this.buildItems();
        this.title = this.src.replace(/.*\/|\/..*$/g, '');

        Demo.ts.emitter.CodePanel.superclass.initComponent.call(this);
    },

    load : function () {
        var target = Ext.get(this.src);

        if (target) {
            this.loadSource(target.dom.innerHTML);
        }
    },

    //github demo problems...
    //load(){
    //    Ext.Ajax.request({
    //        url   : this.src,
    //        scope : this,
    //        success : (response : any) => {
    //            this.loadSource(response.responseText);
    //        }
    //    });
    //}
    loadSource : function (text) {
        var pnlSource = this.getComponent('pnlTS');
        pnlSource.setValue(text);

        this.compileSources();
    },

    compileSources : function () {
        var pnlTS = this.getComponent('pnlTS');
        var pnlJS = this.getComponent('pnlJS');
        var pnlJSOrig = this.getComponent('pnlJSOrig');
        var content = pnlTS.getValue();
        var extjsOutput = this.compileSource(TypeScript.TypeScriptCompiler, TypeScript, content);
        var defOutput = this.compileSource(TypeScriptOriginal.TypeScriptCompiler, TypeScriptOriginal, content);

        pnlJS.setValue(extjsOutput);
        pnlJSOrig.setValue(defOutput);
    },

    compileSource : function (CompilerClass, ns, content) {
        var output = '';
        var current;
        var compiler = new CompilerClass();

        this.addFile(compiler, ns, this.title, content);

        var iter = compiler.compile();

        while (iter.moveNext()) {
            current = iter.current().outputFiles[0];
            output += !!current ? current.text : '';
        }

        return output;
    },
    addFile : function (compiler, ns, fileName, fileContent) {
        var snapshot = ns.ScriptSnapshot.fromString(fileContent);
        compiler.addFile(fileName, snapshot);
    },

    buildItems : function () {
        return [
            {
                itemId: 'pnlTS',
                toolbarTitle: 'TypeScript',
                listeners: {
                    scope: this,
                    initialize: this.load
                }
            }, {
                itemId: 'pnlJS',
                toolbarTitle: 'ExtJS Javascript'
            }, {
                itemId: 'pnlJSOrig',
                toolbarTitle: 'Original Javascript'
            }];
    },

    builTbar : function () {
        return [{
                xtype: 'button',
                text: 'Compile typescript',
                scope: this,
                handler: this.compileSources
            }];
    }
    
});
