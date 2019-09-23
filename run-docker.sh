#!/bin/bash

echo "Docker Login"
sudo docker login --username=$4 --password $5 $3
echo "Dokcer Pull"
sudo docker pull $1
echo "Run Docker"
if [ $(docker ps -aq --filter name=^/$2$) ]; then docker stop $2 && docker rm $2;fi;
docker run -d  --restart=always --name $2 -p $6:80 $1
echo "Finished."