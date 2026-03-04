import fs from "fs/promises";

const list = [
	'services/index.html',
	'services/space-design.html',
	'services/brand-design.html',
	'projects/index.html',
	'projects/branding/index.html',
	'projects/interior/index.html',
	'projects/interior/stomatology.html',
	'projects/interior/izumrud.html',
	'projects/branding/boardhouse.html',
	'shop/index.html',
	'shop/pictures/material4.html',
	'shop/pictures/society.html',
	'shop/pictures/thinkpositive.html',
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
