import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { Jhe2EAppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(Jhe2EAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
