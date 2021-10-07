# Week 10 v1r Assessment

## Guidelines

Assessments are meant to give you and Hack Reactor staff an idea of how well you understand, or can figure out, the material that you covered recently.

- Turn off all communication devices such as your phone, email, Slack, etc.
- Fork this repo and clone down your fork to your laptop.
- Commit **working** code early and often (at least after every prompt). You are graded on your commit messages in addition to the code that you write.

Tips: 
- Use the Chrome Console [Snippets](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets) feature to author, test and debug your code before committing. An approved alternate tool is [JSFiddle](https://jsfiddle.net/). You are **NOT PERMITTED** to use [repl.it](https://repl.it/) to work on or complete this assessment.
- Do at least a little work on *every* prompt, even if you only leave comments that describe your intent. **Leaving a prompt blank is tantamount to failing a prompt. You'll get much more credit even for writing comments or pseudo-code that describe your intent**
- You **must** submit a pull request for all assessments **on time** (guidelines for how to submit a pull request are below). Give yourself several minutes to do this at the end of the time allotted for the assessment
- After completing the assessment, if there are any prompts you felt you did not do well on, or, that you would not know how to assess whether or not you did well on, make plans to improve your skills on that topic **as soon as possible.**

## Using and Referencing Outside Resources

Each prompt contains a list of resources you are allowed to use while working on that prompt. Using *any* other resources, online or otherwise, including course materials, or communicating through any mechanism with anyone other than Hack Reactor staff during the assessment is academic dishonesty and is cause for **immediate removal from the course.** If you have any questions about whether a resource may be used, or if you are in need of support, submit a help request.

## Submitting Solutions

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`. 
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once chagned, the pull-request heading should look like this:

  > hackreactor:username ... username:master

3. Click `Send pull request`

**NOTE: Only submit one pull request per assessment.** You can feel free to continue working on the content and can submit another PR after our incredible Instruction Team has completed reviewing your work (which takes about a week), but submitting multiple PRs greatly complicates our review process and subverts our ability to observe your work in the context of specific time constraints.

Screencast demo for creating a Pull Request: [https://recordit.co/byqmcfltlM](https://recordit.co/byqmcfltlM)

## ES2015+ support

Spectator supports ES2015+ by transpiling files with [Babel](https://babeljs.io/). Any JavaScript feature included in the [latest preset](https://babeljs.io/docs/plugins/preset-latest/) can be used in a self assessment. The tradeoff for this support is that error messages can sometimes be a bit more obscure and/or line numbers in the stack trace don't map precisely to their original line numbers.

If this is not an acceptable tradeoff, you may write only ES5 code. Create a `spectator.json` file in the root of the individual prompt directory that looks like this:

```json
{
  "babel": false
}
```

