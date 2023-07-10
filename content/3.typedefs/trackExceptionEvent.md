# TrackExceptionEvent

### Overview

| Properties  | Type                    | Value                 |
| ----------- | ----------------------- | --------------------- |
| `exception` | [Exception](#exception) |                       |
| `guildId`   | `string`                |                       |
| `op`        |                         | `event`               |
| `type`      |                         | `TrackExceptionEvent` |

### Exception

> | Properties | Type                  |
> | ---------- | --------------------- |
> | cause      | string                |
> | message    | string                |
> | severity   | [Severity](#severity) |

### Severity

> **Value:** `common` `suspicious` `fault`
