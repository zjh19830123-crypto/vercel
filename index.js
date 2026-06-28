export default async function handler(request) {
  const remote = "https://www.baidu.com";
  const urlObj = new URL(request.url);
  const target = new URL(urlObj.pathname + urlObj.search, remote);
  return await fetch(target, request);
}
