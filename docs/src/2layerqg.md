# 2-layer QG

We start with a two-layer fluid with upper density and height  ``\rho_1, h_1``  and lower density and height  ``\rho_2, h_2``  and make the following strong assumptions:

1. (**Geostrophy**)  The motion of the fluid is nearly geostrophic (i.e. we have a Rossby number `` R_0 \equiv \frac{U}{f_0L} << 1``.
2. (**Mid-Latitude Beta-Plane Approximation**)  Fractional changes in the Coriolis parameter are small horizontally (i.e. ``f=f_0+\beta y, \ \frac{\beta L}{f_0} << 1``).
3. (**Small Perturbation Approximation**)  Fractional changes in the total depth are small (i.e. ``\frac{|\nu|}{\mathcal{H}_0} << 1``), where ``\mathcal{H}_0`` is the average depth and ``\Delta H`` is a typical departure from this average.


Let ``g' = g(\rho_2-\rho_1)/\rho_2`` represent the reduced gravity. We have:

```math
\begin{aligned}
(\text{Pseudo-Potential Vorticity}) &\ \ q = \nabla^2\psi + \beta y  \mp \frac{f_0^2}{g'H} (\psi_1-\psi_2)
\\
(\text{Vorticity}) &\ \ \  \frac{\partial}{\partial t}(\zeta+\beta y) + \mathbf{u}\cdot\nabla q  =  \mp \frac{f_0^2}{g'H}(\psi_1-\psi_2)\\
(\text{Density}) &\ \ \ \frac{\partial}{\partial t} f_0(\psi_1-\psi_2) +w = \mathcal{H} - \mu f_0 
\\
(\text{Potential Vorticity}) &\ \ \ \frac{\partial}{\partial t} q + \mathbf{u}\cdot \nabla q = \pm f_0\mathcal{H}/H + \nabla \mathcal{F} - \mu q
\\
\end{aligned}
```

