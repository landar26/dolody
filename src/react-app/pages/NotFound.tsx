import Link from "../components/Link";
import { useI18n } from "../i18n";

export default function NotFound() {
	const { t } = useI18n();
	return (
		<article className="page container not-found">
			<h1>404</h1>
			<p className="lede">{t.notFound.title}</p>
			<Link to="/" className="text-link">
				{t.notFound.back}
			</Link>
		</article>
	);
}
