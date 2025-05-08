export function addQueryParams(
  url: string,
  params: { [key: string]: string | number }
) {
  const urlObj = new URL(url);
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.append(key, String(value));
  });
  return urlObj.toString();
}
