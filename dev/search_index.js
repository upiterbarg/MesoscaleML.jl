var documenterSearchIndex = {"docs":
[{"location":"meanfield_2layerqg/#Mean-Field-Approximation-for-2-Layer-QG","page":"Mean Field 2-Layer QG","title":"Mean-Field Approximation for 2-Layer QG","text":"","category":"section"},{"location":"meanfield_2layerqg/","page":"Mean Field 2-Layer QG","title":"Mean Field 2-Layer QG","text":"Now, we separate out the zonal average and the fluctuations of the potential vorticity and quasi-potential vorticity. Let  F=f_0^2gH  and  Q_y=beta-U_yypm F(U_1-U_2).","category":"page"},{"location":"meanfield_2layerqg/","page":"Mean Field 2-Layer QG","title":"Mean Field 2-Layer QG","text":"beginaligned\n(textPseudo-Potential Vorticity)    q = nabla^2psi mp F(psi_1-psi_2) \n\n(textVorticity)    fracpartialpartial t q + fracpartialpartial x Uq + Q_y v + fracpartialpartial x(uq) + fracpartialpartial y(vq-overlinevq) = -mu q\n\nendaligned","category":"page"},{"location":"meanfield_2layerqg/","page":"Mean Field 2-Layer QG","title":"Mean Field 2-Layer QG","text":"The mean-field approximation simplifies the fluctuating q equation as: ","category":"page"},{"location":"meanfield_2layerqg/","page":"Mean Field 2-Layer QG","title":"Mean Field 2-Layer QG","text":"fracpartialpartial t q + fracpartialpartial x U q + Q_y v = -mu q ","category":"page"},{"location":"meanfield_2layerqg/","page":"Mean Field 2-Layer QG","title":"Mean Field 2-Layer QG","text":"The zonal average q equation remains unchanged. ","category":"page"},{"location":"equations/#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"equations/","page":"Home","title":"Home","text":"In 1963, J.R. Herring applied the \"mean field theory\" parameterization approach to convection, deriving a relatively simple set of equations which performed well empirically at large Rayleigh numbers (i.e. for turbulent convective flows).","category":"page"},{"location":"equations/","page":"Home","title":"Home","text":"We can apply this parameterization approach to baroclinic instability (significant in the ocean and an important driver of large-scale eddy transport in the mid-latitude atmosphere) via the two-layer quasi-geostrophic (QG) equations.","category":"page"},{"location":"geoglossary/#Geophysical-Glossary","page":"Geophysical Glossary","title":"Geophysical Glossary","text":"","category":"section"},{"location":"geoglossary/","page":"Geophysical Glossary","title":"Geophysical Glossary","text":"Before we present any equations, we provide a glossary of geophysical terms that we will be referencing in the following sections.","category":"page"},{"location":"geoglossary/","page":"Geophysical Glossary","title":"Geophysical Glossary","text":"Symbol Meaning\ni=1 the index of the top layer\ni=2 the index of the bottom layer\nrho_i the density of the ith layer\np_i the pressure at the ith layer\nh_i the height of the ith layer\npsi_i the stream function of the ith layer\ng gravity\nmathbfu = (u v w) the 3D velocity of some fluid particle\nf=f_0+beta y the beta-plane approximation[1]\nzeta = fracpartial vpartial x - fracpartial upartial x the vertical component of the vorticity\nmathcalF external forcing\nH=h_1+h_2 the total height of our fluid\nq the quasi-potential vorticity\nmu viscous coefficient","category":"page"},{"location":"geoglossary/","page":"Geophysical Glossary","title":"Geophysical Glossary","text":"[1]: We linearize the magnitude of the Coriolis force. This approximation is reasonably accurate in the mid-lattitudes.","category":"page"},{"location":"#MesoscaleML.jl","page":"Home","title":"MesoscaleML.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"In this project, we look to use machine learning methods such as Gaussian Process Regression (GPR) to develop a robust parameterization for baroclinic instability in mesoscale flows, evaluating our resultant models against the two-layer quasi-geostrophic equations.","category":"page"},{"location":"","page":"Home","title":"Home","text":"We use the mean-field approximation to 2-layer QG model as the initial base of our parameterization procedure.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Documentation is incoming!","category":"page"},{"location":"","page":"Home","title":"Home","text":"To find a written development of the theory/background for this project, please navigate to the \"Theory\" tab.","category":"page"},{"location":"2layerqg/#layer-QG","page":"2-Layer QG","title":"2-layer QG","text":"","category":"section"},{"location":"2layerqg/","page":"2-Layer QG","title":"2-Layer QG","text":"We start with a two-layer fluid with upper density and height  rho_1 h_1  and lower density and height  rho_2 h_2  and make the following strong assumptions:","category":"page"},{"location":"2layerqg/","page":"2-Layer QG","title":"2-Layer QG","text":"(Geostrophy)  The motion of the fluid is nearly geostrophic (i.e. we have a Rossby number R_0 equiv fracUf_0L  1.\n(Mid-Latitude Beta-Plane Approximation)  Fractional changes in the Coriolis parameter are small horizontally (i.e. f=f_0+beta y  fracbeta Lf_0  1).\n(Small Perturbation Approximation)  Fractional changes in the total depth are small (i.e. fracnumathcalH_0  1), where mathcalH_0 is the average depth and Delta H is a typical departure from this average.","category":"page"},{"location":"2layerqg/","page":"2-Layer QG","title":"2-Layer QG","text":"Let g = g(rho_2-rho_1)rho_2 represent the reduced gravity. We have:","category":"page"},{"location":"2layerqg/","page":"2-Layer QG","title":"2-Layer QG","text":"beginaligned\n(textPseudo-Potential Vorticity)   q = nabla^2psi + beta y  mp fracf_0^2gH (psi_1-psi_2)\n\n(textVorticity)     fracpartialpartial t(zeta+beta y) + mathbfucdotnabla q  =  mp fracf_0^2gH(psi_1-psi_2)\n(textDensity)    fracpartialpartial t f_0(psi_1-psi_2) +w = mathcalH - mu f_0 \n\n(textPotential Vorticity)    fracpartialpartial t q + mathbfucdot nabla q = pm f_0mathcalHH + nabla mathcalF - mu q\n\nendaligned","category":"page"}]
}