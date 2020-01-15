# Twitch Color Bot

Setup the following environment variables:

- `TWITCH_BOT_KEY` (required)
  - You can generate a key here: https://twitchapps.com/tmi/
- `TWITCH_BOT_USERNAME` (required)
- `TWITCH_BOT_COLOR_MODE`
  - Currently supports `random` and `loop`
  - Random will select a random color with varying hue, saturation, and lightness.
  - Loop will increment the hue value through the spectrum and loop.
- `TWITCH_BOT_INTERVAL`
  - Time between color changes in seconds. Default 10 seconds.

## Running locally

Install dependencies with `yarn install`.

Run app

```bash
node index.js
```

## Running on Heroku

Pretty standard Heroku deploy. It'll automatically download the dependencies via Yarn, and start the app.

However, you need to configured your app as a worker instead of a web app. You can do that via the Heroku CLI:

```bash
heroku scale web=0 worker=1
```

Additionally you'll need to setup the environment variables in the app settings under Config Vars. Click `Reveal Vars` to see the appropriate form.
