// Sélectionner les éléments du DOM
const compteRenduForm = document.getElementById('compteRenduForm');

// URL du webhook Discord
const webhookURL = 'https://discord.com/api/webhooks/1290421839197376655/nOtXFHKY5MXVJNs7wNx4dZzOL-SnI1ewifLGr793WPVWKGNxGJcqPj6k0SVGHxTPedpf';

// Événement pour le formulaire de soumission
compteRenduForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(compteRenduForm);
    const compteRenduText = formData.get('compteRenduText') || "J'ai l'honneur de vous rendre compte...";
    const date = formData.get('date');
    const signature = formData.get('signature');

    // Création du payload pour Discord sous forme de message
    const payload = {
        content: `**Compte Rendu**\n\n${compteRenduText}\n\n**Date**: ${date}\n**Signature**: ${signature}`
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('Compte rendu envoyé avec succès !');
        } else {
            alert('Échec de l’envoi du compte rendu.');
        }
    } catch (error) {
        console.error('Erreur lors de l’envoi : ', error);
        alert('Erreur lors de l’envoi du compte rendu.');
    }
});