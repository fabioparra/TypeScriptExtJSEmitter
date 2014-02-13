Ext.define('Ext.ts.emitter.App', {
    extend : 'Ext.container.Viewport', 
    layout : 'border',
    initComponent : function () {
        this.items = this.buildItems();
        Ext.ts.emitter.App.superclass.initComponent.call(this);
    },

    buildItems : function () {
        return [
            {
                region: 'north',
                html: '<h1 class="x-panel-header">TypeScript ExtJS code emitter</h1>',
                border: false,
                margins: '0 0 5 0'
            }, {
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: [
                    {
                        xtype: 'ts.emitter.codepanel',
                        src: 'Classes'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'ExportVarNamespace'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'Statics'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'Enumerators'
                    }]
            }];
    }
    
});
