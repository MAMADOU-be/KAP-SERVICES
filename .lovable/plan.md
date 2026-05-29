Corriger la réinitialisation du formulaire de contrat de repassage en atelier après soumission.

## Problème constaté

Dans `src/components/IroningRegistrationForm.tsx`, la fonction `onSubmit` ne vide que les préférences (agence, pliage, amidon, etc.) et la signature. Les coordonnées personnelles (nom, prénom, email, téléphone, adresse) restent affichées. De plus, la signature visuelle sur le canvas n'est pas effacée car le composant `SignatureCanvas` n'est pas notifié d'un reset externe.

## Fichiers concernés

- `src/components/IroningRegistrationForm.tsx`
- `src/components/SignatureCanvas.tsx` (lecture seule pour vérifier le mécanisme de clear)

## Modifications prévues

1. **`IroningRegistrationForm.tsx`** :
   - Remplacer les appels `form.setValue(...)` individuels par `form.reset()` pour vider l'intégralité du formulaire (coordonnées + préférences + case à cocher).
   - Ajouter `acceptTerms: false` dans les `defaultValues` de `useForm` afin que `reset()` décoche aussi la case conditions.
   - Introduire un état `signatureKey` (nombre) incrémenté à chaque soumission réussie, et le passer en prop `key` sur `<SignatureCanvas>`. Cela force React à remonter le composant et donc à vider visuellement le canvas.

2. **`SignatureCanvas.tsx`** :
   - Aucune modification requise ; le mécanisme de `clearSignature` interne reste fonctionnel pour l'utilisateur. Le remontage via `key` suffit à réinitialiser le canvas.

## Critères de succès

- Après clic sur « Soumettre mon inscription », tous les champs du formulaire (y compris nom, prénom, adresse, email, téléphone) redeviennent vides.
- La case « J'accepte les conditions générales » se décoche.
- La zone de signature se vide complètement (canvas blanc + message "Signez ici" réapparaît).
- Aucune erreur TypeScript ni ESLint.