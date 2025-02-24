#!/bin/bash
: "${TOKEN:=dev}" # default dev
PROJECT_NAME="euler-tokenlist-v2"

# Download secrets and store them in a temporary file
doppler setup -p $PROJECT_NAME --config $TOKEN && doppler secrets download --no-file --format env > .env