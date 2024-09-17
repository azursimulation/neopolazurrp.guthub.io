document.getElementById('demandeFormationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération des valeurs du formulaire
    const formation = document.getElementById('formation').value;
    const grade = document.getElementById('grade').value;
    const prenomNom = document.getElementById('prenomNom').value;
    const affectation = document.getElementById('affectation').value;

    // Message à envoyer à Discord
    const message = {
        content: `Nouvelle demande de formation :
        **Formation :** ${formation}
        **Grade :** ${grade}
        **Prénom Nom RP :** ${prenomNom}
        **Affectation :** ${affectation}`
    };

    // URL du webhook Discord
    const webhookURL = 'https://discord.com/api/webhooks/1285618565646516277/_nOLAQSetfD0YGjbDvzAIAVOWE9K6tRBz2ytQ7buNUpzcOviUN_lYTsot3dzTdy0fMkT';

    // Envoi de la requête POST au webhook Discord
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            alert('Votre demande a été envoyée avec succès.');
            document.getElementById('demandeFormationForm').reset(); // Réinitialise le formulaire après envoi
        } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    });
});