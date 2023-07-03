import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/id";

dayjs.locale("id");
dayjs.extend(relativeTime);

export function dateFormat(date: string, format: string) {
  return dayjs(date).format(format);
}

export function inDiffForHumans(date: string) {
  const now = dayjs();
  const current = dayjs(date);

  const diff = now.diff(current, "day");

  return diff > 1 ? current.format("DD MMMM YYYY") : current.fromNow();
}

export function datePeriod(date: string) {
  const now = dayjs();
  const current = dayjs(date);

  const diff = now.diff(current, "year");

  const diffInYear = now.diff(current, "year");
  const diffInMonth = now.diff(current, "month") % 12;

  return diff < 1
    ? current.fromNow(true)
    : `${diffInYear} tahun ${diffInMonth} bulan`;
}
