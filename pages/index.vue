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
				v-for="post in 4"
				:key="post.id"
				cols="12"
				md="6"
			>
				<v-card elevation="1">
					<v-card-title primary-title>
						My frist blog
					</v-card-title>
					<v-card-text>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium deleniti fugiat, illum suscipit ipsum qui sint consectetur quasi in, perspiciatis eos, at quibusdam corporis illo earum blanditiis aliquam.
					</v-card-text>
					<v-card-actions>
						<v-btn
							text
							color="success"
							to="/1"
						>
							Read More
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<!-- Paginación -->
		<v-row class="post-pagination">
			<v-col
				class="text-right"
				cols="12"
			>
				<v-btn>
					<v-icon
						small
						left
					>
						mdi-arrow-left
					</v-icon>
					Previous
				</v-btn>
				<v-btn>
					Next
					<v-icon
						small
						right
					>
						mdi-arrow-right
					</v-icon>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		category: 'all',
		categoryList: ['all', 'codding', 'youtube']
	})
}
</script>

<style lang="scss" scoped>
</style>
