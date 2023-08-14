# What is Lyra

Lyra is QUT's High-Performance-Computer (HPC) cluster. Lyra is a [Beowulf cluster](https://en.wikipedia.org/wiki/Beowulf_cluster) of interconnected Linux computers. Users run workloads on Lyra by by scheduling jobs with [Altair PBS Professional](https://altair.com/pbs-professional).

Users can use Lyra to run arbitrary software that makes use of _susbtantial_ CPU, GPU, Memory, and Storage.

## Nodes

Each node in the cluster is a Linux (what OS?) server.

````{admonition} List Lyra's nodes
:class: tip, dropdown
To list all of Lyra's nodes, run the following:

```bash
pbsnodeinfo
```

````

### General

General workloads that use the CPU

| # Number | CPU                                  | Memory  |
| -------- | ------------------------------------ | ------- |
| 96       | 2x Intel® Xeon® Gold 6140 (18 cores) | 376 GB  |
| 34       | 2x AMD EPYC™ 7702 (64 cores)         | 1006 GB |

### Accelerated

Accelerated workloads that use discrete cards

| # Number | CPU                                      | Memory  | GPU(s)           |
| -------- | ---------------------------------------- | ------- | ---------------- |
| 8        | 2x AMD EPYC™ 7713 (64 cores)             | 1006 GB | 8x NVIDIA A100   |
| 4        | 2x Intel® Xeon® Gold 6248 (20 cores)     | 186 GB  | 4x NVIDIA P100   |
| 2        | 2x Intel® Xeon® Gold 6140 (18 cores)     | 186 GB  | 4x NVIDIA T4     |
| 1        | 2x Intel® Xeon® Platinum 8260 (24 cores) | 186 GB  | 1x NVIDIA V100   |
| 1        | 2x AMD EPYC™ 75F3 (32 cores)             | 503 GB  | 1x Graphcore IPU |

### Large Memory

Specialised workloads that need lots of memory

| # Number | CPU                                             | Memory  |
| -------- | ----------------------------------------------- | ------- |
| 1        | 4x Intel® Xeon® Processor E7-8890 v4 (24 cores) | 5794 GB |

