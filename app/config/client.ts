import { BuildConfig, getBuildConfig } from "./build";

export function getClientConfig() {
  if (typeof window !== "undefined") {
    // client side - read from window object
    return (window as any).__BUILD_CONFIG__ as BuildConfig;
  }

  if (typeof process !== "undefined") {
    // server side
    return getBuildConfig();
  }
}
