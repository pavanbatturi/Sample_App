const fetch = require("expo-fetch");

function getApiUrl() {
  let host = process.env.EXPO_PUBLIC_DOMAIN;

  if (!host) {
    return "http://localhost:5000";
  }

  let url = new URL(`https://${host}`);

  return url.href;
}

async function apiRequest(method, route, data) {
  const baseUrl = getApiUrl();
  const url = new URL(route, baseUrl);

  const res = await fetch(url.toString(), {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }

  return res;
}

module.exports = {
  getApiUrl,
  apiRequest,
};
