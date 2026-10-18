import AppIcon from "./AppIcon";
import { useI18n } from "../i18n";

/** Stylized Now Playing screen standing in for a real screenshot. */
export default function PhoneMock() {
	const { t } = useI18n();
	return (
		<div className="phone" aria-hidden="true">
			<div className="phone-screen">
				<div className="phone-notch" />
				<p className="phone-label">{t.mock.nowPlaying}</p>
				<div className="phone-art">
					<div className="phone-art-ring">
						<AppIcon size={120} />
					</div>
				</div>
				<div className="phone-meta">
					<strong>{t.mock.song}</strong>
					<span>{t.mock.artist}</span>
				</div>
				<ul className="phone-lyrics">
					{t.mock.lyrics.map((line, i) => (
						<li key={line} className={i === 1 ? "is-current" : undefined}>
							{line}
						</li>
					))}
				</ul>
				<div className="phone-progress">
					<span style={{ width: "38%" }} />
				</div>
				<div className="phone-controls">
					<span className="ctl">
						<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 6h2v12H6zM20 6v12l-10-6z" /></svg>
					</span>
					<span className="ctl ctl-main">
						<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
					</span>
					<span className="ctl">
						<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 6h2v12h-2zM4 6v12l10-6z" /></svg>
					</span>
				</div>
			</div>
		</div>
	);
}
