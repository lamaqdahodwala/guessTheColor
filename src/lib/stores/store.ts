import { readable, writable } from "svelte/store";
import { RandomColorFactory } from "$lib/helpers/generateRandomColor";
import { Color } from "$lib/interfaces/Color";

export let actual_color = writable(RandomColorFactory.generateRandomColor())
export let guessed_color = writable(new Color(0, 0, 0))

