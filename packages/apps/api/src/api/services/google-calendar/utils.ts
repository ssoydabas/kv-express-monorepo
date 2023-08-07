// 2023-07-07T09:00:00+01:00
export const getDateStrings = (input: string) => {
  const date = new Date(input);

  const startingDate = date.toISOString();
  date.setMinutes(date.getMinutes() + 30);

  const endingDate = date.toISOString();

  return [startingDate, endingDate];
};
