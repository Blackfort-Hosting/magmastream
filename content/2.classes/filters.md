 <!-- todo: Sort in alphabetical order. By methods -->

# Filters

### Constructor

::code-group

::code-block{label="Filters" code}

```js
new Magmastream.Filters(player: Player)
```

## Properties

| Parameter | Type                        |
| --------- | :-------------------------- |
| `player`  | [Player](../classes/player) |

::
::

## Overview

| Methods                      | Type                                    | Description                   |
| ---------------------------- | :-------------------------------------- | ----------------------------- |
| `eightD`                     |                                         | Enable eight-dimension audio. |
| `bassBoost`                  |                                         | Enable bass boost filter.     |
| `nightcore`                  |                                         | Enable nightcore filter.      |
| `slowmo`                     |                                         | Enable slowmo filter.         |
| `soft`                       |                                         | Enable soft filter.           |
| `tv`                         |                                         | Enable tv filter.             |
| `trebleBass`                 |                                         | Enable treble bass filter.    |
| `vaporwave`                  |                                         | Enable vaporwave filter.      |
| `distort`                    |                                         | Enable distortion filter.     |
| `setEqualizer`               | [`Band[]`](#band)                       | Set custom equalizer bands.   |
| `setKaraoke`                 | [KaraokeOptions](#karaokeoptions)       | Set karaoke filter.           |
| `setTimescale`               | [TimescaleOptions](#timescaleoptions)   | Set the timescale.            |
| `setVibrato`                 | [VibratoOptions](#vibratooptions)       | Set the vibrato effect.       |
| `setRotation`                | [RotationOptions](#rotationoptions)     | Set the rotation effect.      |
| `setDistortion`              | [DistortionOptions](#distortionoptions) | Set the distortion effect.    |
| `clearFilters`               |                                         | Clear the filters.            |
| **Optional** `updateFilters` |                                         | Update the filters.           |

### Band

> | Properties | Type   | Description                           |
> | ---------- | :----- | ------------------------------------- |
> | band       | number | The index of the equalizer band.      |
> | gain       | number | The gain value of the equalizer band. |

### KaraokeOptions

> | Properties  | Type   | Description                         |
> | ----------- | :----- | ----------------------------------- |
> | level       | number | The level of karaoke effect.        |
> | monoLevel   | number | The mono level of karaoke effect.   |
> | filterBand  | number | The filter band of karaoke effect.  |
> | filterWidth | number | The filter width of karaoke effect. |

### TimescaleOptions

> | Properties | Type   | Description                         |
> | ---------- | :----- | ----------------------------------- |
> | speed      | number | The speed factor for the timescale. |
> | pitch      | number | The pitch factor for the timescale. |
> | rate       | number | The rate factor for the timescale.  |

### VibratoOptions

> | Properties | Type   | Description                         |
> | ---------- | :----- | ----------------------------------- |
> | speed      | number | The speed factor for the timescale. |
> | pitch      | number | The pitch factor for the timescale. |
> | rate       | number | The rate factor for the timescale.  |

### RotationOptions

> | Properties | Type   | Description                       |
> | ---------- | :----- | --------------------------------- |
> | rotationHz | number | The rotation speed in Hertz (Hz). |

### DistortionOptions

> | Properties | Type   |
> | ---------- | :----- |
> | sinOffset  | number |
> | sinScale   | number |
> | cosOffset  | number |
> | cosScale   | number |
> | tanOffset  | number |
> | tanScale   | number |
> | offset     | number |
> | scale      | number |
