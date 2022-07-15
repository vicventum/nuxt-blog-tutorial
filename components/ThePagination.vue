<template>
	<section
		class="post-pagination text-right"
		v-bind="$attrs"
	>
		<v-btn
			color="success"
			plain
		>
			<v-icon
				small
				left
			>
				mdi-arrow-left
			</v-icon>
			Previous
		</v-btn>
		<v-btn
			color="success"
			plain
		>
			Next
			<v-icon
				small
				right
			>
				mdi-arrow-right
			</v-icon>
		</v-btn>
	</section>
</template>

<script>
export default {
	created() {
		console.log(this.$attrs)
	},
}
</script>

<style lang="scss" scoped>
</style>
