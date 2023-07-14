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

| Methods                      | Type                                    | Returns         | Description                         |
| ---------------------------- | :-------------------------------------- | --------------- | ----------------------------------- |
| `eightD`                     |                                         | `this`          | Enable eight-dimension audio.       |
| `bassBoost`                  |                                         | `this`          | Enable bass boost filter.           |
| `nightcore`                  |                                         | `this`          | Enable nightcore filter.            |
| `slowmo`                     |                                         | `this`          | Enable slowmo filter.               |
| `soft`                       |                                         | `this`          | Enable soft filter.                 |
| `tv`                         |                                         | `this`          | Enable tv filter.                   |
| `trebleBass`                 |                                         | `this`          | Enable treble bass filter.          |
| `vaporwave`                  |                                         | `this`          | Enable vaporwave filter.            |
| `distort`                    |                                         | `this`          | Enable distortion filter.           |
| `setEqualizer`               | [`Band[]`](#band)                       | `this`          | Set custom equalizer bands.         |
| `setKaraoke`                 | [KaraokeOptions](#karaokeoptions)       | `this`          | Set karaoke filter.                 |
| `setTimescale`               | [TimescaleOptions](#timescaleoptions)   | `this`          | Set the timescale.                  |
| `setVibrato`                 | [VibratoOptions](#vibratooptions)       | `this`          | Set the vibrato effect.             |
| `setRotation`                | [RotationOptions](#rotationoptions)     | `this`          | Set the rotation effect.            |
| `setDistortion`              | [DistortionOptions](#distortionoptions) | `this`          | Set the distortion effect.          |
| `clearFilters`               |                                         | `Promise<this>` | Clear the filters.                  |
| **Optional** `updateFilters` |                                         | `Promise<this>` | Update the filters.                 |
| `getFilterStatus`            |                                         | `boolean`       | The status of the specified filter. |

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
