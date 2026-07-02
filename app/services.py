from typing import Optional

class UserService:
    def __init__(self, db):
        self.db = db

    def get_user(self, user_id: int) -> Optional[dict]:
        return self.db.get_user(user_id)