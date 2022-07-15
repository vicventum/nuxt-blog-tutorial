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
		<The-Pagination />
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
	mounted() {
		console.log(this.posts)
	},
}
</script>

<style lang="scss" scoped>
</style>
