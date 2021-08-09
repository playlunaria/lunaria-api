use std::error::Error;

use tonic::Request;

use lunaria_api::lunaria::v1::game_service_client::GameServiceClient;
use lunaria_api::lunaria::v1::StartGameRequest;

#[tokio::test]
async fn test_start_game() -> Result<(), Box<dyn Error>> {
    let address = "http://127.0.0.1:1904";

    let mut game_service = GameServiceClient::connect(address).await?;

    let request = Request::new(StartGameRequest {});
    let response = game_service.start_game(request).await;

    assert!(response.is_ok());

    Ok(())
}
