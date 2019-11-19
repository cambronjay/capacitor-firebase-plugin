declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorFirebase: CapacitorFirebasePlugin;
  }
}

export interface CapacitorFirebasePlugin {
  /**
   * Report a Non-Fatal Crash
   * @param {NonFatalCrashOptions} options - { name: string, message: string, url: string, stackTrace: string }
   * @returns {Promise<void>} void
   */
  reportNonFatalCrash(options: NonFatalCrashOptions): Promise<void>;

}

export interface NonFatalCrashOptions {
  /**
   * The error information
   */
  name: string;
  message: string;
  url: string;
  stackTrace: string;
}