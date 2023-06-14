import type { BuilderConfig } from '@modern-js/builder-webpack-provider';
import type { BuilderConfig as RsBuilderConfig } from '@modern-js/builder-rspack-provider';

export type BuilderSecurityConfig = Required<BuilderConfig>['security'];

export type RsSecurityConfig = Required<RsBuilderConfig>['security'];

export type SecurityUserConfig = BuilderSecurityConfig;
