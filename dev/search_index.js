var documenterSearchIndex = {"docs":
[{"location":"equations/#Theory","page":"Theory","title":"Theory","text":"","category":"section"},{"location":"equations/","page":"Theory","title":"Theory","text":"In 1963, J.R. Herring applied the \"mean field theory\" parameterization approach to convection, deriving a relatively simple set of equations which performed well empirically at large Rayleigh numbers (i.e. for turbulent convective flows).","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"We can  apply this parameterization approach to baroclinic instability, which is significant in the ocean and an important driver of large-scale eddy transport in the mid-latitude atmosphere.","category":"page"},{"location":"equations/#Two-layer-Quasi-Geostrophic-Equations","page":"Theory","title":"Two-layer Quasi-Geostrophic Equations","text":"","category":"section"},{"location":"equations/","page":"Theory","title":"Theory","text":"We start with a two-layer fluid with upper density  rho_1  and lower density  rho_2  and make the following strong assumptions:","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"(Geostrophy)  The motion of the fluid is nearly geostrophic (i.e. we have a Rossby number R_0 equiv fracUf_0L  1.\n(Mid-Latitude Beta-Plane Approximation)  Fractional changes in the Coriolis parameter are small horizontally (i.e. f=f_0+beta y  fracbeta Lf_0  1).\n(Small Perturbation Approximation)  Fractional changes in the total depth are small (i.e. fracnumathcalH_0  1), where mathcalH_0 is the average depth and del H is a typical departure.","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"Let g = g(rho_2-rho_1)rho_2 represent the reduced gravity. We have:","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"beginaligned\n(textPseudo-Potential Vorticity)   q = nabla^2psi + beta y  mp fracf_0^2gH (psi_1-psi_2)\n\n(textVorticity)     fracpartialpartial t(zeta+beta y) + mathbfucdotnabla q  =  mp fracf_0^2gH(psi_1-psi_2)\n(textDensity)    fracpartialpartial t f_0(psi_1-psi_2) +w = mathcalH - mu f_0 \n\n(textPotential Vorticity)    fracpartialpartial t q + mathbfucdot nabla q = pm f_0mathcalHH + nabla mathcalF - mu q\n\nendaligned","category":"page"},{"location":"equations/#Mean-Field-Approximation","page":"Theory","title":"Mean-Field Approximation","text":"","category":"section"},{"location":"equations/","page":"Theory","title":"Theory","text":"Now, we separate out the zonal average and the fluctuations of the potential vorticity and quasi-potential vorticity. Let  F=f_0^2gH  and  Q_y=beta-U_yypm F(U_1-U_2).","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"beginaligned\n(textPseudo-Potential Vorticity)    q = nabla^2psi mp F(psi_1-psi_2) \n\n(textVorticity)    fracpartialpartial t q + fracpartialpartial x Uq + Q_y v + fracpartialpartial x(uq) + fracpartialpartial y(vq-overlinevq) = -mu q\n\nendaligned","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"The mean-field approximation simplifies the fluctuating q equation as: ","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"fracpartialpartial t q + fracpartialpartial x U q + Q_y v = -mu q ","category":"page"},{"location":"equations/","page":"Theory","title":"Theory","text":"The zonal average q equation remains unchanged. ","category":"page"},{"location":"#MesoscaleML.jl","page":"Home","title":"MesoscaleML.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"In this project, we look to use machine learning methods such as Gaussian Process Regression (GPR) to develop a robust parameterization for baroclinic instability in mesoscale flows, evaluating our resultant models against the two-layer quasi-geostrophic equations.","category":"page"},{"location":"","page":"Home","title":"Home","text":"We use the mean-field approximation to 2-layer QG model as the initial base of our parameterization procedure.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Documentation is incoming!","category":"page"},{"location":"","page":"Home","title":"Home","text":"To find a written development of the theory/background for this project, please navigate to the \"Theory\" tab.","category":"page"}]
}
