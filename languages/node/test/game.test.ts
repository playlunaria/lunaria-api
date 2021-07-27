import { GameServiceClient, StartGameRequest, StartGameResponse } from "../src";
import * as grpc from "@grpc/grpc-js";

const lunaria = new GameServiceClient(
  "127.0.0.1:1904",
  grpc.credentials.createInsecure()
);

test("getVersion returns Lunaria's version", async () => {
  const request = new StartGameRequest();
  const call = lunaria.startGame(request);

  call.on("data", (response: StartGameResponse) => {
    expect(response.getStatus()).toEqual(
      StartGameResponse.GameStatus.GAME_STATUS_RUNNING
    );
  });
});
