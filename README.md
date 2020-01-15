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

## Running the app

Install dependencies with `yarn install`.

Run app

```bash
node index.js
```
