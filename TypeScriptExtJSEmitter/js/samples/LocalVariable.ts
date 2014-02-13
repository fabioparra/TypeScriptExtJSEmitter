
module Ext.direct {
   export var moduleVar = "this is a module var, not a function var";

   export class RemotingProvider  {
        //local variable in constructor
        constructor(){
           
           var i=0;
           var requests = <string[]>[];

            for(i; i < requests.length; i++){
                this.doSomething(i);
            }
        } 

        emitModuleVar(){
            // var mvar = Automidia.direct.moduleVar; 
            var mvar = moduleVar; 
        }

        emitLocalVar() : string {
            var ns = this.getNamespace()
            var actionName : any;
            ns[actionName] = "";
            return "";
        }
        emitThisCall(){
            var x = this.emitLocalVar();
        }
        emitContextClassCall(){
            RemotingProvider.prototype.emitThisCall.call(this);
        }
        getNamespace() {
            return "";
        }
        doSomething(value : any){
            
        }
  }
} 