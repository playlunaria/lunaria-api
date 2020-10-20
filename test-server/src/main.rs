use lunaria_api::lunaria::v1::lunaria_server::LunariaServer;
use lunaria_api::lunaria::v1::{GetVersionRequest, GetVersionResponse, Version};
use tokio_compat_02::FutureExt;
use tonic::transport::Server;
use tonic::{Request, Response, Status};

#[derive(Clone, Debug, Default)]
struct Lunaria {}

#[tonic::async_trait]
impl lunaria_api::lunaria::v1::lunaria_server::Lunaria for Lunaria {
    async fn get_version(
        &self,
        _request: Request<GetVersionRequest>,
    ) -> Result<Response<GetVersionResponse>, Status> {
        let version = Version {
            major: env!("CARGO_PKG_VERSION_MAJOR").parse().unwrap(),
            minor: env!("CARGO_PKG_VERSION_MINOR").parse().unwrap(),
            patch: env!("CARGO_PKG_VERSION_PATCH").parse().unwrap(),
        };

        Ok(Response::new(GetVersionResponse {
            version: Some(version),
        }))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let address = std::env::var("LUNARIA_ADDRESS")
        .expect("Set environment variable LUNARIA_ADDRESS")
        .parse()
        .unwrap();
    let lunaria = Lunaria::default();

    Server::builder()
        .add_service(LunariaServer::new(lunaria))
        .serve(address)
        .compat()
        .await?;

    Ok(())
}
