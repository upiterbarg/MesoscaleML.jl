using Documenter
using MesoscaleML

theory = ["Introduction" => "equations.md",
    "Glossary" => "geoglossary.md",
    "2-Layer QG" => "2layerqg.md",
    "Mean Field 2-Layer QG" => "meanfield_2layerqg.md"
    ]

makedocs(
    sitename = "MesoscaleML",
    format = Documenter.HTML(),
    modules = [MesoscaleML],
    pages = [
        "Home" =>  "index.md",
        "Theory" => theory]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/upiterbarg/MesoscaleML.jl"
)
