Ext.define('Ext.sp.BaseCls', {
    constructor : function (config) {
    },
    setSomething : function (config) {
    }
    
});

Ext.define('Ext.sp.ImplementedCls', {
    extend : 'Ext.sp.BaseCls', 
    constructor : function (config) {
        Ext.sp.ImplementedCls.superclass.constructor.call(this, config);
    },
    setSomething : function (config) {
        Ext.sp.ImplementedCls.superclass.setSomething.call(this, config);
    }
    
});
