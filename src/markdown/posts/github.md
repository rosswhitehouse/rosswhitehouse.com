---
slug: "git-starter"
date: "2020/12/24"
title: "Git-ing Started with Github"
type: "post"
excerpt: "A brief intro to Git and Github processes."
---

How about that title there? Yeah it’s rough.

The other day I went through the process of adding new code to a large commercial GitHub repository. I sort of stumbled through it, so I wanted to make a quick tutorial in case you’re lost too! Or in the much more likely event that I get lost doing it in the future — it’s pretty straightforward.

## Local Git Flow

First of all let’s look at Git flow, the process by which we add code to a website in Git. I’ll go through a pretty common branch model, but lots of people and teams run things a little differently. If you want to know more about this, [Atlassian have a walkthrough with an interactive tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Basic Branch Structure

I’ll run through some of the types of branches we can have to understand the flow of fixing an issue or adding a new feature. The branches you use might be named something different - but generally these two are the main ones to worry about.

- _Main_ — this is your ‘live’ branch, with your active code on it. Generally speaking it's bad practice don’t push straight to this unless we’re deploying a hotfix.

- _Feature_ — a feature branch is a copy of master that we can work on to develop a feature or improvement that won't break master, because it's only a local branch. Naming convention for this differs where you go, you might use a story ID if you're using a JiRA type workflow, or you might do something like `feature/feature_name`.

### Workflow

Let’s look at a few examples of how we use the branches. First of all let’s say there’s a plan to release a single new feature. Here are the steps we take:

- Firstly, we want to make sure our local copy of the _main_ branch is up-to-date with the _main_ branch that's live. We'll cover how to do this later.

- Next, we create a feature branch which, at first, is a straight copy of main. Then we make our features on the branch.

- Then the actual work has to happen. Make the feature, write the test, whatever it is.

- Next we have to add our new files and commit our changes. Then we push the branch up to the remote repository. This is the place on the internet that the code actualy lives.

This is a super basic Git process, there can be all number of workflow steps around this. If you have a CI/CD Pipeline, your remote branch will be linted and tested to make sure it should all work. Sometimes the branch will be deployed to staging or to a remote environment for QA testing.

Either way, assuming no problems, at some point your branch will be merged into master and deployed to live.

### Command Line Steps

In this part I’ll talk you through the actual git commands to get this done! Hopefully this post will become a nice little resource for all the different git actions (for you and for me!).

#### Cloning

This is an optional step, if you're improving a Git repository that already exists, you'll need to clone it:

```
git clone https://git.clone.url
```

You can normally find the clone url on the repository page. In GitHub, it’s on the right when you click the big green button saying ‘Clone or Download’.

#### Fetching

When we have our repository cloned, we need to fetch all of the branches.

```
git fetch
```

This will fetch all of the remote branches for your choosing.

#### Pulling

Let's say we have a local main branch but we're worried that the remote main has some changes that we don't. In this case, we need to 'pull' the changes down to our branch.

```
git pull
```

Easy enough right? If not, these will all become second-nature to you as you start to use Git more.

#### Branching

When you want to look at one of these branches, we need to ‘checkout’.

```
git checkout name-of-branch
```

Or if you need to you can create a whole new branch:

```
git branch -b name-of-new-branch
```

That `-b` flag is going to create an _exact copy_ of the branch we're already on. So if we branch off of main, we'll have a feature branch that looks like main. If we branch off another feature branch, then we'll have all the changes from that branch in our branch from the get-go.

#### Committing

Once we’ve done our work, we need to make sure it goes up to our repository, right? First thing’s first, we need to see what’s changed in our branch.

```
git status
```

This is going to return a list of the changes you’ve made. You might also get an instruction saying some of your changes aren’t staged for commit. But we need to add those changes!

```
git add path/to/file/or/folder.html
-- OR --
git add .
```

This tells git that the file we added is ready to be committed. The first option will add a specific file, and the second option will add all the files we changed. In the first instance, we can also add more than one file by leaving a space between them. Finally, all our changes are staged and ready, now we need to commit them.

We do this with the command `git commit`, which has a bunch of useful parameters. Firstly, make sure all of our changed and added files are included with -a, which is shorthand for — all. Then we need to add a message to tell other people working on the project what we did at a glance. We add a commit message with `-m”Message about the commit”`. This is actually shorthand for `— message””`, so you can use either! There’s a lot of these shorthands about in command line stuff.

Finally our full commit command should look a bit like this:

```
git commit -a -m”Message about commit”
```

And it’s committed!

#### Pushing

So far we’ve only changed our local repository. That’s great if we have local test environments and want to look at our fixes before pushing them to the remote, but when we’re ready for that we need to get the local code up to the remote repo! This is like the opposite of the `pull` command higher up.

```
git push remote-name branch-name
```

Normally your remote-name will be origin and your branch name the same as your local branch! If you created your branch locally then your push is going to have trouble — it won’t be able to find the remote branch to push to. In that case we simply need to add the `-u` parameter, or `--set-upstream`, and git will know to create this branch in the repo.

That’s all of the basic git commands covered. There are a lot more out there and they all have lots of flags or parameters to adjust them in some way.

#### Handy Git Links

[If you’re starting out, a great resource is the Atlassian’s git tutorials](https://www.atlassian.com/git/tutorials/setting-up-a-repository). These articles from the creators of BitBucket and SourceTree are clear and well-laid out, and they even compare different git workflows — there’s no wrong answer!

[Git has some really useful documentation when looking up commands or flags](https://git-scm.com/doc). Search any command to see all of the possible options.

[David Walsh also has a great article](https://davidwalsh.name/git-commands) on useful and sometimes less-well-known git commands.

#### Extras

Here’s some other stuff I’ve found useful in my time with Git, maybe they’ll be handy for you too:

#### Cherry Picking

“Oh no! Something looks broken on this branch. But didn’t I just fix this on a different branch?”

That’s where cherry picking comes in. You can take any commit from any branch and inject it into your code. If there’s a fix for a bug on another branch, you can take it and add it to your branch easily!

```
git cherry-pick commit-id
```

You can find the git commit ID in your repository history, either on GitHub/BitBucket or you can run git log to see all the commits for the current branch.

#### Error Handling

“Oh no! We just committed some super janky code to develop, totally by accident!”

It happens, right? Luckily all we need to do here is find the ID of the commit before our broken one, then we can ‘reset’ the branch to there. Firstly, checkout develop and run `git log` to get the IDs, then we can run this:

```
git reset —hard commit-id
```

We used the `—hard` parameter here to tell git that we don’t care about our outstanding changes — they can be ignored. If we need to keep our current changes we can change this to `—soft`.

#### Stashing Changes

“I need to do a hotfix real quick, but I’m not finished building my feature!”

I do this all the time. I’m halfway through one thing but I need to do another urgently, so what do I do? I can actually save my current changes for later.

```
git stash
```

But when we want it back, we can do that really easily too.

```
git stash pop
```

To be clear, `pop` will only bring back the latest stashed changes. You can stash multiple times, and still get them back. [Check out the git stash docs](https://git-scm.com/docs/git-stash).

#### Deleting Branches

“I’ve been doing this for a while now, and I’m clogged up with all these branches”

After some time you’re going to realise that when branches get merged and deleted on the repository, they don’t get deleted on your local. Every now and then I like to do a cleanup of my local branches, getting rid of anything I’m not going to need.

```
git branch -d name-of-local-branch
```

As you can see this is similar to the command used to create a new branch, but that `-d` flag in there means this branch gets deleted instead.

## Using GitHub

That’s a pretty neat roundup of some basic and some more intermediate git commands in a workflow, but now I’m going to show you how to apply them to a project on GitHub that you don’t own. Fixing a bug for someone or adding a feature to a plugin is a great way to learn and get your code out there. In fact, some teams like to look at a candidate’s GitHub activity during the hiring process — to see if the person is curious to learn and help others.

It’s a little different using someone else’s project, and there are a few gotchas that might trip you up.

> N.B. Let me be clear, cos this can be confusing: Github is _different_ to git. Git is the software we use to manage local and remote code, and Github is a repository where we keep that code. There are a bunch of other repository softwares such as Gitlab or Bitbucket, but they all use git as the software to push and pull changes.

### Forking

When we see a GitHub repository, we first need our own copy. We could just clone it as we did earlier, but unless we’re a contributor of the repo, we won’t be able to commit and push any new stuff! We need to take our own copy, make changes there and request that our copy be merged into the original. Making our own copy is called ‘forking’. This creates a repository on our GitHub account identical to the original.

### Editing

The next steps are the same as above. We create a branch to do our changes on, make the changes, commit and push them. This will update our copy of the repo on GitHub. Now we need to politely ask the original owners to accept it.

### Making a Pull Request

Luckily on the original repo there’ll be a little button that said “New pull request”. It’ll show you the differences between the original and your branch and you can check to make sure the code looks fine. Then you can submit your request and the contributors of the original repo will be able to review it.

### Editing Your Request

Sometimes the feedback comes back with some changes, and they’re really easy to make! In the same way as we did on our local, make another change, commit and push it. Now the pull request will automatically update with your change. GitHub has a handy timeline of comments etc, and your change will appear there. Then finally if approved, your code will be visible on the original repository!

---

I hope this has been helpful in some way if you’re just getting started in Git, or if you need help with GitHub’s workflow. I’m no expert on this, but I do know you need to find a way of using Git that works for you and your project. In bigger teams it might be that this exact flow doesn’t work for you and that’s fine, there’s no wrong answer! If you do work in a different way I’d love to hear about it!
