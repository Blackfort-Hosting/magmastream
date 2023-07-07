# Structure

## Overview

| Methods                  |
| ------------------------ |
| [extend](#static-extend) |
| [get](#static-get)       |

## Methods

#### • `static` extend()

> Extends a class.
>
> **Type Parameters:**
>
> - K: keyof [Extendable](#extendable)
> - T: [`Extendable[K]`](#extendable)
>
> | Parameter | Type                                        |
> | --------- | :------------------------------------------ |
> | name      | K                                           |
> | extender  | (target: [`Extendable[k]`](#extendable)): T |

#### • `static` get()

> Get a structure from available structures by name.
>
> **Type Parameters:**
>
> - K: keyof [Extendable](#extendable)
>
> Returns: [`Extendable[K]`](#extendable)
>
> | Parameter | Type |
> | --------- | :--- |
> | name      | K    |
