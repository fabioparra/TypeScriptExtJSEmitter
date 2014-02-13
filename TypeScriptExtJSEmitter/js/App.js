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
                        src: 'js/samples/SuperClass.ts'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'js/samples/ExtendDeep.ts'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'js/samples/ExportVarNamespace.ts'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'js/samples/Statics.ts'
                    }, {
                        xtype: 'ts.emitter.codepanel',
                        src: 'js/samples/Enumerators.ts'
                    }]
            }];
    }
    
});
