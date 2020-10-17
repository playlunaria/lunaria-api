use std::path::PathBuf;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let root_path = find_project_root().unwrap();
    let proto_path = root_path.join("protobufs");

    let build_server = std::env::var("CARGO_FEATURE_SERVER").is_ok();

    tonic_build::configure()
        .build_server(build_server)
        .compile(
            &["lunaria/v1/lunaria.proto"],
            &[proto_path.to_str().unwrap()],
        )?;

    Ok(())
}

fn find_project_root() -> Option<PathBuf> {
    let mut path = PathBuf::from(env!("CARGO_MANIFEST_DIR"));

    while let Some(parent) = path.parent() {
        path = parent.to_path_buf();

        if path.ends_with("lunaria-api") {
            return Some(path);
        }
    }

    None
}
