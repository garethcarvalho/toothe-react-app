# Gareth's D&D 5e Monster Atlas

What you see here is the source code for a small little React app that pulls monster data from [an API that provides data on everything in Dungeons & Dragons 5e](https://www.dnd5eapi.co/).

I didn't have all that much time to make it, and all components are made from scratch. I had ambitions to make it a fully fledged Initiative tracker, but maybe I can come back to that some other day.

## Setup

To take a look at the project, you can follow these steps.

In your terminal, navigate to a folder that you would like to use to house the project in, and run this snippit to clone the repository:

```console
    git clone https://github.com/garethcarvalho/toothe-react-app.git
```

Next, navigate into the project folder with your terminal by running this:

```console
    cd ./toothe-react-app/
```

Once there, you can now start running the project by running this snippit.

```console
    npm run dev
```

Next, go to your browser, and navigate to `http://localhost:8080`, and you will see the project in all its glory.

Inside the project, you will immediately see a giant list of monster names. You can use the search bar at the top to find specific ones. Clicking "Expand" on any of the monsters will reveal their statblock, which pulls data from the same API. It used to also display the image of the monster in the background of the expanded foldout, but the API had a lot of AI generated imagery, which I feel does not belong in something I make.

## Closing Remarks

Thank you for taking the time to check out my project. I don't think this is truly indicative of what I am capable of, but considering the amount of time I had, I think I'm okay with it. I really hope this was worth considering, and I hope you all have a great day.
