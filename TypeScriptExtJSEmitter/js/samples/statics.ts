
module Ext {
  export  module util.deep {
      export class Console {
 
          static log(msg : string){
          
               Console.logInternal('cool');  
		       this.logInternal('works?');  
              this.logAny(Console);

              this.logAny({
                 foo : Console
              });
          }
		  static logInternal(msg : string){
          
          }
          static logAny(msg : any){
             Console.logInternal(msg);
          }
          static applyOverrides(target : any){
            //Ext.apply(target);
        }
            
      }
	  Console.logInternal('wath');      

        
    }
    
    
}