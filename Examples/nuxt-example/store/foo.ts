import { ModuleAccessor } from 'vuex-module-accessor';
import FooModule from '~/modules/fooModule';
export default new ModuleAccessor(new FooModule(), 'foo/');
