export { default } from './plugin';
export { useModuleApps, useModuleApp } from './useModuleApps';
export type { Manifest, ModuleInfo, Config } from './useModuleApps';
export { default as Garfish, default as garfish } from 'garfish';
// @ts-expect-error
export { injectIntoGlobalHook } from 'react-refresh';
