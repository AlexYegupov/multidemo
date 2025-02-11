# Cool todolist site documentation!

Project goals:

For [users](#user) - to manage own list of everyday actions with ability to sort, modify, change etc.

For [owner](#owner) - to earn money of paid usage plans of users who want to have extended userlist features

## System actors

### User

Person who wants to see own todolist and modify it different ways

#### Name

#### Email

should be in correct email format, check it on user [registration](#register-page)

#### Phone

#### Plan

Could be [free](#free-plan) or [paid](#paid-plan)

##### Free plan

all basic features (edit todos, )

##### Paid plan

### Owner

Person who see global statistics of todolist usage, all users and thier plans.
He can see all that statistics on https://todolist.com/admin page with credentials provided by admin

### Manager

person who approve subsciptions of paid todolist plans and connect with person who want to have custom plan

## Business logic

### Todo

text description of some action that [user](#user) want to implement some

#### description

todo text description

??rich text, images inside

#### term date

when users supposed to implement his \[todo]

??? what about time

#### done

'true' or 'false' whether todo action is done

# User interface

## Landing page

When the site https://todolist.com is open and [user](#user) is not [registered](#register-page) then this page is open.
If user is already [registered and logged in](#register-page) then browser is automatically redirected to [Home](#home-page) page

Some marketing stuff (see figma) with big [Register](#register-page) button

## Register page

Page where [users](#user) can register input own data and register

    Log in:

    Name*     [            ]
    Email*    [            ]
    Phone     [            ]
    Plan*     [paid/free  v]

    [Register]

    Already have login?

    Login    [   ]
    Password [   ]

    [Ok]

When clicked on "ok" button the [Home page](#home-page) should be displayed

???which plan show on default

???what to show when user press Register

???Forgot password functionalitty

???Ability to change plan

## Home page

    My todo list

     Description  ▲▼         When    ▲▼    Done
     ---------------------------------------------
     Get up                  2025-01-01   [v]
     Cook breakfast          2025-01-01   [v]
     Go to work              2025-01-01   [ ]
     [Eat lanch|  [v][x]]    2025-01-01   [ ]

When user clicks on any of todolist field, in-place editor would appear immediately (with buttons to save or cancel) with ability to modify value of any [todo](#todo) fields.

The [done](#done) field is simple checkbox that is modified immediately when clicked on it.

When clicking on [Descrption](#description) or [When](#term-date) field then the correspondent sorting should be cycled with displaying the correspondent arrow icon in order: "no", "asc"," "desc".

??? what about filtering [done](#done) todos?

??? what about loading long lists of todos (live-load or paginator)

??? how to match sorting and pagination?

# ---- FINISH ----

## Simple and definition links

The todolist demo shows how the <!--simple link: --> [user](glossary.md#user) can manage the <!--definiton link: -->[todo item]s of his [todo list].

<!-- definitions  (place anywhere in document) -->

[todo item]: glossary.md#todo-item
[todo list]: glossary.md#todo-list

## Formatting demo

Autolink urls (remark-gfm): [www.example.com](http://www.example.com), <https://example.com>, and <contact@example.com>.

Autolink by regexp (remark-autolink-references): <!-- "JIRA- 123" without space  -->
[JIRA-123](https://example.atlassian.net/browse/JIRA-123)

Image: ![my image](favicon.ico)

Table:

<table>
  <tr>
    <th>Test</th>
    <th>Table</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
  </tr>
</table>

formatting: **bold** **_italic_** <s>strikethrough</s>

    this
      is
        formatted
          text

# Check dead links warnings (via remark-validate-links)

- Real local anchor: [#local-chapter](#local-chapter)
- Real page: [page2](page2.md)
- Real page & real anchor: [page#chapter-2](page2.md#chapter-2)

To check dead links uncomment lines below:

<!-- *   Dead local anchor: [#dead-local-chapter](#dead-local-chapter) -->

<!-- *   Dead page: [dead-link](dead-link) -->

<!-- *   Real page & dead anchor: [page2#dead-anchor](page2.md#dead-anchor) -->

## Local Chapter

```

```
