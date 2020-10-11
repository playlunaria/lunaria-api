fn main() -> Result<(), Box<dyn std::error::Error>> {
    let build_server = std::env::var("CARGO_FEATURE_SERVER").is_ok();

    tonic_build::configure()
        .build_server(build_server)
        .compile(
            &["../protobufs/lunaria/v1/lunaria.proto"],
            &["../protobufs"],
        )?;

    Ok(())
}
