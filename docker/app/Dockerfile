FROM node:22-bullseye-slim as base

WORKDIR /workspace

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

# ===================================================

FROM base as app

EXPOSE 3000

CMD ["npm", "run", "dev"] 

# ===================================================

FROM base as storybook

# Storybook dependencies
RUN apt-get update && apt-get install -y xdg-utils

# Storybook test runner dependencies
RUN npx playwright install --with-deps

EXPOSE 6006

CMD ["npm", "run", "storybook"]

# ===================================================
