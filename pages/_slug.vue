<template>
	<v-container fluid>
		<section class="my-4">
			<v-btn
				color="success"
				to="/"
				plain
			>
				<v-icon
					small
					left
				>
					mdi-arrow-left
				</v-icon>
				Go back
			</v-btn>
		</section>

		<section class="post-content">
			<h1 class="text-h3 mb-6">{{ post.title }}</h1>

			<nuxt-content :document="post" />
		</section>

		<The-Pagination class="d-flex justify-space-between mt-12" />
	</v-container>
</template>

<script>
export default {
	async asyncData({ $content, error, params }) {
		const post = await $content(params.slug)
			.fetch() // Obteniendo el post
			.catch(() => error({ status: 404, message: 'Oops, looks like thah does not exist...' }))

		return { post }
	}
}
</script>

<style lang="scss" scoped>
</style>
