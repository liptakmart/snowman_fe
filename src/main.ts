import { Person } from './person';

// Add an event listener to run the function when the page has fully loaded
window.addEventListener('load', main);

// Main function executed when the page is loaded
function main() {
    setupRouting();
    navigate(window.location.pathname); // Initialize the current route
}

function setupRouting() {
    document.getElementById('home-link')?.addEventListener('click', (event) => navigateTo(event, '/'));
    document.getElementById('game-link')?.addEventListener('click', (event) => navigateTo(event, '/game'));

    window.addEventListener('popstate', () => navigate(window.location.pathname));
}

// Function to handle navigation
function navigateTo(event: Event, path: string) {
    event.preventDefault();
    history.pushState({}, '', path);
    navigate(path);
}

// Function to render the appropriate content based on the current route
async function navigate(path: string) {
    const appDiv = document.getElementById('app');
    if (!appDiv) return;

    let htmlModule;
    let cssModule;
    let tsModule;

    switch (path) {
        case '/':
            htmlModule = await import('./pages/home/home.html');
            cssModule = await import('./pages/home/home.css');
            tsModule = await import('./pages/home/home');
            break;
        case '/game':
            htmlModule = await import('./pages/game/game.html');
            cssModule = await import('./pages/game/game.css');
            tsModule = await import('./pages/game/game');
            break;
        default:
            appDiv.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
            return;
    }

    // Load HTML
    appDiv.innerHTML = htmlModule.default;

    // The CSS is automatically injected by Webpack, so no additional code is needed

    // Execute the page-specific TypeScript code
    if (tsModule && tsModule.default) {
        tsModule.default();
    }
}
