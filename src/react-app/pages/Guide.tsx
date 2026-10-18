import FAQ from "../components/FAQ";
import Icon from "../components/Icon";
import { useI18n } from "../i18n";

export default function Guide() {
	const { t } = useI18n();
	const g = t.guide;
	return (
		<article className="page container">
			<header className="page-head">
				<span className="icon-well is-accent is-large">
					<Icon name="wifi" size={28} />
				</span>
				<h1>{g.title}</h1>
				<p className="lede">{g.intro}</p>
			</header>

			<h2>{g.stepsTitle}</h2>
			<ol className="steps">
				{g.steps.map((step, i) => (
					<li key={step.title} className="card step">
						<span className="step-num">{i + 1}</span>
						<div>
							<h3>{step.title}</h3>
							<p>{step.body}</p>
						</div>
					</li>
				))}
			</ol>

			<div className="card inset note">
				<h3>{g.formatsTitle}</h3>
				<p>{g.formats}</p>
				<p className="muted">{g.localNote}</p>
			</div>

			<h2>{g.troubleTitle}</h2>
			<FAQ items={g.trouble} />
		</article>
	);
}
