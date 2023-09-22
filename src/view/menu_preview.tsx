import { MenuController } from "../controller/menu_controller";
import { Menu } from "../model/menu";

export function build_menu_preview(menu: Menu) {
  const preview_div: HTMLDivElement = document.getElementById(
    "menu_preview",
  )! as HTMLDivElement;
  preview_div.innerHTML = "";

  const menu_items = menu.menu;

  for (const item of menu_items) {
    const item_div = document.createElement("div");
    item_div.classList.add("menu_item");

    const item_info = document.createElement("div");
    item_info.classList.add("menu_item_info");

    const item_name = document.createElement("h3");
    item_name.innerText = "Name: " + item.name;
    item_info.appendChild(item_name);

    const item_price = document.createElement("p");
    item_price.innerText = "Price: $" + item.price.toString();
    item_info.appendChild(item_price);

    const item_type = document.createElement("p");
    item_type.innerText = "Kind: " + item.kind;
    item_info.appendChild(item_type);

    item_div.appendChild(item_info);

    // remove item button
    const remove_button = document.createElement("button");
    remove_button.classList.add("remove");
    remove_button.innerText = "Remove";
    remove_button.addEventListener("click", () => {
      MenuController.instance.removeItem(item);
    });
    item_div.appendChild(remove_button);

    preview_div.appendChild(item_div);
  }
}
