import * as fs from 'fs';
import { config as dotenvConfig } from 'dotenv';

export const parseNumber = (value, defaultValue = 0) => {
  value = parseInt(value, 10);
  return Number.isNaN(value) || value < 0 ? defaultValue : value;
};

export const loadEnv = async () => {
  try {
    const fileEnv = `${process.env.NODE_ENV}.env`;
    if (process.env.NODE_ENV && (await fs.existsSync(fileEnv))) {
      dotenvConfig({ path: `.env.${fileEnv}` });
    } else dotenvConfig({ path: `.env` });
    console.log('load env  successfully12');
  } catch (error) {
    console.log(
      'load env error, make create .env.local for local and .env for other',
      error,
    );
  }
};

export const LeftPadWithZeros = (number: number, length: number) => {
  let str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }

  return str;
};

export type PathsType<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${PathsType<T[K]>}`}`;
    }[keyof T]
  : never;

export type LeavesType<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${LeavesType<T[K]> extends never ? '' : `.${LeavesType<T[K]>}`}`;
    }[keyof T]
  : never;

declare global {
  interface String {
    ignoreCase(): string;
    includesIgnoreCase(target: string): boolean;
  }
}
String.prototype.ignoreCase = function () {
  return this?.trim()?.toLocaleLowerCase();
};
String.prototype.includesIgnoreCase = function (target: string) {
  return this?.trim().toLocaleLowerCase().includes(target.ignoreCase());
};

export const replaceToken = (template: string, tokens: Map<string, any>) => {
  tokens?.forEach((value, key) => {
    template = template?.replaceAll(key, value);
  });

  return template;
};
