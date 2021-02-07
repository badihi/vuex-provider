<template>
	<div class="counter-container">
		<button @click="provider.print()">print</button>
	</div>
</template>

<script lang="ts">
import AnimalModule from '../modules/animalModule';

import { consumer } from 'vuex-provider';

export default consumer(AnimalModule).extend({
	mounted() {}
});
</script>
