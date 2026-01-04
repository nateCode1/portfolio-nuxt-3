<template>
  <Blog :title="relevantPost.title" :date="relevantPost.date">
    <p class="font-weight-bold">After much anticipation, and much development, JS Oneliners V1.0.0 is released!</p>

    <p>JS Oneliners is a game about writing JavaScript to solve coding problems, with a twist: all your solutions must be one line of code.</p>
    <p>You may enjoy this game if:</p>
    <ul>
      <li>You like JavaScript</li>
      <li>You enjoy unique coding problems</li>
      <li>You have a lot of patience</li>
    </ul>

    <div class="d-flex justify-center">
      <a href="https://natecode1.github.io/jsoneliners.html" target="blank"
        ><v-btn
          x-large
          outlined
          color="white"
          style="font-size: 1.15rem; height: auto;"
          class="click-me px-7 py-4 mt-4 font-weight-bold rounded-xl"
          >Visit Project</v-btn
        ></a
      >
    </div>

    <div v-if="$vuetify.display.smAndUp">
      <h2>Preview Images</h2>
      <p>Here are some screenshots of the site to entice you.</p>
      <v-carousel style="max-width: 700px; height: 380px;" class="mx-auto" hide-delimiters>
        <v-carousel-item
          v-for='i in ["/jsol/img1.png", "/jsol/img2.png", "/jsol/img3.png"]'
          :key="i"
          :src="i"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <h2>Technical Details</h2>
    <p>There are a few interesting technical considerations that arose during this project. I'll be sharing these insights/details below.</p>

    <h3>No Framework</h3>

    <p>I decided early on that I wanted to make the entire project without using a web framework, and keeping everything in a single file with no dependencies. This was mostly an arbitrary challenge for myself, but it does have the benefit of making the finished product highly portable. The project can be run in from a single file that can be sent around, and used without any internet access.</p>

    <p>The one concession I made was allowing myself to use links to documentation when writing informational content. I tried to ensure the most prudent information was present, but also linked to the full MDN docs for completeness.</p>

    <p>Not using a framework is often annoying, but doesn't fundamentally limit what can be accomplished. A big issue is having to manually update the content of the DOM using JavaScript whenever anything on the page needs to be changed. With a project like this it is manageable, but it does mean that having more dynamic elements very quickly increases the overall code complexity.</p>

    <v-expansion-panels>
      <v-expansion-panel
        class="mt-4"
        color="#444"
        title="Another annoyance of not using a framework."
      >
        <v-expansion-panel-text>
          <p>Another thing that was very annoying because of the lack of a framework was having to use a hacked-together implementation for collapsing sections. The code for the collapsing section containing this text is very simple because of VuetifyJS's built in expansion panels, but for the non-framework version, an event listener must be registered for each panel. This is mildly inconvenient to begin with, but considering that additional collapsing panels may be added at runtime (like for problem examples), it becomes far more of a a hassle to ensure each one has the appropriate on-click event to toggle its content.</p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>Perhaps the most obvious downside was the lack of components. While it is possible to create something like a component system with vanilla JS, it is more effort than it's worth for small projects. So there was a lot of copy-pasting of html, which made it annoying to change things. If I were to to this again, I'd probably invest the time to make a component out of collapsable sections. However, they were a late addition, which is why I didn't bother.</p>
      

    <h3>Syntax Highlighting</h3>
    <p>I discovered pretty early on in this project that syntax highlighting would be imperative for the sanity of those attempting to complete the problems.</p>

    <BlogImage src="/jsol/no_syntax_highlight.png" caption="Very difficult to read." />

    <p>However, this was an issue because of my self-imposed limitation of not having external dependencies, as I'm not aware of any built-in syntax highlighting in html. This meant I had to write my own. Some things were simple regex problems, including highlighting keywords, strings, operators, and functions. These basic features already makes things look a lot better.</p>

    <BlogImage src="/jsol/syntax_highlight_1.png" caption="Even very basic syntax highlighting makes it much easier to parse this code snippet." />

    <p>Brackets were a more interesting issue. The brackets aren't just highlighted, but highlighted in pairs. Each open bracket is highlighted the same colour as its corresponding close bracket. This is done by iterating forward over the code one character at a time, and each time an open bracket is found, a variable is incremented. Similarly, each time a close bracket is found, the variable is decremented. The colour is selected based on this variable.</p>
    <v-expansion-panels>
      <v-expansion-panel
        class="mt-4"
        color="#444"
        title="Pseudo Code for Bracket Highlighting"
      >
        <v-expansion-panel-text>
          <p>This is pseudo code for the algorithm that highlights brackets in paris. It assumes that code is a string to be highlighted, colours is a list containing the colour of each character, and that bracketColours is an infinitely long list of colours for the brackets to be. This also assumes that there are not more close brackets than open brackets.</p>
          <p>Note the use of the post-increment and pre-decrement operators.</p>
          <p style="font-size: 0.9rem;">If bracketColours weren't infinitely long, the modulo operator could be employed to reuse colours as needed: e.g. instead of: <code>bracketColours[i]</code>, do: <code>bracketColours[i % bracketColours.length]</code>.</p>
          <v-code class="mt-2"><pre>
depth = 0
for i = 0 to code.length:
  if code[i] == '(':
    colours[i] = bracketColours[depth++]
  if code[i] == ')':
    colours[i] = bracketColours[--depth]</pre></v-code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <p>This same methodology can be applied to highlight ternary operators (code of the form: <code>condition ? truthyValue : falsyValue</code>) by treating '?' as an open bracket and ':' as a close bracket. This is helpful for deciphering nested ternaries.</p>

    <BlogImage src="/jsol/syntax_highlight_2.png" caption="With the brackets highlighted, it is easier to decipher the nested brackets." />

    <p>We are now nearly done! One final feature that I wanted to add was highlighting the corresponding open/close bracket when the cursor is placed at a bracket. This feature makes it very easy to determine where the corresponding open/close bracket is, even if there are many nested brackets. This is a much more subtle effect than the other additions, but I have personally found it very helpful when writing more complex code.</p>
    <p>This effect is accomplished by searching forward/backwards from the cursor position, and skipping over nested brackets until the desired character is located.</p>

    <BlogImage src="/jsol/syntax_highlight_3.png" caption="The highlighted brackets next to the cursor can be helpful when reading complicated code." />

    <p>All told the function to do syntax highlighting is just under 100 lines, and it works well enough for the purposes of the game. Despite not "understanding" the code, these simple rules for highlighting create a pretty helpful effect for reading/writing code.</p>

    <h3>Writing Problems</h3>

    <p>To be clear this section is about writing the coding problems, not about problems with writing.</p>

    <p>I've done a lot of coding problems before, so it was interesting to try my hand at writing them. There were two notable challenges in writing these problems:</p>

    <ol class="mt-2">
      <li>The problems must teach people the skills to solve subsequent problems.</li>
      <li>The problems must be solvable in one line.</li>
    </ol>

    <p>Let's start with problem 1. The biggest jump in difficulty is going from the first few problems without arrays, to the problems with arrays. I did my best to ease the transition by trying to make the first problems with arrays as conceptually simple as possible, but I still feel that there was room to do it better. Other than that, I feel that a lot of earlier problems do a good job of introducing concepts that are used in later problems. The idea was for each problem to have one new concept, and reuse some old concepts. However, this had to be a little flexible because of problem 2. </p>
    
    <p>Problem 2: the problems must be solvable in one line. This is maybe the more obvious constraint for something like this. This wasn't as difficult as I expected, as solving problems in 1 line is what inspired me to start this project. This meant that I had quite a few ideas built up of past problems I'd done that I could retool for this project. I also created some original problems, often working backwards from an interesting solution to create a fun problem.</p>

    <p>One problem had a stranger development process. I wrote a problem, a magnificent beautiful problem. The solution was very intricate and fun to figure out. However, I then became aware that the problem had a very simple solution that I did not intend. So I had to rejig the question to actually produce the answer I wanted, which was shockingly difficult given the complexity of the answer.</p>

    <p class="mt-6">Thanks for reading.</p>
    <p class="ml-3 mt-0">-N<sup>3</sup>H</p>

  </Blog>
</template>

<script setup>
import Blog from "../../components/Blog.vue"
import BlogImage from "../../components/BlogComponents/BlogImage.vue"
import blogPosts from "~/assets/blog"

let relevantPost = blogPosts.jsol;
</script>