# Counting children
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


This is a template from an online site.
Feel free to explore the files it contains, but this is absolutely not required to be able to complete this exercise.
What you need is to create your own JavaScript file and make sure it is included in the `index.html` file.

You can use Visual Code live server to run the project.

# 1. Children
* Write JavaScript code that gets a list of the children of the element with the ID `#wrapper`
* Print the list of children to the console
* Print the number of children to the console as well

# 2. Children's children
* Write code that iterates over `#wrapper`'s children
* For each child get a list of its children and print it to the console as well as the number of its children

Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

Note: There are 2 ways to print the number of children - give them both a try.

## 3. Class names
* Next, we need to find which one of `#wrapper`'s children has the highest number of classes.

    For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

* Let's write a function that returns an object that contains the element with the most classes and the number of classes it has.

Exaple output of the function:  
```js 
{elementWithMostClasses: [HTML Element], totalNumberOfClasses: 5}
```
* Call your function for `#wrapper` and print the returned object to the console.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Children

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `#wrapper`'s children are printed to the console |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Number of `#wrapper`'s children is printed to the console |

### 2. Children's children

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Children of each child of `#wrapper` are printed to the console |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Number of children of each child of `#wrapper` is printed to the console |

### 3. Class names

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Should print the element with the highest number of classes and the total number of classes. |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-DOM-traversing-children-count)


[//]: # (autograding info end)