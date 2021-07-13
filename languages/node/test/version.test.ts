import {
  GetVersionRequest,
  GetVersionResponse,
  LunariaServiceClient,
} from "../src";
import * as grpc from "@grpc/grpc-js";

const lunaria = new LunariaServiceClient(
  "127.0.0.1:1904",
  grpc.credentials.createInsecure()
);

test("getVersion returns Lunaria's version", async () => {
  const request = new GetVersionRequest();

  lunaria.getVersion(request, (err, response: GetVersionResponse) => {
    expect(err).toBeNull();

    const version = response.getVersion();

    if (version !== undefined) {
      expect(version.getMajor()).toEqual(0);
      expect(version.getMinor()).toEqual(1);
      expect(version.getPatch()).toEqual(3);
    } else {
      expect(version).toBeDefined();
    }
  });
});
