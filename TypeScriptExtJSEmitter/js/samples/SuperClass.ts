module Ext.sp {
  export class BaseCls {
     constructor(config : any){
                
     }

     setSomething(config : any){
     
     }
  }
}

module Ext.sp {
  export class ImplementedCls extends sp.BaseCls  {
        constructor(config : any){
            super(config);
        }
        setSomething(config : any){
            super.setSomething(config);
        }
  }
}