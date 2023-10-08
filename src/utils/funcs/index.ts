import jwtDecode from 'jwt-decode';

export const getTokenData = (token: string) => {
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    return decoded;
  } catch (error) {
    // console.log(error);
    return null;
  }
};

export const dateFormater = (date: string) => {
  const formattedDate = new Date(date).toISOString().split('T')[0].replace(/-/g, '/');
  return formattedDate;
};
export const timeFormater = (date: string) => {
  const formattedDate = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  });
  return formattedDate;
};

export const getRandomIndex: (e: any, l: any) => number = (max: number, lastIndices: number[]) => {
  const index = Math.floor(Math.random() * max);
  if (lastIndices.includes(index)) {
    return getRandomIndex(max, lastIndices) as number;
  }
  return index as number;
};
