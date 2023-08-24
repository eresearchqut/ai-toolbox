# Connecting to Lyra

```{figure} ./ssh.png
:name: ssh session

Lyra's Message of the Day (motd) and PS1 prompt
```

Most users connect to Lyra using an [SSH](https://en.wikipedia.org/wiki/Secure_Shell) client, typically with a terminal emulator.


```{admonition} External access
:class: note
To connect to Lyra from outside QUT's network, use the VPN at [remote.qut.edu.au](https://remote.qut.edu.au/)
```

## Apply for HPC access

Submit the [HPC Account Request form](https://heat2.qut.edu.au/HEAT/Login.aspx?ProviderName=QUT+SAML&Role=SelfService&Scope=SelfService&CommandId=NewServiceRequestByOfferingId&Tab=ServiceCatalog&Template=0E927692EA94478D8AC652F3A917548F)

## SSH

`````{tab-set}
````{tab-item} Linux
In a terminal emulator, run the following command:

```bash
ssh qutusername@lyra.qut.edu.au
```

or 

```bash
ssh qutusername@lyra
```
````

````{tab-item} macOS
In a terminal emulator, run the following command:

```bash
ssh qutusername@lyra.qut.edu.au
```

or 

```bash
ssh qutusername@lyra
```
````

````{tab-item} Windows

```{admonition} Enabling the SSH feature
:class: warning, dropdown
You may need to enable the [ssh feature](https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh) in Windows.
```

In a Windows Terminal, Powershell, or cmd.exe, run the following command:

```bash
ssh qutusername@lyra.qut.edu.au
```

or 

```bash
ssh qutusername@lyra
```

```{tip}
On Windows, use the [Windows Terminal](https://github.com/microsoft/terminal) for the best experience
```
````
`````

### Public-key authentication

To connect to Lyra without entering your password, use public-key authentication:

````{admonition} Create key-pair
:class: tip, dropdown

If you don't already have a public key, create a public-private key-pair using ssh-keygen:

```bash
ssh-keygen
```

````

```bash
ssh-copy-id qutusername@lyra.qut.edu.au
```

### Saved hosts

To connect to Lyra without entering your username, create a new Host in `~/.ssh/config`:

```
Host lyra
    User qutusername
    Hostname lyra.qut.edu.au
```

Then connect to the host:

```
ssh lyra
```


## VPN

Navigate to [remote.qut.edu.au](https://remote.qut.edu.au) and follow the instructions to install Cisco Anyconnect

```{figure} ./anyconnect.png
:name: anyconnect window

Cisco AnyConnect connected to QUT's VPN
```

## JupyterHub

```{admonition} Connecting to JupyterHub
:class: note
See [JupyterHub](../../jupyterhub/index.md) to read about how JupyterHub on Lyra works.
```

[jupyterhub.eres.qut.edu.au](https://jupyterhub.eres.qut.edu.au)

```{figure} ./jupyterhub.png
:name: jupyterhub landing

JupyterHub on Lyra
```

## HPC-FS