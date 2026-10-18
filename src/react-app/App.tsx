import { useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useI18n } from "./i18n";
import I18nProvider from "./i18n/I18nProvider";
import Guide from "./pages/Guide";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import { usePath } from "./router";

function Site() {
	const { t } = useI18n();
	const path = usePath();

	useEffect(() => {
		const titles = { "/guide": t.guide.title, "/support": t.support.title, "/privacy": t.privacy.title };
		document.title = path && path !== "/" ? `${titles[path]} · Dolody` : t.meta.title;
	}, [path, t]);

	return (
		<>
			<Nav path={path} />
			<main>
				{path === "/" && <Home />}
				{path === "/guide" && <Guide />}
				{path === "/support" && <Support />}
				{path === "/privacy" && <Privacy />}
				{path === null && <NotFound />}
			</main>
			<Footer />
		</>
	);
}

export default function App() {
	return (
		<I18nProvider>
			<Site />
		</I18nProvider>
	);
}
