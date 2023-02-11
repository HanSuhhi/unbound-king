export const defineAuthKey = (module: string, page: string) => (func: string) => `${module}-${page}_${func}`;
