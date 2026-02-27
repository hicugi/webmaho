import fs from "fs/promises";

const list = [
	'catalog/fatoil/index.html',
	'catalog/fatoil/margarines/index.html',
	'catalog/fatoil/olive/index.html',
	'catalog/fatoil/butter/index.html',
	'catalog/fatoil/sauces/index.html',
	'catalog/fatoil/tomato/index.html',
	'catalog/fatoil/category/product.html',
	'catalog/milk/index.html',
	'catalog/milk/petrpavl/index.html',
	'catalog/milk/diary/index.html',
	'catalog/milk/condensed/index.html',
	'catalog/milk/base/index.html',
	'aboutus.html',
	'news/index.html',
	'news/article.html',
	'articles/index.html',
	'shares/index.html',
	'shares/petrpv.html',
	'partners/index.html',
	'recipes/index.html',
	'recipes/pancakes.html',
	'contacts.html',
];

fs.readFile('./index.html')
	.then((d) => {
		const body = String(d);

		list.forEach(async (file) => {
			await fs.mkdir(file.substring(0, file.lastIndexOf("/"))).catch(() => null);
			fs.writeFile(file, body);
		});
	});
