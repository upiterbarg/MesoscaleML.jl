push!(LOAD_PATH,"../src")
using Documenter, MesoscaleML

makedocs(modules=MesoscaleML, 
    sitename="MesoscaleML.jl Documentation")

deploydocs(deps   = Deps.pip("mkdocs", "python-markdown-math"),
    repo = "github.com/upiterbarg/MesoscaleML.jl.git",
    branch = "gh-pages"