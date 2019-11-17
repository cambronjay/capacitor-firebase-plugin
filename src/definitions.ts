declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorFirebase: CapacitorFirebasePlugin;
  }
}

export interface CapacitorFirebasePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
