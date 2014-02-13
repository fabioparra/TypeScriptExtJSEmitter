
declare module Ext {
    
     class Base {
    
            
    }
    export class AbstractComponent extends Base {
    
            
    }
    export class Component extends Base {
    
        initComponent() : void;
        afterRender() : void;
    }
    export var Ajax : Ext.data.Connection;
}

declare module Ext.data{
    export class Connection {
        request(config : any) : any;
            
    }
    
}

declare module Ext.container{
    
    export class AbstractContainer extends Component {
        items : any;
        tbar  : any;

        getComponent(itemId : string) : Component;
            
    }
    export class Container extends AbstractContainer {
    
            
    }
    
    export class Viewport extends Container {
    
            
    }
    
}

declare module Ext.form {
    export class Field extends Ext.Component {
        getValue() : any;
        setValue(value : any) : any;
            
    }
    
}

declare module Ext.panel {

    export class AbstractPanel extends container.Container {
        
            
    }
    export class Panel extends AbstractPanel {
    
            
    }
}