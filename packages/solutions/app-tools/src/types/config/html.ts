import type { BuilderConfig } from '@modern-js/builder-webpack-provider';
import type { BuilderConfig as RsBuilderConfig } from '@modern-js/builder-rspack-provider';

export type { SharedHtmlConfig } from '@modern-js/builder-shared';
export type HtmlUserConfig = Required<BuilderConfig>['html'];
export type RsHtmlUserConfig = Required<RsBuilderConfig>['html'];
