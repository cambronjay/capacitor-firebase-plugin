import { WebPlugin } from '@capacitor/core';
import { CapacitorFirebasePlugin } from './definitions';

export class CapacitorFirebaseWeb extends WebPlugin implements CapacitorFirebasePlugin {
  constructor() {
    super({
      name: 'CapacitorFirebase',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorFirebase = new CapacitorFirebaseWeb();

export { CapacitorFirebase };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorFirebase);
