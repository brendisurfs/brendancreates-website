import { writable } from "svelte/store";

export let overlay = writable(false);

export let isMobileState: boolean;
// isMobile state
if (/android|webOS|iPhone|iPad/i.test(navigator.userAgent)) {
	isMobileState = true;
} else {
	isMobileState = false;
}
