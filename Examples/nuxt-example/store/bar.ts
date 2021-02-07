import { Module, ModuleAccessor } from 'vuex-module-accessor';

import foo from '~/store/foo';
import BarModule from '~/modules/barModule';

export default new ModuleAccessor(new BarModule((context) => foo.of(context)));
