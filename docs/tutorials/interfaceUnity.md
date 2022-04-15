---
lang: fr-CA
title: Exploration de l'interface d'Unity
description: Dans ce tutoriel, l'interface d'Unity est montrée en détail. En commençant par les contrôles de bases, soit la caméra, les déplacement d'objets avec la souris. En passant par une utilisation intermédiateur de l'éditeur (possibilité d'utilisation de mathématique dans les propriétés). Jusqu'à un contrôle du positionnement des objets (rotation par la sélection des sommets, sans l'utilisation d'objets parents).
author: Sam
type: tutorial
creationDate: Janvier 2022
date: 2022-02-13
posterImage: interfaceUnity.jpg
---

# Exploration de l'interface d'Unity



Dans ce tutoriel, l'interface d'Unity est montrée pour en profiter à son plein potentiel. Il s'agit de mieux comprendre comment fonctionne l'éditeur.
Lorsqu'on utiliser un logiciel pour la première fois, il est souvent déconcertant d'en connaître les possibilités, lorsque plusieurs des fonctionnalités ne sont pas explicitent.
<div class="youtubeVideo">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7tyLZp1D_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Lorsqu'on débute dans un logiciel complexe, il est parfois difficile de s'imaginer les différentes possibilités si l'on ne l'a jamais vu auparavant. Alors c'est dans cette idée que ce tutoriel a été créé. De donner brièvement un aperçu des possibilités.

Le tutoriel montre différents mouvements de base, en passant par une manipulation intermédiaire et termine par des manœuvres plus avancées.

## Raccourcis clavier

Quelques raccourcis pratiques :

- <kbd>F</kbd> Place la caméra pour faire le **f**ocus sur l'objet sélectionné. Le curseur doit être dans la fenêtre Game pour que ce raccourci fonctionne.
- <kbd>Shift</kbd>+<kbd>H</kbd> N'affiche temporairement que les objets sélectionnés.
- Lors de la modification d'une propriété (exemple la position en X), il est possible d'utiliser certaines opérations mathématiques.
    - Parenthèses, `(1+1)*2` => `4`.
    - Exposants, `4^2` => `16`.
    - Multiplications, `4*0.5` => `2`.
    - Divisions, `4/2` => `2`.
    - Additions, `1+1` => `2`.
    - Soustractions, `3-1` => `2`.
    - Modulos, `5%2` => `1`.
    - Notation scientifique,  `4.87e+03` => `4870`.

## Nombre irrationnel
Pour entrer un nombre irrationnel, par exemple le cercle trigonométrique, il est possible de le rentrer directement au lieu de rentrer une approximation.
<EnableMathJax/>
$$
\textrm{P} \left( \frac{\pi}{6}\right) \Rightarrow  \left(\cos{\left( \frac{\pi}{6}\right)} , \sin{\left( \frac{\pi}{6}\right)}\right) \equiv \left( \frac{\sqrt{3}}{2}, \frac{1}{2} \right)\approx \left( 0.866,0.5 \right)  
$$

Dans cet exemple \\( \cos\left(\frac{\pi}{6}\right) \\) est équivalent à \\( \left(\frac{\sqrt{3}}{2}\right) \\), qui peux s'approximer par  0.8660254037844386467637231707529361834714026269051903140279034897...

Ce qui est relativement long à écrire. Pour ce faire, il est possible d'écrire directement le nombre irrationnel de cette façon : <code>(3^0.5)/2</code>.