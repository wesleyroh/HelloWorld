#!/usr/bin/env bash

set -e #Stop the program when there is an error
set -o nounset #Warn us if there is any unused variables
set -o pipefail #When using pipes, if one command fail, stop the program

echo "Hello world!"
