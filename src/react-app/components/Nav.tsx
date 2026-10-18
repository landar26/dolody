import AppIcon from "./AppIcon";
import { LANGS, useI18n, type Lang } from "../i18n";
import type { Route } from "../router";
import Icon from "./Icon";
import Link from "./Link";

export default function Nav({ path }: { path: Route | null }) {
	const { t, lang, setLang } = useI18n();
	const links: { to: Route; label: string }[] = [
		{ to: "/guide", label: t.nav.guide },
		{ to: "/support", label: t.nav.support },
	];
	return (
		<header className="nav">
			<div className="container nav-inner">
				<Link to="/" className="brand" aria-label="Dolody">
					<AppIcon size={36} className="brand-icon" />
					<span>Dolody</span>
				</Link>
				<nav className="nav-links">
					{links.map((l) => (
						<Link key={l.to} to={l.to} className={path === l.to ? "is-active" : undefined}>
							{l.label}
						</Link>
					))}
					<label className="lang-switch">
						<Icon name="globe" size={18} />
						<span className="sr-only">{t.nav.language}</span>
						<select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
							{LANGS.map((l) => (
								<option key={l.code} value={l.code}>
									{l.label}
								</option>
							))}
						</select>
					</label>
				</nav>
			</div>
		</header>
	);
}
