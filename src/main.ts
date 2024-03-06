// @ts-ignore
function spiderListener() {
    if (PluginAPI.player.isCollidedHorizontally) {
        PluginAPI.player.motionY += 0.2;
        PluginAPI.player.reload();
    }
}
PluginAPI.addEventListener("update", spiderListener);
