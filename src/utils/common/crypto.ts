import * as bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  password = password?.trim();
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

export const comparePassword = async (password: string, hashCompare: any) => {
  password = password?.trim();
  const isMatch = await bcrypt.compare(password, hashCompare);
  return isMatch;
};
