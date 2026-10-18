import { useEffect, useState, type ReactNode } from "react";
import { DICTS, I18nContext, detectLang, saveLang, type Lang } from ".";

export default function I18nProvider({ children }: { children: ReactNode }) {
	const [lang, setLangState] = useState<Lang>(detectLang);
	const t = DICTS[lang];

	useEffect(() => {
		document.documentElement.lang = lang;
		document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
	}, [lang, t]);

	const setLang = (next: Lang) => {
		saveLang(next);
		setLangState(next);
	};

	return <I18nContext.Provider value={{ lang, t, setLang }}>{children}</I18nContext.Provider>;
}
