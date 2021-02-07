import { Module } from 'vuex-module-accessor';

export abstract class AnimalState {}

export default abstract class AnimalModule<
	TState extends AnimalState
> extends Module<TState> {
	abstract print(): void;
}
