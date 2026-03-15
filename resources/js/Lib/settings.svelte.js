// Using an object is the best practice for shared state in Svelte 5
export const appSettings = $state({
    theme: 'light',
    sidebarOpen: true,
    userNickname: 'Guest'
});

// You can also export functions to modify the state
export function toggleTheme() {
    appSettings.theme = appSettings.theme === 'light' ? 'dark' : 'light';
}