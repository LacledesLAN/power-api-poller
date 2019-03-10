# Power API Poller

## The What

This app pulls feeds from Emoncms and pushes the data into an InfluxDB instance.

## The Why

At Laclede's LAN events we have a LOT of electrical power getting moved around.  Somewhere around 300 amps at our current event size.

All of this power is three phase power which means each of our power boxes effectivly has 2 "legs" of outgoing power.  To monitor the amperage draw on each box we use some open source software connected to a Raspberry Pi with some electrical power monitoring probles attached.

Emoncms has a provided UI, but it isn't as customizable as more enterprise grade monitoring and alerting tools (our choice being Grafana).

## Running Locally

- Clone this repo
- Run `npm i`
- Set the required environment variables:
  - `API_KEY` - The Emoncms api key used to talk to the local Emoncms api
  - `INFLUX_USER` - User name of an InfluxDB user with write permissions
  - `INFLUX_PASSWORD` - Password of the provided user
- Optional environment variabes:
  - `EMONCMS_HOST` - The hostname of Emoncms + `/emoncms`
  - `INFLUX_HOST` - The host of the influx DB without the protocal.  Include any ports as needed as well
  - `INFLUX_DB` - The name of the InfluxDB database to use. Defaults to `power`
  - `INFLUX_PROTOCAL` - The protocal to use when talking to InfluxDB.  Defaults to `http`
- Run `npm start`

The list of feeds from Emoncms will be cached for 10 minutes.
Datapoints will be polled every 10 seconds and sent to InfluxDB

## Running in Docker

`Coming soon`