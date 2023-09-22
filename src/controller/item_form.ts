import { Item } from "../model/item";
import { MenuController } from "./menu_controller";

export function onFormSubmit(event: SubmitEvent) {
  event.preventDefault();
  console.log(event);
  const formData = new FormData(event.target as HTMLFormElement);
  const name = formData.get("item_name") as string;
  const price = formData.get("item_price") as string;
  const type = formData.get("item_type") as "food" | "drink" | "other";

  const item: Item = { name, price: parseFloat(price), kind: type };
  console.log(item);

  MenuController.instance.addItem(item);
}
