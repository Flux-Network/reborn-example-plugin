declare namespace PluginAPI {
    namespace events {
        let types: string[];
        namespace listeners {
            let event: any[];
        }
        function newEvent(name: any): void;
        function callEvent(name: any, data: any): void;
    }
    namespace globals {
        function _initUpdate(): void;
    }
    namespace player {
        function isBurning(): boolean;
        function isPushedByWater(): boolean;
        function isEating(): boolean;
        function isEntityAlive(): boolean;
        function isEntityInsideOpaqueBlock(): boolean;
        function isEating(): boolean;
      
    }
    let version: any;
    function addEventListener(name: string, callback: any): void;
    function removeEventListener(name: string, func: any, slow: any): void;
    function updateComponent(component: string): void;
    function require(component: string): void;
    
}
