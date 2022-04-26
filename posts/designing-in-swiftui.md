---
title: "Designing in SwiftUI"
date: "2022-04-26"
image: "https://res.cloudinary.com/dpgzvne4j/image/upload/v1650955603/designinginSwiftui_lm2peb.png"
---

# Designing in SwiftUI

SwiftUI is Apple's declarative UI framework. It's also a good design tool. Programmers have mixed opinions on it, but I've found it to be very helpful for prototyping and designing interfaces.

The new M1 machines unlocked SwiftUI. Xcode is a pretty heavy app, but builds are now fast enough that quick iteration is possible. This is critical for anyone working with UI where changes need to be instantly viewable and continually iterated on.

# A Few Reasons to Consider using SwiftUI

1. There's a higher ceiling in SwiftUI than any design tool I've used before. Even if something isn't possible in SwiftUI, it's possible to drop into UIKit. If you can build it, you can prototype it.

2. You can ship your projects. The ceiling doesn't stop at nice prototypes. You can ship full apps.

3. The gap between design tool and declarative framework is shrinking. Developer tools are getting easier and easier. Design tools are getting much more robust. The gap isn't as wide as it used to be.

4. The layout system is straight forward. If you're familiar with flex-box layouts it is very similar. It was a lot easier for me to pickup than the older constraint based system from storyboards.

5. Native Performance and Effects. Any and all sensor data is available, and you have fully interruptible animations running at a high refresh rate. Even complex prototypes feel lightning fast and snappy. It feels like a real app because it is a real app.

6. Robust Ecosystem and Tooling. Because there's a huge community of engineers there are lots of open source libraries, tutorials, and resources to learn from. You also benefit from software development tooling which is mature.

# A Few Downsides and Caveats

1. It's not built for design use cases. This means there are features that other design tools have which don't exist yet. An example of this is the absence of a touch cursor for presenting prototypes that exists in other tools.

2. Sharing prototypes is challenging. The best option is sharing source code on Github and Videos. It would be nice to be able to share a url to a prototype without going through the approval process.

<hr>

Overall, I've had a very positive experience using SwiftUI to design interfaces and prototype experiments. I've been able to ship an [app](https://quickcapture.xyz), and create a number of experiments.

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/AZiutMenQEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<figcaption>Using the Accelerometer in Airpods to Create a Parallax Effect</figcaption>

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/zDbsxEI_GxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<figcaption>Controlling 3D primitives using SwiftUI and Scenekit</figcaption>

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/o7-FT0OluLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<figcaption>Controlling an Interface Element using the Apple Watch</figcaption>

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/ZlF6rnyBbhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<figcaption>Controlling 3D primitives using SwiftUI and Scenekit</figcaption>

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/vasnymyMys4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<figcaption>3D Transform with Drag Gesture</figcaption>

<div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/gzKq1xuQNTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<figcaption>Parallax Effect using the Accelerometer</figcaption>

If you're looking to get started with SwiftUI, I put together this short [guide](https://swiftui.design/guide), and have posted some [examples](https://swiftui.design/examples). I also post experiments on [twitter](https://twitter.com/philipcdavis).
