import type { BuilderConfig } from '@modern-js/builder-webpack-provider';
import type { BuilderConfig as RsBuilderConfig } from '@modern-js/builder-rspack-provider';
import type { SharedOutputConfig as BuilderSharedOutputConfig } from '@modern-js/builder-shared';
import type { SSGConfig } from '@modern-js/types';

export type BuilderOutputConfig = Required<BuilderConfig>['output'];
export type RsBuilderOutputConfig = Required<RsBuilderConfig>['output'];

export interface SharedOutputConfig extends BuilderSharedOutputConfig {
  ssg?: SSGConfig;
  splitRouteChunks?: boolean;
  disableNodePolyfill?: boolean;
  tempDir?: string;
}

export interface OutputUserConfig
  extends BuilderOutputConfig,
    SharedOutputConfig {}

export interface RsOutputUserConfig
  extends RsBuilderOutputConfig,
    SharedOutputConfig {}

export type {
  SSGRouteOptions,
  SSGSingleEntryOptions,
  SSGMultiEntryOptions,
  SSGConfig,
} from '@modern-js/types';
