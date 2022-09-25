export const getEnumValueByKey = (sourceEnum: any, key: string)  => Object.values(sourceEnum)[Object.keys(sourceEnum).indexOf(key)] as string;
