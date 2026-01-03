export default {
  async fetch(request) {
    const url = new URL(request.url);

    const target = new URL(
      url.pathname + url.search,
      "https://burake-arik.github.io"
    );

    return fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    });
  }
};
