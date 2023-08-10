export const calculateMinutesSinceUpdate = (
  updatedAt: string | Date
): number => {
  const now = new Date();
  const updatedAtDate = new Date(updatedAt);
  const minutesSinceUpdate = Math.floor(
    (now.getTime() - updatedAtDate.getTime()) / (1000 * 60)
  );

  return minutesSinceUpdate;
};
