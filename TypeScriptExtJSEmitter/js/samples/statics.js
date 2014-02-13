Ext.define('Ext.util.deep.Console', {
    statics : {
        log : function (msg) {
            Ext.util.deep.Console.logInternal('cool');
            this.logInternal('works?');
            this.logAny(Ext.util.deep.Console);

            this.logAny({
                foo: Ext.util.deep.Console
            });
        },
        logInternal : function (msg) {
        },
        logAny : function (msg) {
            Ext.util.deep.Console.logInternal(msg);
        },
        applyOverrides : function (target) {
            //Ext.apply(target);
        }
    }
    
});
Ext.util.deep.Console.logInternal('wath');
