---
lang: en-CA
title: Exploring the Unity interface
description: In this tutorial, the Unity interface is shown in detail. Starting with the basic controls, i.e. the camera, the movement of objects with the mouse. Passing by an intermediary use of the editor (possibility of using mathematics in the properties). Until a control of the positioning of the objects (rotation by the selection of the vertices, without the use of parent objects).
author: Sam
type: tutorial
creationDate: Janvier 2022
date: 2022-02-13
posterImage: interfaceUnity.jpg
---

# Exploration de l'interface d'Unity

In this tutorial, the Unity interface is shown to take advantage of its full potential. The aim is to better understand how the editor works.
When using a software for the first time, it is often disconcerting to know the possibilities, when many of the features are not explicit.
<div class="youtubeVideo">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7tyLZp1D_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

When you are a beginner in a complex software, it is sometimes difficult to imagine the different possibilities if you have never seen it before. So it is with this idea that this tutorial was created. To give a brief overview of the possibilities.

The tutorial shows different basic movements, passing through an intermediate manipulation and ends with more advanced maneuvers.

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
<MathJax/>
$$
\textrm{P} \left( \frac{\pi}{6}\right) \Rightarrow  \left(\cos{\left( \frac{\pi}{6}\right)} , \sin{\left( \frac{\pi}{6}\right)}\right) \equiv \left( \frac{\sqrt{3}}{2}, \frac{1}{2} \right)\approx \left( 0.866,0.5 \right)  
$$

Dans cet exemple \\( \cos\left(\frac{\pi}{6}\right) \\) est équivalent à \\( \left(\frac{\sqrt{3}}{2}\right) \\), qui peux s'approximer par  0.8660254037844386467637231707529361834714026269051903140279034897...

Ce qui est relativement long à écrire. Pour ce faire, il est possible d'écrire directement le nombre irrationnel de cette façon : <code>(3^0.5)/2</code>.