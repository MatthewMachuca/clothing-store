from xmlrpc.client import Boolean
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    trending: bool
    picture: str