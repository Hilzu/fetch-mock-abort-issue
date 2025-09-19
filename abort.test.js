const { default: FetchMock } = require("fetch-mock");
const { doFetch } = require("./abort");

FetchMock.mockGlobal()
  .route("http://example.com/", { data: "12345" })
  .route("http://example.com/timeout", () => new Promise(() => {}));

describe("abort tests", () => {
  it("should fetch", async () => {
    const res = await doFetch("http://example.com/");
    expect(res).toEqual({ data: "12345" });
  });

  it("should timeout", async () => {
    await expect(doFetch("http://example.com/timeout")).rejects.toThrow(
      /The operation was aborted/,
    );
  });
});
