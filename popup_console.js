
'use strict';

export default class PopupConsole {

  constructor(config) {
    this.config = config;
    console.log("config", config);
  }

  toggle() {
    if (this.isVisible())   this.hide();
    else                    this.show();
  }

  isVisible() {
    return $('#pcon-window').length > 0;
  }

  hide() {
    console.log("Hiding");
    $('#pcon-window').remove();
  }

  show() {
    console.log("Showing");
    const conWindow = this.createWindow();
    $(document.body).append(conWindow);
  }

  createWindow() {
    const conWindow = $('<div id="pcon-window">');
    const conBackground = $('<div id="pcon-background">');
    const conConsole = $('<div id="pcon-console">');
    const conHistory = $('<div id="pcon-history">');
    const conInput = $('<div id="pcon-input">');

    conConsole.append(conHistory);
    conConsole.append(conInput);

    conWindow.append(conBackground);
    conWindow.append(conConsole);

    $(document.body).append(conWindow);

    conBackground.click(this.hide);
  }
}
