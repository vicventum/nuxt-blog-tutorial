<template>
	<v-app-bar max-height="64">
		<div
			v-if="$route.name === 'index'"
			class="search d-flex align-center justify-end ml-auto"
		>
			<v-text-field
				v-model="search"
				hide-details="auto"
				placeholder="Search for a post"
				prepend-icon="mdi-magnify"
				:append-icon="search.length ? 'mdi-close' : ''"
				dense
				outlined
				@click:append="clearSearch"
			/>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	computed: {
		// Obtiene e inserta el valor del input `search` directamente del Store
		search: {
			get() {
				return this.$store.getters.GET_QUERY
			},
			set(value) {
				this.$store.commit('SET_QUERY', value)
			}
		}
	},
	methods: {
		clearSearch() {
			this.$store.commit('SET_QUERY', '')
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
