// Sélectionner les éléments du DOM
const compteRenduForm = document.getElementById('compteRenduForm');

// URL du webhook Discord
const webhookURL = 'https://discord.com/api/webhooks/1285293926609195018/oJ4kbR2U1sbOrhRACxd6b65Os0Gm_VM2se4sY3BF-qSdnwLETZufz0lo99n7bIadVrNw';

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