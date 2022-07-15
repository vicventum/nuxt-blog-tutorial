<template>
	<v-app>
		<!-- Navigation -->
		<The-Navigation />

		<v-main>
			<v-container>
				<v-row>
					<v-col
						cols="12"
						md="10"
					>
						<Nuxt />
					</v-col>
					<!-- Ads / Side content -->
					<v-cols
						cols="12"
						md="2"
					>
						<!--  -->
					</v-cols>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
