<template>
  <Blog :title="relevantPost.title" :date="relevantPost.date">
    <p>Welcome to the first blog post on my revised website. This is mostly just a test to ensure the blog system is functioning correctly.</p>
    <p>Eventually this blog will hopefully house some more interesting things that you can look at instead.</p>
    <p>Until then I have some fun projects from high school to make this worthwhile. Quality may vary.</p>
    <p style="color: rgb(255,200,200)" v-if="$vuetify.display.mdAndDown">The site has detected you are on a lower resolution screen, you may see strange behaviour from the following sections, as they weren't built with this resolution in mind.</p>

    <h2>Block Clicking Game</h2>
    <p>A game where you try remove all the blocks in as few clicks as possible. Each click reduces your score by one, try clicking on multiple overlapping blocks for maximum score. The game doesn't detect when you're done or anything, so you'll just have to know that you've succeeded. If you want to try again you have to refresh.</p>
    <p>As best as I can remember, I wrote this in Grade 12 because I had just learned about object oriented programming and wanted to try it out. Looking at the code, I am quite impressed with how not bad it is. There are some quirks, such as how I defined a class with the function keyword instead of the class keyword (which works in JavaScript). On the whole, not bad.</p>
    <iframe style="height: 90vh;" class="w-100 mt-2" src="/blog/blog-test/canvasOOT.html" title="block clicking game"></iframe>

    <h2>Portal But 2D</h2>
    <p>This was my final project in Grade 10. It is extremely difficult for no reason, the controls are unintuitive, and it has some bugs. Despite all this, I still look upon it fondly, and I still think that beating it is a rewarding (if needlessly difficult) challenge. If you can't see the whole screen at once, you'll just have to zoom your browser (shortcut is usually ctrl minus). It isn't really possible to play this without a mouse, because it makes use of middle mouse button (clicking on the scroll wheel) to place one of the portals.</p>
    <p>I remember spending a lot of time working on this, it was the first time I had a computer programming class in school, and is probably a big part of why I still love JavaScript so much. That being said, the code is awful. It's a miracle that opening any of the files doesn't instantly crash your browser. It's nearly unreadable, but we all must start somewhere.</p>
    <p style="font-size: 0.85rem;">Dev mode password is 879.</p>
    <div style="position: relative; height: 80vh;">
      <iframe style="height: 80vh; border-radius: 15px; position: absolute; width: 2000px; max-width: 95vw; left: 50%; transform: translateX(-50%); border: 15px solid #222;" class="mt-2" src="/blog/blog-test/portal" title="portal 2d"></iframe>
    </div>

    <h2>Wheel of Fortune</h2>
    <p>This is a basic recreation of hit game show Wheel of Fortune. All the phrases to guess are voice lines from the game Overwatch because my comp sci teacher at the time was a fan of the game. In the game you play against a CPU player named "Bil".</p>
    <p>I don't remember why I made Wheel of Fortune, because I have never seen an episode, so some details are probably wrong. The code for this is shockingly long (~800 lines of JavaScript), but it isn't too bad. There are definitely some things that could have written cleaner (such as the AI behaviour), but I think overall this one is alright.</p>
    <p style="font-size: 0.85rem;">P.S. this used to play really loud obnoxious music, but I have spared you from that. You're welcome.</p>
    <iframe style="height: 80vh;" class="w-100 mt-2" src="/blog/blog-test/wheel_of_fortune" title="wheel of fortune"></iframe>

    <h2>Conclusions</h2>
    <p>It's been a while since I looked back at these old projects, and to be honest I'm shocked at how well they hold up, even if they are definitely a little shabby. I'm very grateful I had a the opportunity to take a class that taught me the skills I needed to do this in high school. I'm also very grateful I had a teacher that encouraged the kind of random nonsense I made.</p>
  </Blog>
</template>

<script setup>
import Blog from "../../components/Blog.vue"
import blogPosts from "~/assets/blog"

let relevantPost = blogPosts.newBlogOldProjects;
</script>