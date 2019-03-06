import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getFileSubmenu() {

    return [
      { role: 'quit' }
    ]
  }

  getEditSubmenu() {

    return [
      { role: 'undo' },
      { role: 'redo' },
      // { type: 'seprator' }, // seperator
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  }

  getViewSubmenu() {
    
    return [
      // { role: 'reload' }, // reloads the app
      // { role: 'forcereload' },
      { role: 'toggledevtools' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { role: 'togglefullscreen' }
    ]
  }

  getWindowSubmenu() {
    
    return [
      { role: 'minimize' },
      { role: 'zoom' },
      { role: 'close' }
    ]
  }

  getHelpSubmenu() {
    
    return [
      {
        label: 'Learn More',
        click () { this.shell.openExternalSync('https://electronjs.org') }
      }
    ]
  }

  getMasterSubmenu() {

    return [
      {
        label: 'Masters',
        click() {
          alert('Alert masters is clicked');
        }
      },
      // { type: 'seprator' },
      {
        label: 'Test Master',
        click() {
          alert('Alert test master is clicked2');
        }
      }
    ]
  }

  getReportSubmenu() {

    return [
      {
        label: 'Reports',
        click() {
          alert('Alert report is clicked');
        }
      },
      // { type: 'seprator' },
      {
        label: 'Test Report Master',
        click() {
          alert('Alert test Report master is clicked2');
        }
      }
    ]
  }

  getMenuTemplate() {

    return [
      { label: 'File', submenu: this.getFileSubmenu() },
      { label: 'Edit', submenu: this.getEditSubmenu() },
      { label: 'View', submenu: this.getViewSubmenu() },
      { label: 'Window', submenu: this.getWindowSubmenu() },
      { role: 'help', submenu: this.getHelpSubmenu() },
      { label: 'test', submenu: this.getMasterSubmenu() },
      { label: 'Reports', submenu: this.getReportSubmenu() }
    ]
  }
}
