import { Injectable } from '@angular/core';

export interface MenuItem {
    text: string,
    icon: string,
    route: string
}

@Injectable()
export class MenuService {

    items: Array<MenuItem>;
    isVertical = false;
    showingLeftSideMenu = false;
    isLoggedIn = false;

    toggleLeftSideMenu() : void {
        this.isVertical = true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    }

    toggleMenuOrientation() {
        this.isVertical = !this.isVertical;
    }
}