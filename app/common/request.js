export default function(url) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return fetch(url, {
    headers,
    method: "GET"
  });
}
