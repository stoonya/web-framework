import { Collection } from "../Models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public collection: Collection<T, K>, public parentElement: Element) {}

  abstract renderItem(model: T, itemParent: Element): void;
  
  render = (): void => {
    this.parentElement.innerHTML = '';
    
    const templateElement = document.createElement('template');

    this.collection.models.forEach((model:T) => {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    });

    this.parentElement.append(templateElement.content);
  }
}