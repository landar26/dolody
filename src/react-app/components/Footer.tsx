import AppIcon from "./AppIcon";
import { SUPPORT_EMAIL } from "../config";
import { useI18n } from "../i18n";
import Link from "./Link";

export default function Footer() {
	const { t } = useI18n();
	return (
		<footer className="footer">
			<div className="container footer-inner">
				<div className="footer-brand">
					<AppIcon size={28} className="brand-icon" />
					<div>
						<strong>Dolody</strong>
						<p>{t.footer.tagline}</p>
					</div>
				</div>
				<nav className="footer-links">
					<Link to="/guide">{t.nav.guide}</Link>
					<Link to="/support">{t.nav.support}</Link>
					<Link to="/privacy">{t.nav.privacy}</Link>
					<a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
				</nav>
				<p className="footer-copy">
					© {new Date().getFullYear()} Dolody. {t.footer.rights}
				</p>
			</div>
		</footer>
	);
}
