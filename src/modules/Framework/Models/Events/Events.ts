export type CallBack = () => void;

export interface Events {
  on(eventName: string, callback: CallBack): void;
  trigger(eventName:string): void;
}