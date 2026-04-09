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

# Exploration of the Unity interface {#unity-interface}

In this tutorial, the Unity interface is shown to take advantage of its full potential. The aim is to better understand how the editor works.
When using a software for the first time, it is often disconcerting to know the possibilities, when many of the features are not explicit.
<div class="youtubeVideo">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7tyLZp1D_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

When you are a beginner in a complex software, it is sometimes difficult to imagine the different possibilities if you have never seen it before. So it is with this idea that this tutorial was created. To give a brief overview of the possibilities.

The tutorial shows different basic movements, passing through an intermediate manipulation and ends with more advanced maneuvers.

## Keyboard shortcuts {#keyboard-shortcuts}

- <kbd>F</kbd> Focuses the camera on the selected object. The cursor must be in the Game window for this shortcut to work.
- <kbd>Shift</kbd>+<kbd>H</kbd> Temporarily displays only the selected objects.
- When modifying a property (e.g., X position), it is possible to use certain mathematical operations.
    - Parentheses, `(1+1)*2` => `4`.
    - Exponents, `4^2` => `16`.
    - Multiplication, `4*0.5` => `2`.
    - Division, `4/2` => `2`.
    - Addition, `1+1` => `2`.
    - Subtraction, `3-1` => `2`.
    - Modulo, `5%2` => `1`.
    - Scientific notation, `4.87e+03` => `4870`.

## Irrational number {#irrational-number}
To enter an irrational number, such as those from the unit circle, it is possible to enter it directly instead of an approximation.
$$
\textrm{P} \left( \frac{\pi}{6}\right) \Rightarrow  \left(\cos{\left( \frac{\pi}{6}\right)} , \sin{\left( \frac{\pi}{6}\right)}\right) \equiv \left( \frac{\sqrt{3}}{2}, \frac{1}{2} \right)\approx \left( 0.866,0.5 \right)  
$$

In this example, $\cos\left(\frac{\pi}{6}\right)$ is equivalent to $\left(\frac{\sqrt{3}}{2}\right)$, which can be approximated as {{ 3**0.5/2 }}...

This is relatively long to write. To do this, it is possible to write the irrational number directly in this way: <code>(3^0.5)/2</code>.