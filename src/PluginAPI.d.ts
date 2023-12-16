declare namespace PluginAPI {
    namespace events {
        let types: string[];
        namespace listeners {
            let event: any[];
        }
        function newEvent(name: string): void;
        function callEvent(name: string, data: any): void;
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
        function isImmuneToExplosions(): boolean;
        function isImmuneToFire(): boolean;
        function isInLava(): boolean;
        function isInWater(): boolean;
        function isInvisible(): boolean;
        function isPushedByWater(): boolean;
        function isRiding(): boolean;
        function isSilent(): boolean;
        function isSneaking(): boolean;
        function isSprinting(): boolean;
        function isWet(): boolean;
        function setBeenAttacked(): void;
        function setDead(): void;
        function setInWeb(): void;
        function setOnFireFromLava(): void;
        function getUUID(): string;
        function getAir(): integer;
        function getAlwaysRenderNameTag(): boolean;
        function getAlwaysRenderNameTagForRender(): boolean;
        function getBrightness(json: any): integer;
        function getBrightnessForRender(json: any): integer;
        function reload(): void;
        function getCollisionBorderSize(): integer;
        let x: integer;
        let y: integer;
        let z: integer;
        let motionX: integer;
        let motionY: integer;
        let motionZ: integer;
        let isInWeb: boolean;
        let onGround: boolean;
    }
    let version: string;
    let clientBrand: string;
    function addEventListener(name: string, callback: any): void;
    function removeEventListener(name: string, func: any, slow: any): void;
    function updateComponent(component: string): void;
    function require(component: string): void;
    function update(): void;
    function clickMouse(): void;
    function rightClickMouse(): void;
    
}
