import { Module, ModuleGetter } from 'vuex-module-accessor';
import { inject } from 'vuex-provider';

import FooModule from '~/modules/fooModule';

class BarState {}

export default class BarModule extends Module<BarState> {
	foo: FooModule;
	constructor(@inject(FooModule) private fooModule: ModuleGetter<FooModule>) {
		super(BarState);
		this.foo = this.useModule(this.fooModule);
	}

	get count(): number {
		return this.foo.state.count;
	}
	increase() {
		this.foo.increase();
	}
	decrease() {
		this.foo.decrease();
	}
}
