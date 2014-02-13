module Ext.ts.emitter {
    
    export class App extends Ext.container.Viewport {
    
        layout = 'border';
        initComponent() : void {
            this.items = this.buildItems();
            super.initComponent();
        }

        buildItems(){
            return [{
                region: 'north',
                html: '<h1 class="x-panel-header">TypeScript ExtJS code emitter</h1>',
                border: false,
                margins: '0 0 5 0'
            },{
                region: 'center',
                xtype: 'tabpanel', // TabPanel itself has no title
                activeTab: 0,      // First tab active by default
                items: [{
                    xtype : 'ts.emitter.codepanel',
                    src   : 'js/samples/SuperClass.ts'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'js/samples/ExtendDeep.ts'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'js/samples/ExportVarNamespace.ts'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'js/samples/Statics.ts'
               },{  
                    xtype : 'ts.emitter.codepanel',
                    src   : 'js/samples/Enumerators.ts'
                }]
            }];
        }
    
    }
    
} 