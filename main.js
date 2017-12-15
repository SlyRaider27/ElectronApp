const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain;
var jreq = require('json-file');
var filesys = require('fs');
const Menu = electron.Menu;

app.on('ready', function () {
    mainWindow = new BrowserWindow();
    width: 300;
    height: 200;
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.on('closed', function () {
        mainWindow = null
    });
});

ipc.on('open', (event, filePath) => {
    var readFile = jreq.read(filePath);
    var jObject = readFile.get("items");
    event.sender.send("openRen", jObject);
});

const menuTemp = [{
    label: "Open File",
    click: () => { mainWindow.webContents.send('modal-open') }
},
{
    label: "Dev Tool",
    click: () => {mainWindow.toggleDevTools() }
},
{   label: "Add Task",
    click: () => {mainWindow.webContents.send('modal-addTask')}
},
{
    label: "Delete Items",
    click: () => {mainWindow.webContents.send('modal-deleteAll')}
},
{
    label: "Close",
    click: () => {mainWindow.close()}
}];
const menu = Menu.buildFromTemplate(menuTemp);
Menu.setApplicationMenu(menu);