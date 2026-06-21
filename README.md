<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/48e339ed-7d03-4ccc-a8d9-5559edb7e03b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Google Cloud Run

This project includes a `Dockerfile` and an Express server (`server.js`) configured to run the production build and listen to the dynamic port required by Cloud Run.

### Prerequisites
1. Install the [Google Cloud CLI](https://cloud.google.com/sdk/gcloud).
2. Authenticate the CLI with your Google account:
   `gcloud auth login`
3. Set your active Google Cloud project:
   `gcloud config set project <YOUR_PROJECT_ID>`

### Deployment Command

Deploy directly from source (which builds the image using the `Dockerfile` on Cloud Build and deploys it to Cloud Run):

```bash
gcloud run deploy suela-ba-e-author-website-1018987849373 \
  --source . \
  --port 8080 \
  --allow-unauthenticated \
  --region us-east1
```

*Note: Replace `suela-ba-e-author-website-1018987849373` and `us-east1` with your actual service name and preferred Google Cloud region if they differ.*
