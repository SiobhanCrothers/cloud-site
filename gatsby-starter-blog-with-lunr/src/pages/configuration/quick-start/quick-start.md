---
templateKey: 'quick-start'
path: /quick-start
title: Introduction
slug: quick-start
date: 2023-09-01T21:04:00.682Z
tags:
  - question
---

This guide is intended to be a quickstart that allows you to get going with Bravura Cloud. It will walk you through the steps of

* Planning out what environment you want to start with. Its strongly advised you consider a Lab or UAT environment where you can explore the capabilities of the platform and once you are comfortable evaluate if you would like to run it against production resources.

* Installing Bravura Cloud locally for your evaluation.
* Discovery: Discovering the identities in your enviornment. Their attributes. Their group memberships. etc. 
* Cleansing: Cleaning up orphaned accounts. Inappropriate entitlements. Incorrect identity attributes. 
* Inventory: Navigating your identity inventory. Understanding your current state. 
* Governing: Establishing a continual monitoring plan so you can be notified of changes in your identity inventory. 

For background, please see our topics on
* What is identity discovery
* What is identity cleansing
* What is identity inventory
* What is identity governance


## Planning

Its recommended that you start your Bravura Cloud journey in a lab or user acceptance test environment. Characteristics of a lab is it should have:

* A set of systems that represent your mission critical applications. For example, an Active Directory, Ldap, or testing tenants 
* A set of users that represent your population. End users. Administrators. System accounts. Shared accounts. etc.
* A set of entitlements that represent your population. Groups, roles, memberships. 

To run Bravura Cloud in a lab environment you will need an
* A linux virtual machine
* Ability to install packages on the linux machine such as minicube from the internet. 
* Ability to pull docker images from docker repositories on the internet. 

## Installation

To install bravura cloud in your local lab environment please follow the below steps:

1. Install docker 

1.1. Docker GPG key:

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

1.2. Docker repository:

`echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list`

1.3. Docker dependencies:

`sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y`

1.4. Install Docker:

`sudo apt-get install docker-ce docker-ce-cli containerd.io -y`

1.5. Add yourself to the docker group (optional):

`sudo usermod -aG docker $USER`

2. Install Minikube

2.1. Fetch Minikube:

`wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64`

2.2. Place Minikube on the path:

`sudo cp minikube-linux-amd64 /usr/local/bin/minikube`

2.3. Fetch kubectl:

```curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl```

2.3. Make kubectl executable:

`chmod +x kubectl`

`sudo chmod 755 /usr/local/bin/minikube`

2.4. Place kubectl on the path:

`sudo mv kubectl /usr/local/bin/`

2.4. Start a Kubernetes cluster for the first time:

`minikube start --driver=docker`

3. Install Helm

`curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null`

`sudo apt-get install apt-transport-https --yes`

`echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list`

`sudo apt-get update`

`sudo apt-get install helm`


4. Install Bravura Cloud containers
The following demonstrates how to run the core services via its umbrella chart.

4.1 Start a Kubernetes cluster:

`minikube start`

4.2 Deploy:

`helm install core core/`

4.3 Enable accessing resources:

`minikube tunnel`

For additional steps and best practices for maintaining this Bravura Cloud deployment pleases see <REF TO DOCS>

## Discovery

## Cleansing

## Governance




