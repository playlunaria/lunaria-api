use tonic::transport::Server;
use tonic::{Request, Response, Status};

use lunaria_api::lunaria::v1::lunaria_service_server::LunariaServiceServer;
use lunaria_api::lunaria::v1::{GetVersionRequest, GetVersionResponse, Version};

#[derive(Clone, Debug, Default)]
struct Lunaria {}

#[tonic::async_trait]
impl lunaria_api::lunaria::v1::lunaria_service_server::LunariaService for Lunaria {
    async fn get_version(
        &self,
        _request: Request<GetVersionRequest>,
    ) -> Result<Response<GetVersionResponse>, Status> {
        let version = Version {
            major: 0,
            minor: 0,
            patch: 0,
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
        .add_service(LunariaServiceServer::new(lunaria))
        .serve(address)
        .await?;

    Ok(())
}
