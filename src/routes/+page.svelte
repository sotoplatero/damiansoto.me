<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let email = '';
	let isSubmitting = false;
	let message = '';
	let isError = false;

	const handleSubmit = async () => {
		isSubmitting = true;
		message = '';
		isError = false;

		try {
			const response = await fetch('/api/lead-magnet', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Error al suscribirse');
			}

			message = '¡Gracias! Revisa tu correo para completar tu suscripción.';
			email = '';
		} catch (error) {
			console.error('Error:', error);
			message = 'Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.';
			isError = true;
		} finally {
			isSubmitting = false;
		}
	};
</script>

<section class="py-20">
	<div class="max-w-3xl mx-auto px-4 md-2 gap-12 items-center">
		<div class="text-center">
            <p class="text-gray-600 uppercase tracking-widest mb-8">damian soto</p>         
			<h1 class=" text-4xl md:text-7xl font-semibold mb-6 tracking-tighter">Automatiza. <br> Simplifica. <br> Acelera.</h1>
    		<p class="text-xl text-gray-600 mb-8">
				Ayudo a emprededores a transformar tareas repetitivas en procesos eficientes para que te enfoques en lo que realmente importa.
			</p>
			<a
				href="https://cal.com/damiansoto"
                target="_blank"
                rel="noopener noreferrer"
				class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
				>Agenda una Consulta</a
			>
		</div>
	</div>
</section>

<section class="py-16 bg-gray-50">
	<div class="max-w-3xl mx-auto">
		<div class="space-y-8 ">
            <a  href="https://cal.com/damiansoto">
			<div class="p-8 bg-white rounded-lg shadow-sm">
				<h2 class="text-2xl font-semibold mb-4">Obtén correos de negocios locales en 15 minutos</h2>
				<p class="text-gray-600">
					Implementación de sistemas automatizados para captar, nutrir y convertir leads en clientes.
				</p>
			</div>
            </a>
			<div class="p-6 bg-white rounded-lg shadow-sm">
				<h3 class="text-xl font-semibold mb-4">Optimización de Conversión</h3>
				<p class="text-gray-600">
					Mejora de embudos de venta y puntos de contacto para maximizar las conversiones.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-16">
	<div class="max-w-4xl mx-auto text-center px-4">
		<h2 class="text-3xl font-bold mb-8">Descarga mi Guía Gratuita</h2>
		<p class="text-xl text-gray-600 mb-8">
			"5 Estrategias Probadas para Automatizar la Generación de Leads en tu Negocio"
		</p>
		<form
			method="POST"
			action="?/subscribe"
			class="max-w-md mx-auto"
			use:enhance={() => {
				return async ({ update }) => {
					await update();
				};
			}}
		>
			<div class="flex flex-col gap-4">
				<div class="flex gap-4">
					<input
						type="email"
						name="email"
						placeholder="Tu correo electrónico"
						class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
					<button
						type="submit"
						class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
					>
						Descargar
					</button>
				</div>
				{#if form?.error}
					<p class="text-sm text-red-600">{form.error}</p>
				{:else if form?.success}
					<p class="text-sm text-green-600">
						¡Gracias! Revisa tu correo para completar tu suscripción.
					</p>
				{/if}
			</div>
		</form>
	</div>
</section>


<section class="py-16">
	<div class="max-w-4xl mx-auto text-center px-4">
		<h2 class="text-3xl font-bold mb-8">¿Listo para impulsar tu negocio?</h2>
		<p class="text-xl text-gray-600 mb-8">
			Agenda una consulta gratuita y descubre cómo puedo ayudarte a automatizar tu generación de leads.
		</p>
		<a
			href="#contact"
			class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
			>Contactar ahora</a
		>
	</div>
</section>
