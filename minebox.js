const { app, BrowserWindow, ipcMain } = require('electron');
require('@electron/remote/main').initialize();
const fs = require('fs');
const { config } = require('process');
const path = require('path');
const unhandled = require('electron-unhandled');

unhandled();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    frame: false,
    show: false,
    transparent: true,
    webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        contextIsolation: false,
        devTools: true,
        sandbox: false
    }
  })


  mainWindow.loadFile('./CLIENT/HTML/load.html')
  require("@electron/remote/main").enable(mainWindow.webContents);
  mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', function (){
    mainWindow.show();
});

}



if (!fs.existsSync('./MBConfig')){
  fs.mkdirSync('./MBConfig');
};

app.whenReady().then(() => {

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
