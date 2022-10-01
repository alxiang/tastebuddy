from collections import defaultdict


def group_order(user_selected, ordered):
    """
    Each person clicks the dishes they are part of, and we return
    the total per user as a Dict[uuid, float]

    Takes: Dict[uuid, List[food_id]], Dict[food_id, prices], i.e. a list of foods selected by each user,
    and a dict of prices per food
    Returns: Dict[uuid, float], i.e. mapping user to the amount they owe
    """
    users_per_dish = defaultdict(list)

    for food_id in ordered:
        for uuid, selected_food_ids in user_selected.items():
            if food_id in selected_food_ids:
                users_per_dish[food_id].append(uuid)

    owed_per_user = defaultdict(float)
    for food_id, users in users_per_dish.items():
        for uuid in users:
            owed_per_user[uuid] += ordered[food_id] / len(users)

    return owed_per_user


def main():
    user_selected = {
        0: [100, 101, 102],  # 5 + 14 + 6.5 + 0 = 25.5
        1: [100, 102, 103],  # 5 + 0  + 6.5 + 12 = 23.5
    }
    ordered = {100: 10, 101: 14, 102: 13, 103: 12}
    result = group_order(user_selected, ordered)
    assert result[0] == 25.5
    assert result[1] == 23.5


if __name__ == "__main__":
    main()
