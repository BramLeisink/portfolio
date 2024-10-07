<script>
	import Button from "$lib/components/ui/button/button.svelte";

</script>
<div
	class="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center"
>
	<span
		class="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent"
	>
		200
	</span>
	<h2 class="font-heading my-2 text-2xl font-bold">Status code: OK</h2>
	<p>De gevraagde pagina is met succes gevonden!</p>
	<div class="mt-8 flex justify-center gap-2">
		<Button href="https://www.linkedin.com/in/bram-leisink-a55a532a4/" variant="default" size="lg">
			LinkedIn
		</Button>
		<Button href="https://github.com/BramLeisink" variant="ghost" size="lg">GitHub</Button>
	</div>
</div>
