import Electron = require('electron');
import path = require('path');
import url = require('url');

require('electron-debug')({showDevTools: true});

const { app, BrowserWindow } = Electron;

let mainWindow: Electron.BrowserWindow | null = null;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../ui/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});
