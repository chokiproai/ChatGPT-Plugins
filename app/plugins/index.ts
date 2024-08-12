import { Plugin } from "../store/plugin";
import { EN_PLUGINS } from "./en";
import { VI_PLUGINS } from "./vi";

import { type BuiltinPlugin } from "./typing";
export { type BuiltinPlugin } from "./typing";

export const BUILTIN_PLUGIN_ID = 100000;

export const BUILTIN_PLUGIN_STORE = {
  buildinId: BUILTIN_PLUGIN_ID,
  plugins: {} as Record<string, BuiltinPlugin>,
  get(id?: string) {
    if (!id) return undefined;
    return this.plugins[id] as Plugin | undefined;
  },
  add(m: BuiltinPlugin) {
    const plugin = { ...m, id: this.buildinId++, builtin: true };
    this.plugins[plugin.id] = plugin;
    return plugin;
  },
};

export const BUILTIN_PLUGINS: BuiltinPlugin[] = [
  ...EN_PLUGINS,
  ...VI_PLUGINS,
].map((m) => BUILTIN_PLUGIN_STORE.add(m));
