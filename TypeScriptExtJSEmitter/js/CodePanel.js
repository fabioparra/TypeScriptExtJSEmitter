Ext.define('Ext.ts.emitter.CodePanel', {
    extend : 'Ext.panel.Panel', 
    xtype : 'ts.emitter.codepanel',
    layout : { type: 'hbox', align: 'stretch' },
    initComponent : function () {
        this.tbar = this.builTbar();
        this.items = this.buildItems();
        this.title = this.src.replace(/.*\/|\/..*$/g, '');

        Ext.ts.emitter.CodePanel.superclass.initComponent.call(this);
    },

    //afterRender(){
    //    super.afterRender();
    //    this.load();
    //}
    load : function () {
        var _this = this;
        Ext.Ajax.request({
            url: this.src,
            scope: this,
            success: function (response) {
                _this.loadSource(response.responseText);
            }
        });
    },

    loadSource : function (text) {
        var pnlSource = this.getComponent('pnlTypeScript');

        pnlSource.setValue(text);

        this.compileSource();
    },
    compileSource : function () {
        var compiler = new TypeScript.TypeScriptCompiler();
        var pnlTypeScript = this.getComponent('pnlTypeScript');
        var pnlJavascript = this.getComponent('pnlJavascript');
        var content = pnlTypeScript.getValue();
        var output = '';
        var current;

        this.addFile(compiler, this.title, content);

        var iter = compiler.compile();

        while (iter.moveNext()) {
            current = iter.current().outputFiles[0];
            output += !!current ? current.text : '';
        }

        pnlJavascript.setValue(output);
    },
    addFile : function (compiler, fileName, fileContent) {
        var snapshot = TypeScript.ScriptSnapshot.fromString(fileContent);
        compiler.addFile(fileName, snapshot);
    },

    buildItems : function () {
        return [
            {
                xtype: 'codemirror',
                itemId: 'pnlTypeScript',
                region: 'west',
                flex: 0.5,
                pathModes: 'js/lib/codemirror/mode',
                pathExtensions: 'js/lib/codemirror/lib/util',
                mode: 'application/typescript',
                showModes: false,
                listeners: {
                    scope: this,
                    initialize: this.load
                }
            }, {
                xtype: 'codemirror',
                itemId: 'pnlJavascript',
                flex: 0.5,
                pathModes: 'js/lib/codemirror/mode',
                pathExtensions: 'js/lib/codemirror/lib/util',
                mode: 'text/javascript',
                showModes: false
            }];
    },
    builTbar : function () {
        return [{
                xtype: 'button',
                text: 'Compile typescript',
                scope: this,
                handler: this.compileSource
            }];
    }
    
});
