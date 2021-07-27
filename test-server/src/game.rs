use std::pin::Pin;

use tokio::sync::mpsc::channel;
use tokio_stream::wrappers::ReceiverStream;
use tonic::codegen::futures_core::Stream;
use tonic::{Request, Response, Status};

use lunaria_api::lunaria::v1::start_game_response::GameStatus;
use lunaria_api::lunaria::v1::{StartGameRequest, StartGameResponse};

#[derive(Clone, Debug, Default)]
pub struct Game {}

#[tonic::async_trait]
impl lunaria_api::lunaria::v1::game_service_server::GameService for Game {
    type StartGameStream =
        Pin<Box<dyn Stream<Item = Result<StartGameResponse, Status>> + Send + Sync + 'static>>;

    async fn start_game(
        &self,
        _request: Request<StartGameRequest>,
    ) -> Result<Response<Self::StartGameStream>, Status> {
        let (tx, rx) = channel(4);

        tx.send(Ok(StartGameResponse {
            status: GameStatus::Running.into(),
        }))
        .await
        .unwrap();

        Ok(Response::new(
            Box::pin(ReceiverStream::new(rx)) as Self::StartGameStream
        ))
    }
}
