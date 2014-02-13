Ext.ns('Ext.direct').moduleVar = "this is a module var, not a function var";

Ext.define('Ext.direct.RemotingProvider', {
    //local variable in constructor
    constructor : function () {
        var i = 0;
        var requests = [];

        for (i; i < requests.length; i++) {
            this.doSomething(i);
        }
    },
    emitModuleVar : function () {
        // var mvar = Automidia.direct.moduleVar;
        var mvar = Ext.direct.moduleVar;
    },

    emitLocalVar : function () {
        var ns = this.getNamespace();
        var actionName;
        ns[actionName] = "";
        return "";
    },
    emitThisCall : function () {
        var x = this.emitLocalVar();
    },
    emitContextClassCall : function () {
        Ext.direct.RemotingProvider.prototype.emitThisCall.call(this);
    },
    getNamespace : function () {
        return "";
    },
    doSomething : function (value) {
    }
    
});
