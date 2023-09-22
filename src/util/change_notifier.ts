export type Listener<T> = (value: T) => void;

export abstract class ChangeNotifier<T> {
  private listeners: Listener<T>[] = [];

  public addListener(listener: Listener<T>): void {
    this.listeners.push(listener);
  }

  public removeListener(listener: Listener<T>): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  protected notifyListeners(value: T): void {
    this.listeners.forEach((listener) => listener(value));
  }
}
