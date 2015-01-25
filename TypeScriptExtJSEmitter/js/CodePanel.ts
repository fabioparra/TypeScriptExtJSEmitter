/// <reference path="ExtJS-4.2.0.663.d.ts"/>

declare var TypeScript : any;
declare var TypeScriptOriginal : any;
 
module Demo.ts.emitter {
    
    export class CodePanel extends Ext.panel.Panel {
        xtype  = 'ts.emitter.codepanel' ;
        layout = {type : 'hbox', align : 'stretch'};
        title  : string;
        src    : string;

        defaults = {
            xtype          : 'codemirror',
            flex           : 0.5,
            pathModes      : 'js/lib/codemirror/mode',
            pathExtensions : 'js/lib/codemirror/lib/util',
            mode           : 'application/typescript',
            showModes      : false
        };

        initComponent() : void {
            this.tbar  = this.builTbar();
            this.items = this.buildItems();
            this.title = this.src.replace(/.*\/|\/..*$/g, '');

            super.initComponent();
        }

        load(){
            var target = Ext.get(this.src);

            if(target){
                this.loadSource(target.dom.innerHTML);    
            }
                
        }

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

        loadSource(text : string){
            var pnlSource = <Ext.form.field.Base>this.getComponent('pnlTS');
            pnlSource.setValue(text);

            this.compileSources();
        }

        compileSources(){
            var pnlTS        = <Ext.form.field.Base>this.getComponent('pnlTS');
            var pnlJS        = <Ext.form.field.Base>this.getComponent('pnlJS');
            var pnlJSOrig    = <Ext.form.field.Base>this.getComponent('pnlJSOrig');
            var content      = pnlTS.getValue();
            var extjsOutput  = this.compileSource(TypeScript.TypeScriptCompiler, TypeScript, content);
            var defOutput    = this.compileSource(TypeScriptOriginal.TypeScriptCompiler, TypeScriptOriginal, content);

            pnlJS.setValue(extjsOutput); 
            pnlJSOrig.setValue(defOutput); 
        }

        compileSource(CompilerClass : any, ns : any, content : string) : string{
            var output   = '';
            var current  : any;
            var compiler : any = new CompilerClass();


            this.addFile(compiler, ns, this.title, content);

            var iter = compiler.compile();
            
            while (iter.moveNext()) {
                current = iter.current().outputFiles[0];
                output += !!current ? current.text : '';
            }

            return output;
        }

        addFile = function(compiler : any, ns : any,  fileName : string, fileContent : string){
            var snapshot = ns.ScriptSnapshot.fromString(fileContent);
            compiler.addFile(fileName, snapshot);
        };

        buildItems(){
            return [{
                itemId         : 'pnlTS',
                toolbarTitle   : 'TypeScript',
                listeners      : {
                    scope      : this,
                    initialize : this.load
                        
                }
            },{
                itemId         : 'pnlJS',
                toolbarTitle   : 'ExtJS Javascript'
            },{
                itemId         : 'pnlJSOrig',
                toolbarTitle   : 'Original Javascript'
            }];
        }

        builTbar(){
            return [{
                  xtype   : 'button', 
                  text    : 'Compile typescript',
                  scope   : this,
                  handler : this.compileSources

            }];
        }
    }
} 