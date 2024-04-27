# shadow-gen

Generate a front end with 2 containers with gteat amount of shadow, one is for user instruction input box and the other is for generated image by BossMarc AI and assume that ut have 4 images to generate per prompt. Use this api to embed on the user input submit button: curl -X POST 'https://api.getimg.ai/v1/essential/text-to-image' -H 'accept:application/json' -H 'authorization:Bearer key-xPECSj9yQdEOua7fzpqoZB7sJWaTMhMIIqRs4YIgxRfCYkVyxroKmgvOALcIA8PpQhxB00tn3r8dV95xalvlaAZvwHOl4Bz' -H 'Content-Type:application/json' -d '{
  "style": "photorealism",
  "height": 1024,
  "width": 1024,
  "output_format": "jpeg",
  "prompt": "A photo of a filipina lady holding an iphone to send Money online"
}'

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/shadow-gen.git
cd shadow-gen
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
