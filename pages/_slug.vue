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

		<The-Pagination
			class="d-flex justify-space-between mt-12"
			:is-first-page="!prev"
			:is-last-page="!next"
			@click-next-button="$router.push(prev.path)"
			@click-prev-button="$router.push(next.path)"
		/>
	</v-container>
</template>

<script>
export default {
	async asyncData({ $content, error, params }) {
		// Paginación
		const [prev, next] = await $content()
			.only(['path']) // Obteniendo solo el path entre la opciones
			.sortBy('createdAt', 'desc')
			.surround(params.slug) // Obtiene el post previo y siguiente al post
			.fetch()

		// Obteniendo la data del post
		const post = await $content(params.slug)
			.fetch() // Obteniendo el post
			.catch(() => error({ status: 404, message: 'Oops, looks like thah does not exist...' }))

		return { post, prev, next }
	},
	// Agrega los metas para el SEO
	head() {
		return {
			title: this.post.title,
			description: this.post.description,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.post.description,
				},
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: this.post.title },
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.post.description,
				},
				// Twitter Card
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.post.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.post.description,
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
