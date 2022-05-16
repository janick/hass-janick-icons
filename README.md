[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

# hass-janick-icons

Custom icon pack designed for Home Assistant for personal use

## Content

<img src="./svg/rowing-machine.svg" height=24> rowing-machine<br />
<img src="./svg/rowing-on-machine.svg" height=24> rowing-on-machine<br />

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
The icons use the prefix `janick:`.

Example:

```
type: entity
icon: 'janick:rowing-machine'
```

## Designing New Icons with InkScape

* Use a 24x24 pixel canvas, with "Checkerboard background" (see 'Document Properties').
* Set stroke style to "undefined" (select the "?" icon)
* Set the fill style to "Filled" so the final result will be visible.
* Merge overlapping paths using "Path->Union".
* Combine non-overlapping paths using "Path->Combine".
* Save as "Optimized SVG".
* Add an entry for the new icon in dist/hass-janick-icons.js, using the content of the <path d="..."/> attribute from the SVG file as the 'path' property. The SVG files are included for reference and templating purposes. They are not actually used in the HACS installation.

## Thanks
Thanks to https://github.com/kongo09/hass-kongo09-icons and https://github.com/arallsopp/hass-hue-icons as a template for this pack
