import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private callbacks: CallbackList[] = [];

  constructor() { }

  addCallback(key: string, callback: Function) {
    if (!key || !callback) {
      return;
    }
    let keyCallbacks = this.getCallback(key);
    if (!keyCallbacks) {
      keyCallbacks = { key: key, callbacks: [] };
      this.callbacks.push(keyCallbacks);
    }
    keyCallbacks.callbacks.push(callback);
  }

  callback(key: string) {
    if (!key) {
      return;
    }
    let keyCallbacks = this.getCallback(key);
    if (!keyCallbacks) {
      return;
    }
    for (let func of keyCallbacks.callbacks) {
      try {
        func();
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  private getCallback(key: string): CallbackList | undefined {
    if (!key) {
      return;
    }
    return this.callbacks.find(value => value.key === key);
  }
}  

interface CallbackList {
  key: string;
  callbacks: Function[];
}