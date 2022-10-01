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


class TasteEngine(abc.ABC):
    pass
