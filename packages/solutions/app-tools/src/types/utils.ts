export type Bundler = 'rspack' | 'webpack' | 'shared';

export type FromConfig<
  B extends Bundler,
  Config extends Record<'rspack' | 'webpack' | 'shared', unknown>,
> = Config[B];
