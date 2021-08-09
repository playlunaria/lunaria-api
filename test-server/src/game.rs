use tonic::{Request, Response, Status};

use lunaria_api::lunaria::v1::{StartGameRequest, StartGameResponse};

#[derive(Clone, Debug, Default)]
pub struct Game {}

#[tonic::async_trait]
impl lunaria_api::lunaria::v1::game_service_server::GameService for Game {
    async fn start_game(
        &self,
        _request: Request<StartGameRequest>,
    ) -> Result<Response<StartGameResponse>, Status> {
        Ok(Response::new(StartGameResponse {}))
    }
}
