<script lang="ts">
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	const handleSubmit = async () => {
		// TODO: Implementar el envío del formulario
		console.log('Form submitted:', formData);
	};
</script>

<div class="max-w-4xl mx-auto py-16 px-4">
	<h1 class="text-4xl font-bold text-center mb-8">Contacto</h1>
	<p class="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
		¿Listo para llevar tu generación de leads al siguiente nivel? Contáctame y descubre cómo puedo
		ayudarte.
	</p>

	<div class="grid md:grid-cols-2 gap-12">
		<div>
			<h2 class="text-2xl font-semibold mb-6">Información de Contacto</h2>
			<div class="space-y-4 text-gray-600">
				<p>
					<strong class="block">Email:</strong>
					contacto@damiansoto.me
				</p>
				<p>
					<strong class="block">Ubicación:</strong>
					Ciudad de México, México
				</p>
			</div>

			<div class="mt-8">
				<h3 class="text-xl font-semibold mb-4">Horario de Atención</h3>
				<p class="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM (GMT-6)</p>
			</div>
		</div>

		<div>
			<form on:submit|preventDefault={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 mb-1"
						>Correo Electrónico</label
					>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>

				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
					<textarea
						id="message"
						bind:value={formData.message}
						rows="4"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Enviar Mensaje
				</button>
			</form>
		</div>
	</div>
</div>
