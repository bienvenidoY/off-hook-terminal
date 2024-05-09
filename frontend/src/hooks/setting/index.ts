import type { GlobConfig } from '#/config';
export const useGlobSetting = (): Readonly<GlobConfig> => {
  const ENV = import.meta.env.DEV
  const { VITE_GLOB_APP_TITLE } = ENV;

  // Take global configuration
  const glob = {
    title: VITE_GLOB_APP_TITLE,
  };
  return glob;
  return glob as Readonly<GlobConfig>;
};
