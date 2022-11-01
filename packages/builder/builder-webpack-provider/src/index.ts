export { builderWebpackProvider } from './provider';
export {
  applyBasicPlugins,
  applyDefaultPlugins,
  applyMinimalPlugins,
} from './shared/plugin';
export type {
  BuilderPluginAPI,

  // Config Types
  DevConfig,
  HtmlConfig,
  OutputConfig,
  SourceConfig,
  BuilderConfig,
  SecurityConfig,
  PerformanceConfig,
  ExperimentsConfig,

  // Third Party Types
  webpack,
  WebpackChain,
  WebpackConfig,
  CSSLoaderOptions,
  CssExtractOptions,
  LessLoaderOptions,
  SassLoaderOptions,
  HTMLPluginOptions,
  StyleLoaderOptions,
  AutoprefixerOptions,
  TerserPluginOptions,
  PostCSSLoaderOptions,
} from './types';
