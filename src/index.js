"use strict";
const electron = require('electron');
//require('electron-debug')({showDevTools: true});
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, mainWindow3D;

function createWindow() {

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  const {ipcMain} = require('electron');

  ipcMain.on('asynchronous-message', function (event, arg) {
    mainWindow3D = new BrowserWindow({ width: 750, height: 550 });
    mainWindow3D.loadURL(`file://${__dirname}/webgl.html`);
    //mainWindow3D.webContents.openDevTools()
  });

  ipcMain.on('asynchronous-message-ping', function (event, arg) {
    mainWindow3D.webContents.send('asynchronous-parent-message', arg);
  });

  ipcMain.on('asynchronous-message-write-orders', function (event, arg) {
    mainWindow.webContents.send('asynchronous-reply', arg);
  });

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    mainWindow3D = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.