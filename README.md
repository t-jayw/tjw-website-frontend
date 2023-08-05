This is my website. It's a react project. It's intended to be deployed as a docker container. There is a sister repo that contains terraform for hosting a docker container like this on ECS. 

It works best when this and the infra repo are at the same level and then the deploy script below can be run 

```
#!/bin/bash

# Variables
REGION="us-east-1" # replace with your region
PROFILE="default" # replace with your AWS profile name
REPO_NAME="tjw-website" # replace with your app name
ACCOUNT_ID="615504954439"

# Get the login command from ECR and execute it directly
aws ecr get-login-password --region $REGION --profile $PROFILE | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com


docker buildx build --platform=linux/amd64 -t <image_name>:<version>-amd64
docker buildx build --platform=linux/amd64 -t tjw-website frontend

# Build the Docker image (replace '.' with your Dockerfile location)
docker buildx build --platform=linux/amd64 -t $REPO_NAME frontend

# Tag the Docker image
docker tag $REPO_NAME:latest $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:latest

# Push the Docker image

docker push $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:latest


aws ecs update-service --cluster tjw-website-cluster --service tjw-website-service --force-new-deployment
```
