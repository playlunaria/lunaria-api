use std::error::Error;

use tonic::Request;

use lunaria_api::lunaria::v1::game_service_client::GameServiceClient;
use lunaria_api::lunaria::v1::start_game_response::GameStatus;
use lunaria_api::lunaria::v1::StartGameRequest;

#[tokio::test]
async fn test_start_game() -> Result<(), Box<dyn Error>> {
    let address = "http://127.0.0.1:1904";

    let mut game_service = GameServiceClient::connect(address).await?;
    let request = Request::new(StartGameRequest {});

    let mut stream = game_service.start_game(request).await?.into_inner();
    let status = stream.message().await?.unwrap();

    assert_eq!(GameStatus::Running as i32, status.status);

    Ok(())
}
