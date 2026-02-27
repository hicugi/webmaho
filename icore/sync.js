import fs from "fs/promises";

const list = [
	'catalog/index.html',
	'catalog/management.html',
	'catalog/management/products/ibm.html',
	'catalog/vulnerability.html',
	'catalog/vulnerability/product/vm-qradar.html',
	'catalog/patch.html',
	'catalog/patch/products/ibm-bigfix.html',
	'catalog/consulting.html',
	'catalog/consulting/products/product.html',
	'catalog/consulting/products/product-2.html',
	'catalog/code.html',
	'catalog/code/products/appscan.html',
	'catalog/apps.html',
	'catalog/apps/products/imperva-waf.html',
	'catalog/bm.html',
	'catalog/bm/products/commvault-simpana.html',
	'catalog/idm.html',
	'catalog/idm/product/idmatri.html',
	'catalog/net/index.html',
	'catalog/mdm.html',
	'catalog/mdm/products/maas360.html',
	'catalog/dlp.html',
	'catalog/dlp/products/symantec-dlp.html',
	'catalog/eps.html',
	'catalog/eps/products/symantec-eps.html',
	'catalog/isup.html',
	'solutions/index.html',
	'solutions/security.html',
	'solutions/safe-money.html',
	'solutions/rise.html',
	'solutions/chart.html',
	'solutions/lock.html',
	'solutions/business.html',
	'aboutus.html',
	'contacts.html',
];

fs.readFile('./index.html')
	.then((d) => {
		const body = String(d);

		list.forEach(async (filePath) => {
			const idx = filePath.lastIndexOf("/");
			let dir = '.';
			const subDirs = filePath.substring(0, idx).split('/');

			for (const v of subDirs) {
				dir += '/' + v;
				await fs.mkdir(dir).catch(() => null);
			}

			fs.writeFile(filePath, body);
		});
	});
