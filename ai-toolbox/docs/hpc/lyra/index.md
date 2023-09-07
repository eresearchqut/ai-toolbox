---
sidebar_position: 1
---

# Lyra

Lyra is QUT's High-Performance-Computer (HPC) cluster. Lyra is a [Beowulf cluster](https://en.wikipedia.org/wiki/Beowulf_cluster) of interconnected Linux computers. Users run workloads on Lyra by by scheduling jobs with [Altair PBS Professional](https://altair.com/pbs-professional).

Lyra is available at no cost, to all researchers at QUT. Request an HPC account [here](https://heat2.qut.edu.au/HEAT/Login.aspx?ProviderName=QUT+SAML&Role=SelfService&Scope=SelfService&CommandId=NewServiceRequestByOfferingId&Tab=ServiceCatalog&Template=0E927692EA94478D8AC652F3A917548F).

You can use Lyra to run arbitrary software that makes use of _susbtantial_ CPU, GPU, Memory, and Storage.

## Nodes

Each node in the cluster is a Linux (SUSE Linux Enterprise Server 12) server.

:::tip List Lyra's nodes 

To see Lyra's nodes, run the following:

```bash
pbsnodeinfo
```

```
$ pbsnodeinfo
Node    :   cputype |        cpuarch ;    cpu usage;    mem usage; gputype; gpu usage
=====================================================================================
cl4n001 : E7-8890v4 |       avx,avx2 ;  6 / 192 cpus; 500 / 5794 GB
cl4n002 :      6140 |avx,avx2,avx512 ; 20 / 36 cpus;  62 / 186 GB;  P100; 3 / 4 gpus
cl4n003 :      6140 |avx,avx2,avx512 ; 28 / 36 cpus; 160 / 186 GB;  P100; 4 / 4 gpus
cl4n007 :      6140 |avx,avx2,avx512 ; 36 / 36 cpus; 291 / 376 GB
cl4n008 :      6140 |avx,avx2,avx512 ; 33 / 36 cpus; 200 / 376 GB
cl4n009 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 371 / 376 GB
cl4n010 :      6140 |avx,avx2,avx512 ; 34 / 36 cpus; 287 / 376 GB
cl4n011 :      6140 |avx,avx2,avx512 ; 34 / 36 cpus; 188 / 376 GB
cl4n012 :      6140 |avx,avx2,avx512 ; 31 / 36 cpus; 368 / 376 GB
cl4n013 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 332 / 376 GB
cl4n014 :      6140 |avx,avx2,avx512 ; 36 / 36 cpus; 361 / 376 GB
cl4n015 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 372 / 376 GB
cl4n016 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 372 / 376 GB
cl4n017 :      6140 |avx,avx2,avx512 ; 35 / 36 cpus; 364 / 376 GB
cl4n018 :      6140 |avx,avx2,avx512 ; 23 / 36 cpus; 376 / 376 GB
...
```

:::

### General nodes

For general workloads that use the CPU

| # Number | CPU                                  | Memory  |
| -------- | ------------------------------------ | ------- |
| 96       | 2x Intel® Xeon® Gold 6140 (18 cores) | 376 GB  |
| 34       | 2x AMD EPYC™ 7702 (64 cores)         | 1006 GB |

### Accelerated nodes

For accelerated workloads that use discrete cards

| # Number | CPU                                      | Memory  | GPU(s)           |
| -------- | ---------------------------------------- | ------- | ---------------- |
| 8        | 2x AMD EPYC™ 7713 (64 cores)             | 1006 GB | 8x NVIDIA A100   |
| 4        | 2x Intel® Xeon® Gold 6248 (20 cores)     | 186 GB  | 4x NVIDIA P100   |
| 2        | 2x Intel® Xeon® Gold 6140 (18 cores)     | 186 GB  | 4x NVIDIA T4     |
| 1        | 2x Intel® Xeon® Platinum 8260 (24 cores) | 186 GB  | 1x NVIDIA V100   |
| 1        | 2x AMD EPYC™ 75F3 (32 cores)             | 503 GB  | 1x Graphcore IPU |

### Large Memory nodes

For specialised workloads that need lots of memory

| # Number | CPU                                             | Memory  |
| -------- | ----------------------------------------------- | ------- |
| 1        | 4x Intel® Xeon® Processor E7-8890 v4 (24 cores) | 5794 GB |

