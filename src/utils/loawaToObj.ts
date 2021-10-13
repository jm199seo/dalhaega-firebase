import type { UserData } from '../types/character';

export const loawaStrToObj = (str: string) => {
  const lines = str.split('\n');
  const userData = lines.reduce((acc, curr, idx, orig) => {
    if (curr.startsWith('\t')) {
      const [charLvl, itemLvl] = curr.trim().split('  ');
      const job = orig[idx + 1].trim();
      const charName = orig[idx + 2].trim();
      acc.push({
        charName,
        charLvl,
        itemLvl,
        job,
      });
    }
    return acc;
  }, [] as UserData[]);
  return userData;
};
