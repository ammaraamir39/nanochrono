/**
 * Thresholds for time divisions.
 * We divide the total seconds by these amounts to 'climb' the time ladder.
 */
const DIVISIONS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, name: "second" },
  { amount: 60, name: "minute" },
  { amount: 24, name: "hour" },
  { amount: 7, name: "day" },
  { amount: 4.345, name: "week" },
  { amount: 12, name: "month" },
  { amount: Number.POSITIVE_INFINITY, name: "year" }
]

/**
 * Formats a date into a localized relative string (e.g., "2 days ago").
 * @param date - Date object or timestamp in milliseconds
 * @param locale - BCP 47 language tag (default: 'en')
 */
export function formatRelative(
  date: Date | number,
  locale: string = "en"
): string {
  // 1. Initialize the native formatter (No extra weight added to bundle!)
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  // 2. Calculate the difference in seconds
  const target = typeof date === "number" ? date : date.getTime()
  let duration = (target - Date.now()) / 1000

  // 3. The Waterfall Loop: Find the best unit
  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return rtf.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }

  return ""
}
