const tmi = require("tmi.js");
const convert = require("color-convert");
const chalk = require("chalk");

let hue = 0;
let sat = 66;
let light = 55;

let connected = false;

if (!process.env.TWITCH_BOT_KEY || !process.env.TWITCH_BOT_USERNAME) {
  console.log(
    "TWITCH_BOT_KEY and TWITCH_BOT_USERNAME must be available as environment variables"
  );
  process.exit(1);
}

const colorMode = process.env.TWITCH_BOT_COLOR_MODE || "loop";

const client = new tmi.Client({
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_BOT_KEY
  },
  channels: [process.env.TWITCH_BOT_USERNAME.toLowerCase()]
});

client.on("connected", onConnected);
client.on("disconnected", onDisconnected);

client.connect();

function onConnected(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  updateColor();

  connected = true;
}

function onDisconnected(reason) {
  console.log(`* Disconnected: ${reason}`);

  connected = false;
}

function generateRandomColor() {
  hue = Math.floor(Math.random() * 360);
  sat = 20 + Math.floor(Math.random() * 60);
  light = 40 + Math.floor(Math.random() * 40);
}

function incrementColorLoop() {
  if (hue < 351) {
    hue += 2;
  } else {
    hue = 0;
  }
}

function updateColor() {
  if (!connected) {
    console.log('tried to update color while not connected.');
    return;
  }

  if (colorMode === "random") {
    generateRandomColor();
  } else {
    incrementColorLoop();
  }

  const color = convert.hsl.hex(hue, sat, light);
  console.log(
    `* Updating username color to`,
    chalk.hex(`#${color}`)(`#${color}`)
  );
  client.color(`#${color}`);
}

const intervalTime = process.env.TWITCH_BOT_INTERVAL * 1000 || 10000;

interval = setInterval(function () {
  updateColor();
}, intervalTime);
