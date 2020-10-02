# Mean-Field Approximation for 2-Layer QG

Now, we separate out the zonal average and the fluctuations of the potential vorticity and quasi-potential vorticity. Let  ``F=f_0^2/g'H``  and  ``Q_y=\beta-U_{yy}\pm F(U_1-U_2)``.

```math
\begin{aligned}
(\text{Pseudo-Potential Vorticity}) &\ \ \ q' = \nabla^2\psi' \mp F(\psi_1-\psi_2) 
\\
(\text{Vorticity}) &\ \ \ \frac{\partial}{\partial t} q' + \frac{\partial}{\partial x} Uq' + Q_y v' + \frac{\partial}{\partial x}(u'q') + \frac{\partial}{\partial y}(v'q'-\overline{v'q'}) = -\mu q\\

\end{aligned}
```

The **mean-field approximation** simplifies the fluctuating `` q'`` equation as: 

```math
\frac{\partial}{\partial t} q' + \frac{\partial}{\partial x} U q' + Q_y v' = -\mu q' 
```

The zonal average ``q`` equation remains unchanged. 
