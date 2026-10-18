import AppStoreButton from "../components/AppStoreButton";
import Icon, { type IconName } from "../components/Icon";
import Link from "../components/Link";
import PhoneMock from "../components/PhoneMock";
import { useI18n } from "../i18n";

const FEATURE_ICONS: IconName[] = ["import", "lyrics", "tag", "list", "eq", "moon", "search", "contrast"];
const PITCH_ICONS: IconName[] = ["phone", "user", "eye"];

export default function Home() {
	const { t } = useI18n();
	return (
		<>
			<section className="hero container">
				<div className="hero-copy">
					<p className="eyebrow">{t.hero.eyebrow}</p>
					<h1>{t.hero.title}</h1>
					<p className="lede">{t.hero.subtitle}</p>
					<div className="hero-actions">
						<AppStoreButton />
						<Link to="/guide" className="text-link">
							<Icon name="wifi" size={18} />
							{t.hero.guideLink}
							<Icon name="chevron" size={16} />
						</Link>
					</div>
				</div>
				<PhoneMock />
			</section>

			<section className="section container">
				<header className="section-head">
					<h2>{t.features.title}</h2>
					<p>{t.features.subtitle}</p>
				</header>
				<div className="feature-grid">
					{t.features.items.map((item, i) => (
						<article key={item.title} className="card">
							<span className="icon-well">
								<Icon name={FEATURE_ICONS[i]} />
							</span>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section container">
				<div className="pitch card">
					<h2>{t.pitch.title}</h2>
					<div className="pitch-grid">
						{t.pitch.items.map((item, i) => (
							<div key={item.title} className="pitch-item">
								<span className="icon-well is-accent">
									<Icon name={PITCH_ICONS[i]} />
								</span>
								<div>
									<h3>{item.title}</h3>
									<p>{item.body}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section container cta">
				<h2>{t.cta.title}</h2>
				<p>{t.cta.body}</p>
				<AppStoreButton />
			</section>
		</>
	);
}
