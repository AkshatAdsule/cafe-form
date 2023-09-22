import { Item } from "../model/item";
import { Menu } from "../model/menu";
import { ChangeNotifier } from "../util/change_notifier";

export class MenuController extends ChangeNotifier<Menu> {
  private static _instance?: MenuController;

  private constructor() {
    super();
  }

  public static get instance(): MenuController {
    if (!MenuController._instance) {
      MenuController._instance = new MenuController();
    }

    return MenuController._instance;
  }

  private menu: Menu = {
    menu: [],
  };

  public addItem(item: Item): void {
    this.menu.menu.push(item);
    this.notifyListeners(this.menu);
  }

  public removeItem(item: Item): void {
    this.menu.menu = this.menu.menu.filter((i) => i !== item);
    this.notifyListeners(this.menu);
  }

  public getMenu(): Menu {
    return this.menu;
  }

  public clearMenu(): void {
    this.menu.menu = [];
    this.notifyListeners(this.menu);
  }
}
