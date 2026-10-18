import FAQ from "../components/FAQ";
import Icon from "../components/Icon";
import { SUPPORT_EMAIL } from "../config";
import { useI18n } from "../i18n";

export default function Support() {
	const { t } = useI18n();
	const s = t.support;
	return (
		<article className="page container">
			<header className="page-head">
				<h1>{s.title}</h1>
				<p className="lede">{s.intro}</p>
			</header>

			<h2>{s.faqTitle}</h2>
			<FAQ items={s.faq} />

			<section className="card contact">
				<span className="icon-well is-accent">
					<Icon name="mail" />
				</span>
				<div>
					<h2>{s.contactTitle}</h2>
					<p>{s.contactBody}</p>
					<a className="mail-link" href={`mailto:${SUPPORT_EMAIL}`}>
						{SUPPORT_EMAIL}
					</a>
				</div>
			</section>
		</article>
	);
}
