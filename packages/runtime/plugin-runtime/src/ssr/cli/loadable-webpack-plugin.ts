import path from 'path';
import { Rspack } from '@modern-js/app-tools';
import { fs } from '@modern-js/utils';

interface LoadablePluginOptions {
  filename: string;
  path?: string;
  writeToDisk?: any;
  outputAsset: boolean;
  chunkLoadingGlobal: string;
}
class LoadablePlugin {
  opts: LoadablePluginOptions;

  compiler: Rspack.Compiler | null;

  constructor(
    {
      filename = 'loadable-stats.json',
      path,
      writeToDisk,
      outputAsset = true,
      chunkLoadingGlobal = '__LOADABLE_LOADED_CHUNKS__',
    }: LoadablePluginOptions = {
      filename: 'loadable-stats.json',
      outputAsset: true,
      chunkLoadingGlobal: '__LOADABLE_LOADED_CHUNKS__',
    },
  ) {
    this.opts = {
      filename,
      path,
      writeToDisk,
      outputAsset,
      chunkLoadingGlobal,
    };

    this.compiler = null;
  }

  apply(compiler: Rspack.Compiler) {
    this.compiler = compiler;

    // compiler.options.output.chunkLoadingGlobal = this.opts.chunkLoadingGlobal;

    if (this.opts.outputAsset || this.opts.writeToDisk) {
      compiler.hooks.make.tap(LoadablePlugin.name, compilation => {
        compilation.hooks.processAssets.tap(
          {
            name: LoadablePlugin.name,
            stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
          },
          () => {
            const asset = this.handleEmit(compilation);
            if (asset) {
              compilation.emitAsset(this.opts.filename, asset as any);
            }
          },
        );
      });
    }
  }

  handleEmit(compilation: Rspack.Compilation) {
    const stats = compilation.getStats().toJson({
      all: false,
      assets: true,
      // cachedAssets: true,
      chunks: true,
      chunkGroups: true,
      entrypoints: true,
      // chunkGroupChildren: true,
      hash: true,
      ids: true,
      outputPath: true,
      publicPath: true,
    } as any);

    const output = {
      ...stats,
      generator: 'loadable-components',
      chunks: [...(stats.chunks || [])].map(chunk => {
        return {
          id: chunk.id,
          files: [...(chunk.files || [])],
        };
      }),
    };

    const result = JSON.stringify(output, null, 2);

    if (this.opts.writeToDisk) {
      this.writeAssetsFile(result);
    }
    if (this.opts.outputAsset) {
      return {
        source() {
          return result;
        },
        size() {
          return result.length;
        },
      };
    }

    return null;
  }

  writeAssetsFile(manifest: string) {
    const outputFolder = this.compiler?.options.output.path;
    const outputFile = path.resolve(outputFolder || '', this.opts.filename);

    fs.outputFileSync(outputFile, manifest);
  }
}

// eslint-disable-next-line import/no-commonjs
module.exports = LoadablePlugin;
