const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', function(){
    mainWindow = new BrowserWindow();
    width:300;
    height:200;
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.on('closed', function(){
           mainWindow = null
       })
})
