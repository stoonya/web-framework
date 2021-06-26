import { Model } from "../Models/Model";

export abstract class View<T extends Model<K>, K> {

  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  // the reason of not making this method as abstract is we can have Views that do not require events
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel = (): void => {
    this.model.on('change', () => {
      this.render();
    })
  }

  bindEvents = (fragment: DocumentFragment): void => {

    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(item => {
        item.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  mapRegions = (fragment: DocumentFragment): void => {

    const regionsMap = this.regionsMap();

    for (let regionKey in regionsMap) {
      const element = fragment.querySelector(regionsMap[regionKey]);

      if (element) {
        this.regions[regionKey] = element;
      }
    }
  }

  onRender = (): void => { }

  render = (): void => {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
