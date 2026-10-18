import type { QA } from "../i18n/en";

export default function FAQ({ items }: { items: QA[] }) {
	return (
		<div className="faq">
			{items.map((item) => (
				<details key={item.q} className="card faq-item">
					<summary>{item.q}</summary>
					<p>{item.a}</p>
				</details>
			))}
		</div>
	);
}
