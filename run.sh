#!/usr/bin/env bash
docker stop lebesmart
docker rm lebesmart
GIT_SSH_COMMAND='ssh -i /home/b0wter/.ssh/id_ed25519_gutsman_lebesmart_deployment' git pull
docker build -t b0wter/lebesmart .
docker run --name lebesmart --restart=always -d -p 8094:80 b0wter/lebesmart
