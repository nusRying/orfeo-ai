# Install dependencies only when needed
FROM node:20-alpine AS deps
RUN apk add --no-progress --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Build arguments for environment variables
ARG NEXT_PUBLIC_SITE_NAME
ARG NEXT_PUBLIC_SITE_NAME_AR
ARG NEXT_PUBLIC_SITE_METADATA_TITLE
ARG NEXT_PUBLIC_SITE_METADATA_TITLE_AR
ARG NEXT_PUBLIC_SITE_METADATA_DESCRIPTION
ARG NEXT_PUBLIC_SITE_METADATA_DESCRIPTION_AR
ARG NEXT_PUBLIC_SITE_LOGO_PATH
ARG NEXT_PUBLIC_SITE_LOGO_ALT
ARG NEXT_PUBLIC_SITE_LOGO_ALT_AR
ARG NEXT_PUBLIC_SITE_EMAIL
ARG NEXT_PUBLIC_SITE_PHONE
ARG NEXT_PUBLIC_SITE_ADDRESS
ARG NEXT_PUBLIC_SITE_ADDRESS_AR
ARG NEXT_PUBLIC_SITE_BASE_PATH

# Set environment variables for the build
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
ENV NEXT_PUBLIC_SITE_NAME_AR=$NEXT_PUBLIC_SITE_NAME_AR
ENV NEXT_PUBLIC_SITE_METADATA_TITLE=$NEXT_PUBLIC_SITE_METADATA_TITLE
ENV NEXT_PUBLIC_SITE_METADATA_TITLE_AR=$NEXT_PUBLIC_SITE_METADATA_TITLE_AR
ENV NEXT_PUBLIC_SITE_METADATA_DESCRIPTION=$NEXT_PUBLIC_SITE_METADATA_DESCRIPTION
ENV NEXT_PUBLIC_SITE_METADATA_DESCRIPTION_AR=$NEXT_PUBLIC_SITE_METADATA_DESCRIPTION_AR
ENV NEXT_PUBLIC_SITE_LOGO_PATH=$NEXT_PUBLIC_SITE_LOGO_PATH
ENV NEXT_PUBLIC_SITE_LOGO_ALT=$NEXT_PUBLIC_SITE_LOGO_ALT
ENV NEXT_PUBLIC_SITE_LOGO_ALT_AR=$NEXT_PUBLIC_SITE_LOGO_ALT_AR
ENV NEXT_PUBLIC_SITE_EMAIL=$NEXT_PUBLIC_SITE_EMAIL
ENV NEXT_PUBLIC_SITE_PHONE=$NEXT_PUBLIC_SITE_PHONE
ENV NEXT_PUBLIC_SITE_ADDRESS=$NEXT_PUBLIC_SITE_ADDRESS
ENV NEXT_PUBLIC_SITE_ADDRESS_AR=$NEXT_PUBLIC_SITE_ADDRESS_AR
ENV NEXT_PUBLIC_SITE_BASE_PATH=$NEXT_PUBLIC_SITE_BASE_PATH

RUN npm run build

# Production image, copy all the files and run nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy the static export from the builder stage
COPY --from=builder /app/out .

# Add a basic nginx config to handle SPA routing if needed
# (Though for Next.js static export, it usually generates .html files)
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri.html $uri/ /index.html;\n\
    }\n\
    error_page 404 /404.html;\n\
    location = /404.html {\n\
        root /usr/share/nginx/html;\n\
        internal;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
