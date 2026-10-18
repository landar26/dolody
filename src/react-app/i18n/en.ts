export type Item = { title: string; body: string };
export type QA = { q: string; a: string };

const en = {
	meta: {
		title: "Dolody — A music player for your own songs",
		description:
			"Dolody plays the music you own. Import from Files or over Wi-Fi, with lyrics, playlists, equalizer and sleep timer. No account, no tracking.",
	},
	nav: {
		home: "Home",
		guide: "Wi-Fi Transfer",
		support: "Support",
		privacy: "Privacy",
		language: "Language",
	},
	hero: {
		eyebrow: "Music player for iPhone",
		title: "Your music,\nright on your phone.",
		subtitle:
			"Dolody plays the songs you own. Bring in MP3, FLAC and more from Files or straight from your computer over Wi-Fi — lyrics, artwork and playlists included.",
		comingSoon: "Coming soon to the App Store",
		download: "Download on the App Store",
		guideLink: "How Wi-Fi Transfer works",
	},
	mock: {
		nowPlaying: "Now Playing",
		song: "Evening Breeze",
		artist: "Unknown Artist",
		lyrics: [
			"Streetlights hum a quiet tune",
			"The evening breeze is coming soon",
			"Every song I keep with me",
			"Plays the way it's meant to be",
		],
	},
	features: {
		title: "Everything a music player should do",
		subtitle: "And nothing it shouldn't. No subscriptions, no ads, no streaming catalog — just your library.",
		items: [
			{
				title: "Import from anywhere",
				body: "MP3, M4A, AAC, FLAC, WAV and AIFF from the Files app, or send songs from your computer's browser over Wi-Fi.",
			},
			{
				title: "Lyrics that follow along",
				body: "Matching .lrc files are paired automatically. Missing lyrics? Search LRCLIB in one tap and scroll in sync.",
			},
			{
				title: "Tidy song info",
				body: "Fix titles, artists and albums, or find details and artwork on iTunes — for one song or a whole album.",
			},
			{
				title: "Playlists & queue",
				body: "Gather favorites into playlists, reorder them, and use Play Next or Add to Queue on any song.",
			},
			{
				title: "Equalizer",
				body: "Presets for Pop, Rock, Classical, Electronic, Vocal, Acoustic and Bass Boost.",
			},
			{
				title: "Sleep timer",
				body: "Stop after a set number of minutes, or right when the current song ends.",
			},
			{
				title: "Instant search",
				body: "Everything is on your device, so finding songs, artists and albums is immediate.",
			},
			{
				title: "Light & dark",
				body: "A soft, tactile design that follows your system appearance — or pick one yourself.",
			},
		] as Item[],
	},
	pitch: {
		title: "Private by design",
		items: [
			{ title: "Stays on your phone", body: "Your music and lyrics are stored only on your device." },
			{ title: "No account", body: "Open the app and play. There's nothing to sign up for." },
			{ title: "No tracking", body: "No analytics, no ads, no third-party SDKs." },
		] as Item[],
	},
	cta: {
		title: "Bring your music home.",
		body: "Dolody is coming to iPhone soon.",
	},
	guide: {
		title: "Wi-Fi Transfer",
		intro: "Send songs from your computer to Dolody without cables, cloud drives or extra software — just a web browser.",
		stepsTitle: "Step by step",
		steps: [
			{
				title: "Join the same Wi-Fi",
				body: "Make sure your iPhone and computer are connected to the same Wi-Fi network.",
			},
			{
				title: "Open Wi-Fi Transfer",
				body: "In Dolody, tap the “+” button in Library and choose “Wi-Fi Transfer”. The first time, allow Dolody to access your local network.",
			},
			{
				title: "Visit the address",
				body: "Dolody shows an address like http://192.168.1.23. Type it into any browser on your computer — tap “Copy Address” to share it easily.",
			},
			{
				title: "Drop your songs",
				body: "Drag songs onto the page or click “Choose Files”. Include .lrc files with the same name and lyrics are paired automatically.",
			},
			{
				title: "Keep the page open",
				body: "Stay on the transfer screen on your phone until uploading finishes. Imported songs appear in your library right away.",
			},
		] as Item[],
		formatsTitle: "Supported files",
		formats: "MP3, M4A, AAC, FLAC, WAV, AIFF, plus matching .lrc lyrics",
		localNote: "Files stay on your local network and never pass through a server.",
		troubleTitle: "Troubleshooting",
		trouble: [
			{
				q: "The page won't load on my computer",
				a: "Check that both devices are on the same Wi-Fi (not a guest network or VPN), and that Local Network access is enabled for Dolody in iOS Settings › Privacy & Security › Local Network.",
			},
			{
				q: "“Connection lost” during upload",
				a: "iOS pauses the transfer service when Dolody leaves the screen or the phone locks. Return to the Wi-Fi Transfer screen and upload the remaining files again.",
			},
			{
				q: "Some files were skipped",
				a: "Songs already in your library are skipped as duplicates. Files in unsupported formats are reported as failed.",
			},
		] as QA[],
	},
	support: {
		title: "Support",
		intro: "Answers to common questions. Can't find what you need? Write to us.",
		faqTitle: "Frequently asked questions",
		faq: [
			{
				q: "Which audio formats does Dolody play?",
				a: "MP3, M4A, AAC, FLAC, WAV and AIFF.",
			},
			{
				q: "How do I add music?",
				a: "Tap “+” in Library, then “Import from Files” to pick songs from the Files app, iCloud Drive or any storage provider, or use Wi-Fi Transfer to send them from a computer.",
			},
			{
				q: "How are lyrics matched?",
				a: "An .lrc file with the same name as a song is attached to it when you import them together. You can also import an .lrc for a single song, or choose “Search Lyrics…” from the song's menu to find synced lyrics on LRCLIB.",
			},
			{
				q: "How do I fix a song's title, artist or artwork?",
				a: "Choose “Edit Info…” from the song's “…” menu (or “Edit Album Info…” on an album). Tap “Search Online” to fill details and artwork from iTunes, or add artwork from Photos or Files.",
			},
			{
				q: "Music stops when I lock my phone",
				a: "Make sure “Background Playback” is on in Settings. When it's off, music pauses whenever you leave Dolody or lock the phone.",
			},
			{
				q: "Does deleting a playlist delete the songs?",
				a: "No. Deleting a playlist keeps the songs in your library. To remove a song entirely, choose “Delete from Library” from its menu — this can't be undone.",
			},
			{
				q: "Does Dolody stream music or need an account?",
				a: "No. Dolody plays files you already own and works offline. The internet is only used when you search for lyrics or song info.",
			},
		] as QA[],
		contactTitle: "Contact us",
		contactBody: "Questions, bug reports and feature ideas are all welcome. Please include your iOS version and Dolody version (shown in the side menu).",
	},
	privacy: {
		title: "Privacy Policy",
		updated: "Effective October 18, 2026",
		intro: "Dolody is built to keep your music private. This policy explains what the app does — and doesn't do — with your information.",
		sections: [
			{
				title: "Information we collect",
				body: [
					"None. Dolody has no accounts, no analytics, no advertising and no third-party tracking SDKs. We do not collect, store or sell any personal data.",
				],
			},
			{
				title: "Your music and lyrics",
				body: [
					"Songs, lyrics, artwork, playlists and settings are stored only on your device, inside Dolody's app storage. They are never uploaded to us. Deleting the app removes them.",
				],
			},
			{
				title: "Online lookups you start",
				body: [
					"When you choose to search lyrics, Dolody sends the song title, artist and similar search terms to LRCLIB (lrclib.net).",
					"When you choose “Search Online” in Edit Info, Dolody sends your search terms to the Apple iTunes Search API (itunes.apple.com) and downloads the artwork you select.",
					"These requests happen only when you tap them and contain no personal identifiers. The services' own privacy policies apply to the requests they receive.",
				],
			},
			{
				title: "Wi-Fi Transfer and local network",
				body: [
					"Wi-Fi Transfer runs a small web server on your iPhone only while the transfer screen is open. Files travel directly from your computer to your phone over your local network and never pass through any server. Dolody asks for Local Network permission solely for this feature.",
				],
			},
			{
				title: "Children",
				body: ["Dolody does not knowingly collect information from anyone, including children under 13."],
			},
			{
				title: "Changes",
				body: ["If this policy changes, we'll update this page and its effective date."],
			},
		],
		contactTitle: "Contact",
		contactBody: "Questions about privacy? Email",
	},
	footer: {
		tagline: "A music player for your own songs.",
		rights: "All rights reserved.",
		email: "Email",
	},
	notFound: {
		title: "Page not found",
		back: "Back to home",
	},
};

export type Dict = typeof en;
export default en;
