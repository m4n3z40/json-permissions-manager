import * as Electron from 'electron';
import { join } from 'path';
import { format } from 'url';
require('electron-debug')({showDevTools: true});

const electronConnect = require('electron-connect');
const { app, BrowserWindow } = Electron;
let mainWindow: Electron.BrowserWindow | null = null;
let reloadServer: any = null;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    mainWindow.loadURL(format({
        pathname: join(__dirname, '../ui/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => { mainWindow = null; });

    reloadServer = electronConnect.client.create(mainWindow);
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
