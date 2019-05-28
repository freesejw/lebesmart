#!/usr/bin/env bash
docker stop lebesmart
docker rm lebesmart
GIT_SSH_COMMAND='ssh -i /home/b0wter/.ssh/id_rsa_lebesmart_deploy' git pull
docker build -t b0wter/lebesmart .
docker run --name lebesmart --restart=always -d -p 8094:80 b0wter/lebesmart
