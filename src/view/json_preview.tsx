import { MenuController } from "../controller/menu_controller";
import { Menu } from "../model/menu";

export function build_json_preview(menu: Menu) {
  const menu_json = JSON.stringify(menu, null, 4);
  const menu_json_preview: HTMLElement = document.getElementById(
    "menu_json_content",
  )! as HTMLElement;

  menu_json_preview.innerText = menu_json;
}

// trigger build_json_preview on page load
window.addEventListener("load", () => {
  build_json_preview(MenuController.instance.getMenu());
});
