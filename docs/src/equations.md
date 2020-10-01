# Theory

In 1963, J.R. [Herring applied "mean field theory" to convection](https://pubs.giss.nasa.gov/docs/1963/1963_Herring_1.pdf), deriving a relatively simple parameterization which performed well empirically at large Rayleigh numbers (i.e. for turbulent convective flows).

We can also apply this theory to baroclinic instability, which is an 
important driver of large-scale eddy transport in the mid-latitude atmosphere and significant in the ocean.


### Two-layer Quasi-Geostrophic Model

We start with a two-layer fluid with upper density ```\$\rho_1\$``` and lower density ```\$\rho_2\$```. Next, we make the following strong assumptions: 
1. (**Geostrophy**)  The motion of the fluid is nearly geostrophic (i.e. we have a Rossby number ```\$ R_0 \equiv \frac{U}{f_0L} << 1\$```.
2. (**Mid-Latitude Beta-Plane Approximation**)  Fractional changes in the Coriolis parameter are small horizontally (i.e. ```\$f=f_0+\beta y, \ \frac{\beta L}{f_0} << 1\$```).
3. (**Small Perturbation Approximation**)  Fractional changes in the total depth are small (i.e. ```\$\frac{|\nu|}{\mathcal{H}_0} << 1\$```), where ```\$\mathcal{H}_0\$``` is the average depth and ```$\del H$``` is a typical departure.

Let ```\$g' = g(\rho_2-\rho_1)/\rho_2$``` represent the reduced gravity. We have:

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


### Mean-Field Approximation

Now, we separate out the zonal average and the fluctuations of the potential vorticity and quasi-potential vorticity. Let ```\$F=f_0^2/g'H\$``` and ```$Q_y=\beta-U_{yy}\pm F(U_1-U_2)$```.

```math
\begin{aligned}
(\text{Pseudo-Potential Vorticity}) &\ \ \ q' = \nabla^2\psi' \mp F(\psi_1-\psi_2) 
\\
(\text{Vorticity}) &\ \ \ \frac{\partial}{\partial t} q' + \frac{\partial}{\partial x} Uq' + Q_y v' + \frac{\partial}{\partial x}(u'q') + \frac{\partial}{\partial y}(v'q'-\overline{v'q'}) = -\mu q\\

\end{aligned}
```

The **mean-field approximation** simplifies the fluctuating ```\$ q'\$``` equation as: 

```math
\frac{\partial}{\partial t} q' + \frac{\partial}{\partial x} U q' + Q_y v' = -\mu q' 
```

The zonal average \$ q\$ equation remains unchanged. 
