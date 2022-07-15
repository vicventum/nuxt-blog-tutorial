<template>
	<v-container fluid>
		<div class="intro mt-5 mb-8">
			<h1 class="text-h1">Victor Nuxt-Blog</h1>

			<h2 class="mt-2">
				100x Your Nuxt.js skill 🚀
			</h2>
		</div>

		<v-row class="posts-container">
			<!-- Filter -->
			<v-col cols="12">
				<div class="filter">
					<v-select
						v-model="category"
						:items="categoryList"
						label="Categories"
						style="width: 120px"
						hide-details="auto"
						color="success"
						outlined
					/>
				</div>
			</v-col>
			<!-- BLOGS SECTION -->
			<v-col
				v-for="post in posts"
				:key="post.slug"
				cols="12"
				md="6"
			>
				<v-card elevation="1">
					<v-card-title primary-title>
						{{ post.title }}
					</v-card-title>
					<!-- //? Formatea la fecha y hora del post -->
					<v-card-subtitle>
						{{
							new Intl.DateTimeFormat('es-ES', {
								dateStyle: 'short',
								timeStyle: 'medium',
								hour12: true,
							}).format(new Date(post.createdAt))
						}}
					</v-card-subtitle>
					<v-card-text>
						<!-- //? Con `body: page.excerpt` se inserta el extracto del post en el extracto del preview del post -->
						<nuxt-content :document="{body: post.excerpt}" />
					</v-card-text>
					<v-card-actions>
						<v-btn
							text
							color="success"
							:to="post.path"
						>
							Read More
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<!-- Paginación -->
		<The-Pagination
			:is-first-page="page === 1"
			:is-last-page="!nextPage"
			@click-next-button="fetchNext"
			@click-prev-button="fetchPrevious"
		/>
	</v-container>
</template>

<script>
export default {
	// Obteniendo la data de los posts
	async asyncData({ $content }) {
		// Limitando la cantidad de post que obtendremos

		const limit = 5
		const page = 1
		// Obteniendo los posts
		const fetchedPosts = await $content()
			.limit(limit)
			.sortBy('createdAt', 'desc')
			.skip((limit - 1) * (page - 1))
			.fetch()

		const nextPage = fetchedPosts.length === limit
		const posts = nextPage ? fetchedPosts.slice(0, -1) : fetchedPosts

		return {
			page,
			limit,
			posts,
			nextPage
		}
	},
	data: () => ({
		category: 'all',
		categoryList: ['all', 'codding', 'youtube']
	}),
	computed: {
		// Devuelve la palabra de la búsqueda
		searchQuery() {
			return this.$store.getters.GET_QUERY
		}
	},
	watch: {
		// Llama de nuevo a todos los posts pero ahora con la búsqueda como parámetro
		searchQuery(newValue) {
			this.page = 1 // ? Para devuelva a la primera página cada vez se agregue algo en el buscador de post
			this.fetchPosts(newValue)
		}
	},
	mounted() {
		console.log('Posts en la vista de inicio', this.posts)
	},
	methods: {
		// Avanza a la siguiente página de posts
		async fetchNext() {
			this.page += 1
			await this.fetchPosts()
		},
		// Retrocede a la anterior página de posts
		async fetchPrevious() {
			this.page -= 1
			await this.fetchPosts()
		},
		// Obtiene todos los posts
		async fetchPosts(query = '') {
			const fetchedPosts = await this.$content()
				.limit(this.limit)
				.sortBy('createdAt', 'desc')
				.search(query) //? Busca los post que contengan una parte de la cadena. Si `query` es una cadena vacía, devolverá todos los posts
				.skip((this.limit - 1) * (this.page - 1))
				.fetch()

			this.nextPage = fetchedPosts.length === this.limit
			const posts = this.nextPage ? fetchedPosts.slice(0, -1) : fetchedPosts

			this.posts = posts
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
