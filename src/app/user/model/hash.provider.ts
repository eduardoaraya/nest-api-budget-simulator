import * as bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

export const generatePassword = async (password) =>
  await bcrypt.hashSync(password, salt);

export const comparePassword = async (password, compare) =>
  await bcrypt.compareSync(password, compare);
