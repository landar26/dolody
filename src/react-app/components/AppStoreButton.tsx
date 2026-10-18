import { APP_STORE_URL } from "../config";
import { useI18n } from "../i18n";
import Icon from "./Icon";

export default function AppStoreButton() {
	const { t } = useI18n();
	if (!APP_STORE_URL) {
		return (
			<span className="store-btn is-soon" aria-disabled="true">
				<Icon name="apple" size={20} />
				{t.hero.comingSoon}
			</span>
		);
	}
	return (
		<a className="store-btn" href={APP_STORE_URL} target="_blank" rel="noopener">
			<Icon name="apple" size={20} />
			{t.hero.download}
		</a>
	);
}
