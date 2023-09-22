import "./style.css";
import { onFormSubmit } from "./controller/item_form";
import { MenuController } from "./controller/menu_controller";
import { build_menu_preview } from "./view/menu_preview";
import { build_json_preview } from "./view/json_preview";

// setup form submit handler
const form: HTMLFormElement = document.getElementById(
  "item_input_form",
)! as HTMLFormElement;
form.onsubmit = onFormSubmit;

document.getElementById("clear_button")!.onclick = () => {
  MenuController.instance.clearMenu();
};

MenuController.instance.addListener(build_menu_preview);
MenuController.instance.addListener(build_json_preview);
