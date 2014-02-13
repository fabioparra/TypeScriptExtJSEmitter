declare var TypeScript : any;
 
module Ext.ts.emitter {
    
    export class CodePanel extends Ext.panel.Panel {
        xtype  = 'ts.emitter.codepanel' ;
        layout = {type : 'hbox', align : 'stretch'};
        title  : string;
        src    : string;


        initComponent() : void {
            this.tbar  = this.builTbar();
            this.items = this.buildItems();
            this.title = this.src.replace(/.*\/|\/..*$/g, ''); 

            super.initComponent();
            
        }
        //afterRender(){
        //    super.afterRender();
        //    this.load();    
        //}
        load(){
        
            Ext.Ajax.request({
                url   : this.src,
                scope : this,
                success : (response : any) => {
                    this.loadSource(response.responseText);
                }
                    
            });    
        }

        loadSource(text : string){
            var pnlSource = <Ext.form.Field>this.getComponent('pnlTypeScript');
            
            pnlSource.setValue(text);
            
            
            this.compileSource();    
        }
        compileSource(){
            var compiler      = new TypeScript.TypeScriptCompiler();
            var pnlTypeScript = <Ext.form.Field>this.getComponent('pnlTypeScript');
            var pnlJavascript = <Ext.form.Field>this.getComponent('pnlJavascript');
            var content       = pnlTypeScript.getValue();
            var output        = '';
            var current       : any;

            this.addFile(compiler, this.title, content);

            var iter = compiler.compile();
            
            while (iter.moveNext()) {
                current = iter.current().outputFiles[0];
                output += !!current ? current.text : '';
            }

            pnlJavascript.setValue(output);
        }
        addFile = function(compiler : any, fileName : string, fileContent : string){
            var snapshot = TypeScript.ScriptSnapshot.fromString(fileContent);
            compiler.addFile(fileName, snapshot);
        }
        buildItems(){
            return [{
                xtype          : 'codemirror',
                itemId         : 'pnlTypeScript',
                region         : 'west',
                flex           : 0.5,
                pathModes      : 'js/lib/codemirror/mode',
                pathExtensions : 'js/lib/codemirror/lib/util',
                mode           : 'application/typescript',
                showModes      : false,
                listeners      : {
                    scope      : this,
                    initialize : this.load
                        
                }
            },{
                xtype          : 'codemirror',
                itemId         : 'pnlJavascript',
                flex           : 0.5,
                pathModes      : 'js/lib/codemirror/mode',
                pathExtensions : 'js/lib/codemirror/lib/util',
                mode           : 'text/javascript',
                showModes      : false
            }];
        }
        builTbar(){
            return [{
                  xtype   : 'button', 
                  text    : 'Compile typescript',
                  scope   : this,
                  handler : this.compileSource

            }];
        }
    
    }
    
} 