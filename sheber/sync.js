import fs from "fs/promises";

const list = [
	'catalog/index.html',
	'charity/index.html',
	'news/index.html',
	'aboutus.html',
	'contacts.html',
];

fs.readFile('./index.html')
	.then((d) => {
		const body = String(d);

		list.forEach(async (filePath) => {
			const idx = filePath.lastIndexOf("/");
			if (idx > -1) {
				let dir = '.';
				const subDirs = filePath.substring(0, idx).split('/');

				for (const v of subDirs) {
					dir += '/' + v;
					await fs.mkdir(dir).catch(() => null);
				}
			}

			fs.writeFile(filePath, body);
		});
	});
