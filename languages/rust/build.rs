use std::path::PathBuf;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto_path = PathBuf::from("protobufs");

    let build_server = std::env::var("CARGO_FEATURE_SERVER").is_ok();

    tonic_build::configure()
        .build_server(build_server)
        .compile(
            &["lunaria/v1/lunaria.proto", "lunaria/v1/game.proto"],
            &[proto_path.to_str().unwrap()],
        )?;

    Ok(())
}
