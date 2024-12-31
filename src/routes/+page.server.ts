import { CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID } from '$env/static/private';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
    subscribe: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');

        if (!email) {
            return fail(400, {
                error: 'Email is required',
                success: false
            });
        }

        try {
            const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    api_key: CONVERTKIT_API_KEY,
                    email,
                    fields: {
                        source: 'website_lead_magnet'
                    }
                })
            });

            const result = await response.json();

            if (!response.ok) {
                return fail(500, {
                    error: result.error || 'Error al suscribirse',
                    success: false
                });
            }

            return {
                success: true
            };
        } catch (error) {
            console.error('Error subscribing to ConvertKit:', error);
            return fail(500, {
                error: 'Error al procesar la suscripción',
                success: false
            });
        }
    }
} satisfies Actions;
