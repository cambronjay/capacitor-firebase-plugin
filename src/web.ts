import { WebPlugin } from '@capacitor/core';
import { CapacitorFirebasePlugin, NonFatalCrashOptions } from './definitions';

export class CapacitorFirebaseWeb extends WebPlugin implements CapacitorFirebasePlugin {
  constructor() {
    super({
      name: 'CapacitorFirebase',
      platforms: ['web']
    });
  }

  async reportNonFatalCrash(options: NonFatalCrashOptions): Promise<void> {
    return Promise.resolve();
  }

}

const CapacitorFirebase = new CapacitorFirebaseWeb();

export { CapacitorFirebase };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorFirebase);
