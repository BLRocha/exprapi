#!/bin/bash

############################################################
#                                                          #
#   para usar o script é necessario ter o docker instalado #
#   assim como yarn e dependencias no projeto.             #
#                                                          #
############################################################



docker-compose -f pgdev.yml down 2>&1 /dev/null
docker-compose -f pgdev.yml up -d 2> /dev/null

yarn orm migration:revert 2>&1 /dev/null
yarn orm migration:run 2> /dev/null

tsc --watch & yarn dev

exit 0