export const timeAgo = (isoDate) => {
  const givenDate = new Date(isoDate);
  const now = new Date();
  const differenceInMilliseconds = now - givenDate;

  // Calculate time differences
  const millisecondsInAnHour = 1000 * 60 * 60;
  const millisecondsInADay = millisecondsInAnHour * 24;

  // Get the difference in days and hours
  const daysAgo = Math.floor(differenceInMilliseconds / millisecondsInADay);
  const hoursAgo = Math.floor(
    (differenceInMilliseconds % millisecondsInADay) / millisecondsInAnHour
  );

  // Return result
  if (daysAgo > 0) {
    return `${daysAgo} day(s) ago`;
  } else {
    return `${hoursAgo} hour(s) ago`;
  }
};

export const convertToTime = (isoDate) => {
  const date = new Date(isoDate);

  // Convert to time in the format "3:57 PM"
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
};

export const convertToDate = (isoDate) => {
  const date = new Date(isoDate);

  // Format to "2 Sep, 2024"
  const options = {
    day: "numeric",
    month: "short", // "Sep" instead of "September"
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
