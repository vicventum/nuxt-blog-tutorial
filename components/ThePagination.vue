<template>
	<section
		class="post-pagination text-right mt-6"
		v-bind="$attrs"
	>
		<v-btn
			color="success"
			plain
			:disabled="firstPage"
			@click="$emit('click-next-button')"
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
			:disabled="lastPage"
			@click="$emit('click-prev-button')"
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
	props: {
		firstPage: {
			type: Boolean,
			default: false
		},
		lastPage: {
			type: Boolean,
			default: false
		},
	},
	created() {
		console.log('this.$attrs', this.$attrs)
	},
}
</script>

<style lang="scss" scoped>
</style>
