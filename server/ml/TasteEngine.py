import abc

import numpy as np
from sentence_transformers import SentenceTransformer

FLAVORS = [
    "sweet",
    "sour",
    "salty",
    "bitter",
    "umami",
]
CUISINES = [
    "Italian",
    "French",
    "Chinese",
    "Japanese",
    "Indian",
    "Italian",
    "Greek",
    "Spanish",
    "Lebanese",
    "Moroccan",
    "Turkish",
    "Thai",
]


def cosine_sim(a, b):
    return np.dot(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))


class TasteEngine(abc.ABC):
    
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.flavor_embeddings = self.model.encode(FLAVORS)
        self.cuisine_embeddings = self.model.encode([f"{cuisine} Cuisine" for cuisine in CUISINES])
    
    def compute_taste_profile_for_user(self, user_food_history):
        """
        Natural Language Similarity Approach

        When we have more dishes and usage:
        - look at history in last x days
        - have a more nuanced breakdown of flavor
        - have a better way to combine ingredients and name
        - normalize by restaurant rating, e.g. from our users or yelp
        
        ------------------------------------------------
        Takes: food/order history for user and review, i.e. [("Lobster", 4/5), ...]
        Returns: flavor profile dict and cuisine profile dict
        """

        # TODO: actually retrieve this later
        food_history = [
            ("Charred Octopus", "roasted garlic white bean puree, piquillo peppers, cherry tomatoes, avocado", 4/5),
            ("Lobster Bisque", "black truffle, melted leeks, lobster chunk", 4/5),
            ("Grilled NY Strip Steak", "truffle french fries, grilled asparagus, green peppercorn sauce", 3/5),
            ("Mushrooms", "", 2/5),
            ("Seafood Pappardelle", "lobster, shrimp, scallops, peas, rustic tomatoes, brandy-lobster sauce", 5/5),
        ]
        reviews = [tup[2] for tup in food_history]

        ## Embed the foods
        food_strings = [
            f"{tup[0]}: {tup[1]}" for tup in food_history
        ]
        food_embeddings = self.model.encode(food_strings)

        ## Determine similarity to flavors (TODO: need to normalize this across flavors)
        flavor_profile = {}
        for flavor, flavor_embedding in zip(FLAVORS, self.flavor_embeddings):
            similarity = 0

            # Cosine similarity weighted by review score  (TODO: can also weight by recency)
            for food_embedding, review_score in zip(food_embeddings, reviews):
                similarity += cosine_sim(flavor_embedding, food_embedding) * review_score

            flavor_profile[flavor] = similarity

        ## Determine similarity to flavors (TODO: need to normalize this across flavors)
        cuisine_profile = {}
        for cuisine, cuisine_embedding in zip(CUISINES, self.cuisine_embeddings):
            similarity = 0

            # Cosine similarity weighted by review score  (TODO: can also weight by recency)
            for food_embedding, review_score in zip(food_embeddings, reviews):
                similarity += cosine_sim(cuisine_embedding, food_embedding) * review_score

            cuisine_profile[cuisine] = similarity

        ## Normalize the profiles
        max_score = max(flavor_profile.values())
        for k in flavor_profile:
            flavor_profile[k] /= max_score

        max_score = max(cuisine_profile.values())
        for k in cuisine_profile:
            cuisine_profile[k] /= max_score

        return [flavor_profile, cuisine_profile]
        

    def compute_score_for_menu(self, user, menu):
        """
        Content-based filtering approach

        When we have more user data:
        - Take a hybrid approach, i.e. also consider collaborative filtering
        ------------------------------------------------
        Takes user food 
        """

        # TODO: actually retrieve this later
        food_history = [
            ("Charred Octopus", "roasted garlic white bean puree, piquillo peppers, cherry tomatoes, avocado", 4/5),
            ("Lobster Bisque", "black truffle, melted leeks, lobster chunk", 4/5),
            ("Grilled NY Strip Steak", "truffle french fries, grilled asparagus, green peppercorn sauce", 3/5),
            ("Mushrooms", "", 2/5),
            ("Seafood Pappardelle", "lobster, shrimp, scallops, peas, rustic tomatoes, brandy-lobster sauce", 5/5),
        ]
        reviews = [tup[2] for tup in food_history]
        ## Embed the foods
        food_strings = [
            f"{tup[0]}: {tup[1]}" for tup in food_history
        ]
        food_embeddings = self.model.encode(food_strings)

        menu = [
            ("Charred Octopus", "roasted garlic white bean puree, piquillo peppers, cherry tomatoes, avocado"),
            ("Lobster Bisque", "black truffle, melted leeks, lobster chunk"),
            ("Grilled NY Strip Steak", "truffle french fries, grilled asparagus, green peppercorn sauce"),
            ("Mushrooms", ""),
            ("Seafood Pappardelle", "lobster, shrimp, scallops, peas, rustic tomatoes, brandy-lobster sauce"),
        ]
        ## Embed the foods
        menu_foods = [
            f"{tup[0]}: {tup[1]}" for tup in menu
        ]
        menu_food_embeddings = self.model.encode(menu_foods)

        score_per_menu_item = {}

        for (menu_food_name, _), menu_food_embedding in zip(menu, menu_food_embeddings):
            score = 0

            for food_embedding, review_score in zip(food_embeddings, reviews):
                score += cosine_sim(menu_food_embedding, food_embedding) * review_score

            score_per_menu_item[menu_food_name] = score

        return score_per_menu_item




def main():
    taste_engine = TasteEngine()
    print(taste_engine.compute_taste_profile_for_user(None))
    print(taste_engine.compute_score_for_menu(None, None))


if __name__ == "__main__":
    main()
