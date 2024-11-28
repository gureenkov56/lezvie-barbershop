export function getExperience(timestamp: number) {
  const expTimestamp = Date.now() - timestamp;
  const dayMs = 60 * 60 * 24 * 1000;
  const days = expTimestamp / dayMs;
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  let yearPostfix = "года";
  if (years === 1) yearPostfix = "год";
  if (years > 4) yearPostfix = "года";

  const yearString = years ? `${years} ${yearPostfix}` : "";
  const monthsString = months
    ? `${months} ${months > 1 ? "мес" : "месяц"}`
    : "";
  return `${yearString}${monthsString}`;
}
