const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready',function(){
    
    mainWindow=new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    Menu.setApplicationMenu(mainMenu)

});

const mainMenuTemplate = [
    {
        label: 'Option',
        submenu:[
            {
                label: 'Change Password'
            },
            {
                label: 'Forgot Password'
            }, { type: 'separator' },
            {
                label: 'About'
            }, { type: 'separator' },
            {
                label: 'Quit',
                click() {
                    app.quit();
                }
            }
        ]
    }
]