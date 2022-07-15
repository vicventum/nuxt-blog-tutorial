<template>
	<v-app-bar max-height="64">
		<div class="search d-flex align-center justify-end ml-auto">
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
	data: () => ({
		search: ''
	}),
	methods: {
		clearSearch() {
			this.search = ''
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
