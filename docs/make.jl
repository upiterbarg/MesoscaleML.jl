using Documenter
using MesoscaleML

makedocs(
    sitename = "MesoscaleML",
    format = Documenter.HTML(),
    modules = [MesoscaleML],
    pages = [
        "Home" =>  "index.md",
        "Theory" => "equations.md"]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/upiterbarg/MesoscaleML.jl"
)