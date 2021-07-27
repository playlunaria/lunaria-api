use tonic::transport::Server;

use lunaria_api::lunaria::v1::game_service_server::GameServiceServer;
use lunaria_api::lunaria::v1::lunaria_service_server::LunariaServiceServer;

use crate::game::Game;
use crate::lunaria::Lunaria;

mod game;
mod lunaria;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let address = std::env::var("LUNARIA_ADDRESS")
        .expect("Set environment variable LUNARIA_ADDRESS")
        .parse()
        .unwrap();

    let game = Game::default();
    let lunaria = Lunaria::default();

    Server::builder()
        .add_service(GameServiceServer::new(game))
        .add_service(LunariaServiceServer::new(lunaria))
        .serve(address)
        .await?;

    Ok(())
}
