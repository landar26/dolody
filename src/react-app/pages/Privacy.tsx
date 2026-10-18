import { SUPPORT_EMAIL } from "../config";
import { useI18n } from "../i18n";

export default function Privacy() {
	const { t } = useI18n();
	const p = t.privacy;
	return (
		<article className="page container prose">
			<header className="page-head">
				<h1>{p.title}</h1>
				<p className="muted">{p.updated}</p>
				<p className="lede">{p.intro}</p>
			</header>
			{p.sections.map((section) => (
				<section key={section.title}>
					<h2>{section.title}</h2>
					{section.body.map((para) => (
						<p key={para}>{para}</p>
					))}
				</section>
			))}
			<section>
				<h2>{p.contactTitle}</h2>
				<p>
					{p.contactBody} <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
				</p>
			</section>
		</article>
	);
}
