import { useSyncExternalStore } from "react";

export type Route = "/" | "/guide" | "/support" | "/privacy";

const ROUTES: Route[] = ["/", "/guide", "/support", "/privacy"];
const NAV_EVENT = "dolody:navigate";

function subscribe(onChange: () => void) {
	window.addEventListener("popstate", onChange);
	window.addEventListener(NAV_EVENT, onChange);
	return () => {
		window.removeEventListener("popstate", onChange);
		window.removeEventListener(NAV_EVENT, onChange);
	};
}

/** Current path with any trailing slash removed; `null` when it matches no page. */
export function usePath(): Route | null {
	const path = useSyncExternalStore(subscribe, () => window.location.pathname);
	const normalized = path.length > 1 ? path.replace(/\/+$/, "") : path;
	return ROUTES.includes(normalized as Route) ? (normalized as Route) : null;
}

export function navigate(to: string) {
	if (to === window.location.pathname) {
		window.scrollTo({ top: 0, behavior: "smooth" });
		return;
	}
	window.history.pushState(null, "", to);
	window.dispatchEvent(new Event(NAV_EVENT));
	window.scrollTo(0, 0);
}
