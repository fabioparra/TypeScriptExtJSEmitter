/// <reference path="ExtJS-4.2.0.663.d.ts"/>
/// <reference path="CodePanel.ts"/>

module Demo.ts.emitter {
    
    export class App extends Ext.container.Viewport {
    
        layout = 'border';

        initComponent() : void {
            this.items = this.buildItems();
            super.initComponent();
        }

        buildItems(){
            return [{
                region: 'north',
                cls : 'app-header',
                html: '<h1 class="app-header-title">TypeScript ExtJS code emitter</h1>',
                border: false,
                margins: '0 0 5 0'
            },{
                region: 'center',
                xtype: 'tabpanel', // TabPanel itself has no title
                activeTab: 0,      // First tab active by default
                items: [{
                    xtype : 'ts.emitter.codepanel',
                    src   : 'Classes'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'ExportVarNamespace'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'Statics'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'Enums'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'Javascript'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'Generics'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'SimpleInheritance'
                }]
            }];
        }
    
    }
    
} 