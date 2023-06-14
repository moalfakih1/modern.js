const DEFINE_CONFIG: unique symbol = Symbol('DEFINE_CONFIG_TYPES');

export interface Plugin {
  setup: () => void;
}

export interface ToolsPlugin<T> extends Plugin {
  [DEFINE_CONFIG]?: T;
}

export type Config<T> = T & {
  plugins: [...Plugin[], ...[ToolsPlugin<T>, ...Plugin[]]];
};

export const defineConfig = <T extends Record<string, any>>(
  config: Config<T>,
) => config;
