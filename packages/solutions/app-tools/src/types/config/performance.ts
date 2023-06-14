import type { BuilderConfig } from '@modern-js/builder-webpack-provider';
import type { BuilderConfig as RsBuilderConfig } from '@modern-js/builder-rspack-provider';

export type { SharedPerformanceConfig } from '@modern-js/builder-shared';

export type BuilderPerformanceConfig = Required<BuilderConfig>['performance'];
export type RsPerformanceConfig = Required<RsBuilderConfig>['performance'];

export type PerformanceUserConfig = BuilderPerformanceConfig;
