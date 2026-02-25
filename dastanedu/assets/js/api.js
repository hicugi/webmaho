window.api = {
  post(url, data, config = {}) {
    return this.query(url, { ...config, body: data, method: "POST" });
  },

  query: (url, config) => {
    return (
      Promise.resolve()
        // validation
        .then(() => {
          if (url === undefined || typeof url !== "string") {
            throw new Error("Incorrect url");
          }
        })

        // generate request config
        .then(() => {
          const result = {};
          const { headers, method: configMethod, body } = config || {};

          // method
          let method = "GET";
          if (typeof configMethod === "string")
            method = configMethod.toUpperCase();
          result.method = method;

          // headers
          if (headers !== undefined) result.headers = headers;

          // body
          if (body !== undefined) {
            result.body = body;
          }

          return result;
        })

        .then(({ method, headers, body }) => {
          const request = new XMLHttpRequest();
          request.open(method, url);

          // set headers
          Object.entries(headers || {}).forEach(([key, value]) => {
            request.setRequestHeader(key, value);
          });

          return new Promise((resolve, reject) => {
            request.addEventListener("readystatechange", () => {
              if (request.readyState !== request.DONE) return;

              try {
                const { status } = request;

                const responseHeaders = (request.getAllResponseHeaders() || "")
                  .trim()
                  .split(/[\r\n]+/)
                  .filter((s) => s.length)
                  .reduce((result, item) => {
                    const [key, value] = item.split(": ");
                    if (value) result[key] = value;
                    return result;
                  }, {});

                const result = {
                  method,
                  status,
                  ok: status >= 200 && status <= 299,
                  headers: responseHeaders,
                  response: request.responseText,

                  text() {
                    return this.response;
                  },
                  json() {
                    try {
                      const result = JSON.parse(this.response);
                      return Promise.resolve(result);
                    } catch {
                      return Promise.reject(new Error("Something went wrong"));
                    }
                  },
                };

                if (result.ok) {
                  resolve(result);
                } else {
                  reject(result);
                }
              } catch (error) {
                reject(new Error("Something went wrong"));
              }
            });

            if (body) request.send(body);
            else request.send();
          });
        })
    );
  },
};
