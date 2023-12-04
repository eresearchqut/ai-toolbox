FROM python:3.10 as base
RUN --mount=type=cache,target=/var/cache/apt \
    apt update && apt install -y \
        build-essential \
        cmake \
        git \
        curl \
        wget \
        vim \
        ffmpeg \
        ca-certificates \
        && rm -rf /var/lib/apt/lists/*
RUN --mount=type=cache,target=/root/.cache/pip pip install --upgrade pip gradio jupyterlab datasets

FROM base as cpu
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install torch torchvision torchaudio \
    --index-url https://download.pytorch.org/whl/cpu && \
    pip install transformers accelerate

FROM base as amd
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install torch torchvision torchaudio \
    --index-url https://download.pytorch.org/whl/rocm5.6 && \
    pip install transformers accelerate

FROM base as nvidia
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install torch torchvision torchaudio \
    --index-url https://download.pytorch.org/whl/cu121 && \
    pip install transformers accelerate
