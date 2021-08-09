import { GameServiceClient, StartGameRequest, StartGameResponse } from "../src";
import * as grpc from "@grpc/grpc-js";

const lunaria = new GameServiceClient(
  "127.0.0.1:1904",
  grpc.credentials.createInsecure()
);

test("getVersion returns Lunaria's version", async () => {
  const request = new StartGameRequest();

  lunaria.startGame(request, (err, _response: StartGameResponse) => {
    expect(err).toBeNull();
  });
});
