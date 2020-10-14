# lunaria-api

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/playlunaria/lunaria-api)](https://github.com/playlunaria/lunaria-api/releases)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/playlunaria/lunaria-api/rust)](https://github.com/playlunaria/lunaria-api/actions?query=workflow%3ANode)
[![License](https://img.shields.io/crates/l/lunaria-api)](https://www.npmjs.com/package/lunaria-api)

_A Node API client for the video game Lunaria._

[Lunaria] is a video game for programmers, and is played by writing code that
interacts with the game through a [gRPC] API. This package contains a [gRPC]
client that is auto-generated from the [Protocol Buffers][protobuf] that declare
[Lunaria's API][lunaria-api].

## Getting Started

First, add `lunaria-api` as a new dependency to your project:

```shell script
npm install lunaria-api
```

The following TypeScript example shows how to initialize a new API client and
query the version of the running game. For a full list of available API calls,
check out the specification of Lunaria's API:

<https://github.com/playlunaria/lunaria-api/tree/main/protobufs>

```typescript
import {
  GetVersionRequest,
  GetVersionResponse,
  LunariaClient,
} from "lunaria-api";
import * as grpc from "@grpc/grpc-js";

// Initialize a new API client
const lunaria = new LunariaClient(
  "127.0.0.1:1904",
  grpc.credentials.createInsecure()
);

// Initialize the request payload
const request = new GetVersionRequest();

// Asynchronously send the request and process the response in a callback
lunaria.getVersion(request, (err, response: GetVersionResponse) => {
  const version = response.getVersion();

  if (version != undefined) {
    const versionString = [
      version.getMajor(),
      version.getMinor(),
      version.getPatch(),
    ].join(".");

    console.log(`Lunaria is running version ${versionString}`);
  }
});
```

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or <http://opensource.org/licenses/MIT>)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.

[grpc]: https://grpc.io
[lunaria]: https://playlunaria.com
[lunaria-api]: https://github.com/playlunaria/lunaria-api
[protobuf]: https://developers.google.com/protocol-buffers/
