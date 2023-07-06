# TrackExceptionEvent

### Overview

| Properties              |
| ----------------------- |
| [exception](#exception) |
| [guildId](#guildid)     |
| [op](#op)               |
| [type](#type)           |

#### • exception

> | Type                     |
> | ------------------------ |
> | [Exception](#_exception) |

#### • guildId

> | Type   |
> | ------ |
> | string |

#### • op

> | Value |
> | ----- |
> | event |

#### • type

> | Value               |
> | ------------------- |
> | TrackExceptionEvent |

### \_Exception

> | Properties | Type                  |
> | ---------- | --------------------- |
> | cause      | string                |
> | message    | string                |
> | severity   | [Severity](#severity) |

### Severity

> **Value:** `COMMON` `SUSPICIOUS` `FAULT`
