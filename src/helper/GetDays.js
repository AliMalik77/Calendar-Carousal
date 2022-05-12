import moment from "moment";

export const getDaysBetweenDates = (startDate, endDate) => {
  const now = startDate.clone(),
    dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push({
      day: moment(now).format("dddd"),
      date: moment(now).format("DD"),
      month: moment(now).format("MMMM"),
      year: moment(now).format("YYYY"),
    });

    now.add(1, "days");
  }
  return dates;
};
