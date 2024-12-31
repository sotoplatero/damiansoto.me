<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const navItems = [
		{ href: '#about', label: 'Sobre mí' },
		{ href: '#contact', label: 'Contacto' }
	];
</script>

<div class="min-h-screen flex flex-col">
	<header class="py-6 border-b">
		<nav class="w-full max-w-screen-lg mx-auto px-4">
			<div class="flex justify-between items-center">
				<a href="/" class="text-xl font-semibold tracling-tighter">Damian Soto</a>
				<ul class="flex space-x-8">
					{#each navItems as item}
						<li>
							<a href={item.href} class="hover:text-blue-600 transition-colors">{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</header>

	<main class="w-full mx-auto px-4 py-8">
		{@render children()}
	</main>

	<footer class="py-8 border-t">
		<div class="w-full max-w-screen-lg mx-auto px-4">
			<div class="flex justify-between items-center">
				<div class="text-sm text-gray-600">
					{new Date().getFullYear()} Damian Soto. Todos los derechos reservados.
				</div>
				<div class="space-x-4">
					<a href="/privacy" class="text-sm text-gray-600 hover:text-blue-600">Política de Privacidad</a>
				</div>
			</div>
		</div>
	</footer>
</div>
