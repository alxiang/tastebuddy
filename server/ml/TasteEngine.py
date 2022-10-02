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

        reviews = [tup[2] for tup in user_food_history]

        ## Embed the foods
        food_strings = [
            f"{tup[0]}: {tup[1]}" for tup in user_food_history
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

        return {"flavor_profile": flavor_profile, "cuisine_profile": cuisine_profile}
        

    def compute_score_for_food(self, user_food_history, food_tup):
        """
        Content-based filtering approach

        When we have more user data:
        - Take a hybrid approach, i.e. also consider collaborative filtering
        ------------------------------------------------
        Takes user food 
        """

        reviews = [tup[2] for tup in user_food_history]
        ## Embed the food history
        food_strings = [
            f"{tup[0]}: {tup[1]}" for tup in user_food_history
        ]
        food_embeddings = self.model.encode(food_strings)

        ## Embed the food
        menu_food = [f"{food_tup[0]}: {food_tup[1]}"]
        menu_food_embedding = self.model.encode(menu_food)

        score = 0

        for food_embedding, review_score in zip(food_embeddings, reviews):
            score += cosine_sim(menu_food_embedding[0], food_embedding) * review_score

        return score




def main():
    taste_engine = TasteEngine()
    print(taste_engine.compute_taste_profile_for_user(None))
    print(taste_engine.compute_score_for_menu(None, None))


if __name__ == "__main__":
    main()
