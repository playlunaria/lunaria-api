# Lunaria API

_API specifications and client libraries for Lunaria._

[Lunaria] is a video game for programmers, and is played by writing code that
interacts with the game through a [gRPC] API. This repository contains the
[Protocol Buffer][protobuf] specification of the API, and tooling to generate
gRPC clients in popular languages from this specification.

<!-- markdownlint-disable line-length -->

| Language               | Package                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| [Node](languages/node) | [![npm](https://img.shields.io/npm/v/lunaria-api)](https://www.npmjs.com/package/lunaria-api)     |
| [Rust](languages/rust) | [![Crates.io](https://img.shields.io/crates/v/lunaria-api)](https://crates.io/crates/lunaria-api) |

<!-- markdownlint-enable line-length -->

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
[protobuf]: https://developers.google.com/protocol-buffers/
