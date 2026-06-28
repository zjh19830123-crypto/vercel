export const runtime = "edge";
export default async function handler(request) {
    const remote = "https://www.baidu.com";
    const reqUrl = new URL(request.url);
    const targetUrl = new URL(reqUrl.pathname + reqUrl.search, remote);
    return await fetch(targetUrl, request);
}
