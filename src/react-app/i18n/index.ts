import { createContext, useContext } from "react";
import en, { type Dict } from "./en";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";

export type Lang = "en" | "zh-Hans" | "zh-Hant";

export const LANGS: { code: Lang; label: string }[] = [
	{ code: "en", label: "English" },
	{ code: "zh-Hans", label: "简体中文" },
	{ code: "zh-Hant", label: "繁體中文" },
];

export const DICTS: Record<Lang, Dict> = { en, "zh-Hans": zhHans, "zh-Hant": zhHant };

const STORAGE_KEY = "dolody.lang";

export function detectLang(): Lang {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved && saved in DICTS) return saved as Lang;
	} catch {
		// Storage unavailable (private mode etc.) — fall back to the browser language.
	}
	for (const raw of navigator.languages ?? [navigator.language]) {
		const tag = raw.toLowerCase();
		if (tag.startsWith("zh")) {
			return /hant|tw|hk|mo/.test(tag) ? "zh-Hant" : "zh-Hans";
		}
		if (tag.startsWith("en")) return "en";
	}
	return "en";
}

export function saveLang(lang: Lang) {
	try {
		localStorage.setItem(STORAGE_KEY, lang);
	} catch {
		// Not persisted; the choice still applies for this visit.
	}
}

type I18n = { lang: Lang; t: Dict; setLang: (lang: Lang) => void };

export const I18nContext = createContext<I18n>({ lang: "en", t: en, setLang: () => {} });

export const useI18n = () => useContext(I18nContext);
