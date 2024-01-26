# O que é Kubernetes

O Kubernetes é uma plataforma de código aberto de nível
de produção que orquestra a alocação e a execução de
contêineres de aplicativos dentro de e entre clusters de
computadores.

# Imagem

Uma imagem de contêiner é um pacote de software pronto para executar, contendo tudo que é preciso para executar uma aplicação: o código e o agente de execução necessário, aplicação, bibliotecas do sistema e valores padrões para qualquer configuração essencial.

Comando:
```docker build -t k8s-basics-image ./1-image```

# Usando Minikube para criar um cluster

O Minikube é uma implementação leve do Kubernetes que cria uma VM em sua máquina local e implanta um cluster simples contendo apenas um nó.

Comandos:	```minikube start```

```minikube image load k8s-basics-image```

# Namespaces

No Kubernetes, namespaces disponibilizam um mecanismo para isolar grupos de recursos dentro de um único cluster. Nomes de recursos precisam ser únicos dentro de um namespace, porém podem se repetir em diferentes namespaces.

Comando:	```kubectl apply -f 2-namespace.yaml```

# Usando kubectl para criar um Deployment

O Deployment instrui o Kubernetes sobre como criar e atualizar instâncias do seu aplicativo. Possui um mecanismo de autocorreção para lidar com falhas ou manutenção da máquina.

Comando:	```kubectl apply -f 3-deployment.yaml```

# Visualizando Pods e Nós

Pods são a unidade atômica na plataforma Kubernetes. Quando criamos um Deployment no Kubernetes, esse Deployment cria Pods com contêineres dentro dele.

Comandos:	```kubectl get pods -n myapp```

```kubectl get nodes```

# Utilizando um Service para expor seu aplicativo

Um objeto Service do Kubernetes é uma camada de abstração que define um conjunto lógico de Pods e habilita a exposição ao tráfego externo, balanceamento de carga e descoberta de serviço para esses Pods.

Comando:	```kubectl apply -f 4-service.yaml```

# O que é o Ingress?

O Ingress expõe rotas HTTP e HTTPS de fora do cluster para um serviço dentro do cluster. O roteamento do tráfego é controlado por regras definidas no recurso Ingress.

Comandos:	```minikube addons enable ingress```

```kubectl apply -f 5-ingress.yaml```

# Demais recursos

A API do Kubernetes oferece dezenas de recursos adicionais.

Comando:	```kubectl api-resources```

# Atualizando a aplicação

Se a aplicação estiver exposta publicamente, o Service irá balancear o tráfego apenas para os Pods disponíveis durante a atualização. Um Pod disponível é aquele que está pronto para receber requisições dos usuários.

Comando:	```kubectl apply -f 3-deployment.yaml```

# Rollout

Caso alguma alteração tenha sido aplicada, mas seja necessário reiniciar a aplicação, use o subcomando rollout restart. Para voltar o deployment para a última versão funcionando, use o subcomando rollout undo.

Comandos:	```kubectl rollout restart -f 3-deployment.yaml```

```kubectl rollout undo -f 3-deployment.yaml```

# Referências
- https://kubernetes.io/docs/tutorials/kubernetes-basics/





