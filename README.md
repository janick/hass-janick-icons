[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# hass-janick-icons

Custom icon pack designed for Home Assistant for personal use

## Content

![Preview](./svg/rowing-machine.svg) rowing-machine<br />

## Install

### HACS
Add `https://github.com/janick/hass-janick-icons` as custom-repository for a Lovelace plugin in [HACS](https://hacs.xyz/docs/faq/custom_repositories/)

### Manual
Copy the `hass-janick-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/hass-janick-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/hass-janick-icons.js
```

Restart home-assistant.

## Using
The icons uses the prefix `janick:`.

Example:

```
type: entity
icon: 'janick:rowing-machine'
```

## Thanks
Thanks to @kongo09, as I used his hass-kongo09-icons as a template for this pack
