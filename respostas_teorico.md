# Respostas da atividade Teorica

## Qual a diferença entre image e container?

Uma imagem Docker é um pacote de software que contém todas as dependências e configurações necessárias para executar um aplicativo. É uma espécie de modelo para criar um ou mais contêineres. A imagem é criada a partir de um arquivo Dockerfile, que especifica as instruções necessárias para construir a imagem. Uma imagem Docker é geralmente criada a partir de outra imagem de base (chamada de imagem "pai" ou "base"), que contém um sistema operacional e um conjunto mínimo de ferramentas.

Por outro lado, um container Docker é uma instância em execução de uma imagem Docker. Ele é criado a partir de uma imagem Docker e é executado em um ambiente isolado e independente, que inclui seu próprio sistema de arquivos, rede e espaço de armazenamento. Vários contêineres podem ser executados a partir da mesma imagem Docker, mas cada contêiner é independente e tem seu próprio estado, processos e recursos de sistema.

## Qual a diferença entre os comandos COPY, EXPOSE e ADD?

***COPY:*** O comando COPY é usado para copiar arquivos e diretórios do sistema de arquivos do host para um contêiner Docker.

***EXPOSE:*** O comando EXPOSE é usado para informar ao Docker que um contêiner escuta em uma porta específica. 

***ADD:*** O comando ADD é usado para copiar arquivos e diretórios do sistema de arquivos do host para um contêiner Docker, assim como o comando COPY. No entanto, o comando ADD também pode extrair arquivos de um arquivo remoto e adicioná-los ao sistema de arquivos do contêiner.

## Qual a diferença entre os comandos RUN, CMD e ENTRYPOINT?

***RUN:*** O comando RUN é usado para executar comandos durante a criação de uma imagem do Docker.

***CMD:*** O comando CMD é usado para especificar o comando padrão a ser executado quando um contêiner for iniciado a partir da imagem

***Entrypoint:*** O comando ENTRYPOINT é usado para definir um executável padrão que será sempre executado quando o contêiner for iniciado

## Qual a diferença entre as estratégias de shell e exec?

***Shell:*** A estratégia shell executa comandos dentro de um shell padrão, 

***Exec:*** A estratégia exec executa comandos diretamente, sem o uso de um shell. 

A estratégia exec é considerada mais segura e mais rápida do que a estratégia shell, mas não suporta a expansão de variáveis de ambiente. A escolha entre as duas estratégias depende das necessidades específicas do caso de uso.
