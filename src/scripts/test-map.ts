/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Initialize test map
WA.onInit().then(() => {
    console.log('Test map with default tileset loaded');
    
    // Initialize the scripting API extra features
    bootstrapExtra();
    
    // Set spawn point in center of room
    WA.player.moveTo(320, 240);
    
    // Welcome message
    WA.chat.sendChatMessage('🎯 Welcome to the test map! This uses default tilesets.', 'System');
});

// Add interactive center area
WA.room.area.onEnter('center').subscribe(() => {
    WA.ui.displayActionMessage({
        message: "You're in the center! Press SPACE",
        callback: () => {
            WA.chat.sendChatMessage('✅ Default tileset test successful!', 'Test');
        }
    });
});

WA.room.area.onLeave('center').subscribe(() => {
    // Remove action message when leaving the area
    WA.ui.displayActionMessage({
        message: "",
        callback: () => {}
    });
});

// Export to make this a module
export {};