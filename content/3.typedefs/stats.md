# Stats

#### CPUStats

| Properties     | Type     | Description                             |
| -------------- | :------- | --------------------------------------- |
| `cores`        | `number` | `The core amount the host machine has.` |
| `lavalinkLoad` | `number` | `The lavalink load.`                    |
| `systemLoad`   | `number` | `The system load.`                      |

#### FrameStats

| Properties | Type     | Description                     |
| ---------- | :------- | ------------------------------- |
| `deficit`  | `number` | `The amount of deficit frames.` |
| `nulled`   | `number` | `The amount of nulled frames.`  |
| `sent`     | `number` | `The amount of sent frames.`    |

#### MemoryStats

| Properties   | Type     | Description                                |
| ------------ | :------- | ------------------------------------------ |
| `allocated`  | `number` | `The total allocated memory.`              |
| `free`       | `number` | `The free memory of the allocated amount.` |
| `reservable` | `number` | `The reservable memory.`                   |
| `used`       | `number` | `The used memory of the allocated amount.` |
