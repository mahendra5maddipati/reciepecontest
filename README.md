# Recipe Contest Page

This project is a Recipe Contest Page built with React. It allows users to browse, search, and filter recipes based on various attributes, meal types, and dish types.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features-1)
- [Components](#components)
- [Future Contributing](#future-contributing)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd recipecontest
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

To create a production build, run:

```bash
npm run build
```

Features
Browse a list of recipes with details such as name, chef, ratings, and description.
Search for recipes by name.
Filter recipes based on attributes (Contest Winner, Featured, Test Kitchen Approved), meal types (Dinner, Lunch, Dessert, Breakfast), and dish types (Curry, Pizza, Pasta, Salad).
Sort recipes by newest, oldest, highest rated, and lowest rated.
Clear all filters and remove individual filters.
Components
App.js
The main component that renders the RecipesPage component.

RecipesPage.jsx
The main page component that displays the list of recipes, search bar, sorting options, and filter sidebar.

RecipeCard.jsx
A component that displays individual recipe details.

SearchBar.jsx
A component that provides a search input for filtering recipes by name.

SortingOptions.jsx
A component that provides sorting options for the recipes.

FilterSidebar.jsx
A component that provides filtering options based on attributes, meal types, and dish types.

## Future Contributing

-need to develop filter groups(more advanced)
-need to implement framer-motion for animations