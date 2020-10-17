//! _A Rust API client for the video game Lunaria._
//!
//! [Lunaria] is a video game for programmers, and is played by writing code
//! that interacts with the game through a [gRPC] API. The public interface of
//! the API is specified using [Protocol Buffer][protobuf] definitions, and
//! clients for various languages are automatically generated from these specs.
//!
//! `lunaria-api` contains an API client for Rust that is automatically
//! generated from the API specifications using [tonic].
//!
//! # Features
//!
//! - `server`: The crate contains not only the API client, but also the server
//!   stubs for Lunaria's API. It exists only so that Lunaria can implement the
//!   API, and should not be included by clients.
//!
//! # Required dependencies
//!
//! `lunaria-api` wraps a client generated by [`tonic`][tonic], which must be
//! added as a dependency as well. [`tokio`][tokio] is recommended as the async
//! runtime for the client.
//!
//! ```toml
//! [dependencies]
//! lunaria-api = "0.0.0"
//! tokio = { version = "0.2.22", features = ["macros", "rt-threaded"] }
//! tonic = "0.3.1"
//! ```
//!
//! # Examples
//!
//! ```rust
//! use lunaria_api::lunaria::v1::lunaria_client::LunariaClient;
//! use lunaria_api::lunaria::v1::{GetVersionRequest, GetVersionResponse, Version};
//! use tonic::Request;
//!
//! #[tokio::main]
//! async fn main() -> Result<(), Box<dyn std::error::Error>> {
//!     // Specify the address and port of Lunaria's API
//!     let address = "http://127.0.0.1:1904";
//!
//!     // Initialize the client
//!     let mut lunaria = LunariaClient::connect(address).await?;
//!
//!     // Create a request to get the game's version and send it to the server
//!     let request = Request::new(GetVersionRequest {});
//!     let grpc_response = lunaria.get_version(request).await?;
//!     let version_response = grpc_response.into_inner();
//!
//!     if let Some(version) = version_response.version {
//!         assert_eq!(0, version.major);
//!         assert_eq!(0, version.minor);
//!         assert_eq!(0, version.patch);
//!     }
//!
//!     Ok(())
//! }
//! ```
//!
//! [grpc]: https://grpc.io
//! [lunaria]: https://playlunaria.com
//! [lunaria-api]: https://github.com/playlunaria/lunaria-api
//! [protobuf]: https://developers.google.com/protocol-buffers/
//! [tonic]: https://github.com/hyperium/tonic

pub mod lunaria {
    pub mod v1 {
        tonic::include_proto!("lunaria.v1");
    }
}