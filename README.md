# Avexa React Application

Avexa is a modern AI-powered health assistant web application built with React and TypeScript. This project aims to provide users with an intuitive interface to interact with Avexa's AI health guidance system.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Production Deployment

### Container Deployment

The application can be deployed using Docker and Kubernetes. A Dockerfile is provided in the repository.

#### Building the Docker Image

To build and push the Docker image:

```bash
# Build the image
docker build -t registry.example.com/rocketbyte/avexa-react:latest .

# Push to registry
docker push registry.example.com/rocketbyte/avexa-react:latest
```

### Kubernetes Deployment

The application includes a Helm chart for Kubernetes deployment in the `/k3s/charts/avexa-react` directory.

#### Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+
- Traefik ingress controller installed in the cluster

#### Deploying with Helm

Deploy to the "rocket" namespace:

```bash
# Install the chart
helm install avexa-react ./k3s/charts/avexa-react --namespace rocket

# For custom configuration
helm install avexa-react ./k3s/charts/avexa-react -f values-prod.yaml --namespace rocket
```

#### Updating the Deployment

To update an existing deployment:

```bash
helm upgrade avexa-react ./k3s/charts/avexa-react --namespace rocket
```

#### Configuration Options

See the [Helm chart documentation](/k3s/charts/avexa-react/README.md) for detailed configuration options.

### CI/CD Pipeline

This project includes a GitHub Actions workflow in `.github/workflows/ci-cd.yaml` that:

1. Runs linting and tests
2. Builds and pushes the Docker image
3. Deploys to Kubernetes using Helm
4. Sends notifications on deployment status

## Environment Configuration

The application can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API URL | `https://api.example.com` |
| `REACT_APP_ENV` | Environment name | `production` |

These can be set in the Helm chart values:

```yaml
env:
  - name: REACT_APP_API_URL
    value: https://api.rocketbyte.com
  - name: REACT_APP_ENV
    value: production
```

## Security

- HTTPS enforced via Ingress configuration
- React security best practices implemented
- Container runs as non-root user
- ReadOnlyRootFilesystem enabled
- Secure pod security contexts applied

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).